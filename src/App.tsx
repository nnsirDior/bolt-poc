import { Dashboard } from './components/Dashboard'
import { FeatureFlagsProvider } from './context/FeatureFlagsContext'

function App() {
  return (
    <FeatureFlagsProvider>
      <div className="bg-zinc-50 font-sans text-zinc-900 antialiased">
        <Dashboard />
      </div>
    </FeatureFlagsProvider>
  )
}

export default App
