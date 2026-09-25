import PortfolioPreview from './pages/PortfolioPreview'
import Cv from './pages/Cv'

/** Deux surfaces : le portfolio à la racine, le CV à `/cv`. */
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path.endsWith('/cv') ? <Cv /> : <PortfolioPreview />
}
