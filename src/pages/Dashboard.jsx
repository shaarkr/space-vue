import { useEffect, useState } from 'react'

import MissionData from '../components/MissionData'
import Overview from '../components/Overview'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  const [missions, setMissions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ENDPOINT =
          'https://www.ag-grid.com/example-assets/space-mission-data.json'
        const response = await fetch(ENDPOINT)
        const data = await response.json()
        setMissions(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='flex flex-col h-screen md:flex-row'>
      <Sidebar />
      <div className='flex flex-col w-full gap-4 p-4 overflow-y-auto bg-gray-100 md:p-6'>
        <header className='flex items-center justify-between md:py-3 md:gap-4'>
          <h1 className='font-semibold md:text-xl'>Dashboard</h1>
          <div className='flex items-center justify-center'>
            <p className='text-xs font-medium md:text-lg'>Sharath</p>
          </div>
        </header>

        <div className='flex flex-col flex-1 flex-shrink-0 w-full gap-4'>
          <Overview missions={missions} />

          <MissionData data={missions} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
