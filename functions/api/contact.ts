// Cloudflare Pages Function — POST /api/contact
// Sends the contact form submission to the studio inbox via SendGrid.
// Requires these environment variables (set in Pages project → Settings → Variables and secrets):
//   SENDGRID_API_KEY  (secret) — SendGrid API key with Mail Send permission
//   CONTACT_TO_EMAIL  — where inquiries are delivered (e.g. hello@guvnexus.com)
//   CONTACT_FROM_EMAIL — a sender identity verified in SendGrid (e.g. noreply@guvnexus.com)

interface Env {
  SENDGRID_API_KEY: string
  CONTACT_TO_EMAIL?: string
  CONTACT_FROM_EMAIL?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const fail = (msg: string, status = 400) =>
    Response.json({ ok: false, error: msg }, { status })

  let data: Record<string, string>
  try {
    data = await request.json()
  } catch {
    return fail('Invalid request body.')
  }

  const name = (data.name || '').trim().slice(0, 120)
  const email = (data.email || '').trim().slice(0, 200)
  const message = (data.message || '').trim().slice(0, 5000)
  const company = (data.company || '').trim().slice(0, 120)
  // Honeypot — bots fill this, humans never see it
  if ((data.website || '').trim() !== '') return Response.json({ ok: true })

  if (!name) return fail('Please tell us your name.')
  if (!EMAIL_RE.test(email)) return fail('Please use a valid email address.')
  if (!message) return fail('Please include a short message.')

  if (!env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not configured')
    return fail('Email service is not configured yet. Please email hello@guvnexus.com directly.', 503)
  }

  const to = env.CONTACT_TO_EMAIL || 'hello@guvnexus.com'
  const from = env.CONTACT_FROM_EMAIL || 'noreply@guvnexus.com'

  const text = [
    `New inquiry from guvnexus.com`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    company ? `Company: ${company}` : null,
    ``,
    message,
  ].filter((l) => l !== null).join('\n')

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: from, name: 'GUV Nexus Website' },
      reply_to: { email, name },
      subject: `New inquiry — ${name}`,
      content: [{ type: 'text/plain', value: text }],
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    console.error(`SendGrid error ${res.status}: ${detail}`)
    return fail('The message could not be sent. Please email hello@guvnexus.com directly.', 502)
  }

  // Auto-reply to the visitor — best effort; never fail the request on this.
  try {
    const autoReply = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email, name }] }],
        from: { email: from, name: 'GUV Nexus' },
        subject: 'We received your message — GUV Nexus',
        content: [
          {
            type: 'text/plain',
            value: [
              `Hi ${name},`,
              ``,
              `Thank you for reaching out to GUV Nexus. Your message has landed`,
              `with the studio — we read everything personally and will reply`,
              `within two business days.`,
              ``,
              `If anything is time-sensitive, you can always reach us directly`,
              `at hello@guvnexus.com.`,
              ``,
              `— GUV Nexus`,
              `Software that solves real business problems`,
            ].join('\n'),
          },
        ],
      }),
    })
    if (!autoReply.ok) {
      console.error(`Auto-reply failed ${autoReply.status}: ${await autoReply.text()}`)
    }
  } catch (err) {
    console.error('Auto-reply error:', err)
  }

  return Response.json({ ok: true })
}

// Reject anything that isn't POST
export const onRequest: PagesFunction<Env> = async ({ request }) => {
  if (request.method !== 'POST') {
    return Response.json({ ok: false, error: 'Method not allowed.' }, { status: 405 })
  }
  return new Response(null, { status: 404 })
}
