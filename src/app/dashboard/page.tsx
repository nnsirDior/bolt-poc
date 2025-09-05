'use client'

import { Suspense } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import StatsCards from '@/components/dashboard/StatsCards'
import RecentActivity from '@/components/dashboard/RecentActivity'
import FlagList from '@/components/flags/FlagList'
import FlagModal from '@/components/flags/FlagModal'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
            
            <Suspense fallback={<div>Loading stats...</div>}>
              <StatsCards />
            </Suspense>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <Suspense fallback={<div>Loading flags...</div>}>
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Recently Updated Flags</h2>
                  <FlagList />
                </Suspense>
              </div>
              
              <div>
                <Suspense fallback={<div>Loading activity...</div>}>
                  <RecentActivity />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
        
        <FlagModal />
      </div>
    </div>
  )
}
