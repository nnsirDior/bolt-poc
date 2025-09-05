'use client'

import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import FlagList from '@/components/flags/FlagList'
import FlagModal from '@/components/flags/FlagModal'
import { useFlagStore } from '@/store/flagStore'

export default function FlagsPage() {
  const { selectedEnvironment } = useFlagStore()
  
  const getEnvironmentColor = (env: string) => {
    switch (env) {
      case 'development':
        return 'bg-blue-100 text-blue-800'
      case 'staging':
        return 'bg-yellow-100 text-yellow-800'
      case 'production':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Feature Flags</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Manage all feature flags for your projects. Current environment: 
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-medium ${getEnvironmentColor(selectedEnvironment)}`}>
                    {selectedEnvironment}
                  </span>
                </p>
              </div>
            </div>
            
            <FlagList />
          </div>
        </main>
        
        <FlagModal />
      </div>
    </div>
  )
}
