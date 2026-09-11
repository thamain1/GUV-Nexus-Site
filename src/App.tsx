import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import VariantA from './pages/VariantA'
import VariantB from './pages/VariantB'
import Institution from './pages/Institution'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Institution blueprint />} />
      <Route path="/variant-a" element={<VariantA />} />
      <Route path="/classic" element={<Home />} />
      <Route path="/variant-b" element={<VariantB />} />
      <Route path="/institution" element={<Institution />} />
      <Route path="/blueprint" element={<Institution blueprint />} />
    </Routes>
  )
}
