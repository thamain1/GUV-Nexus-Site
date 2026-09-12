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

  return Response.json({ ok: true })
}

// Reject anything that isn't POST
export const onRequest: PagesFunction<Env> = async ({ request }) => {
  if (request.method !== 'POST') {
    return Response.json({ ok: false, error: 'Method not allowed.' }, { status: 405 })
  }
  return new Response(null, { status: 404 })
}
