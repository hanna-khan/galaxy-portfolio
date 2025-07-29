
import { MobileProvider } from './contexts/MobileContext';
import { Analytics } from "@vercel/analytics/react"
import styles from './../src/scenes/Room/Device/Monitor.module.css';
// scenes
import ErrorBoundary from './ui/ErrorBoundary';
function App() {
  return (
    <>

      <ErrorBoundary>
        <MobileProvider>
          <div className={styles['web-content']}>
            <iframe
              src="/templates/Portfolio.html"
              title="Portfolio"
              className={styles['web-iframe']}
            />
          </div>
        </MobileProvider>
      </ErrorBoundary>
      <Analytics />
    </>
  );
}

export default App;