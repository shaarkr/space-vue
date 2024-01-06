import MissionData from '../components/MissionData'
import Overview from '../components/Overview'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
      <div className='flex flex-col flex-wrap w-full gap-4 p-4 bg-gray-100 md:p-6'>
        <header className='flex items-center justify-between gap-4 py-3'>
          <h1 className='text-xl font-semibold'>Dashboard</h1>
          <div className='flex items-center justify-center'>
            <p className='text-lg font-medium'>Sharath</p>
          </div>
        </header>

        <Overview />

        <MissionData />
      </div>
    </div>
  )
}

export default Dashboard
