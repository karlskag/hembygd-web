import '../styles/globals.css'
import { Analytics } from "@vercel/analytics/next"

function App({ Component, pageProps }) {
  return <>
    <Analytics />
    <Component {...pageProps} />
  </>
}

export default App
