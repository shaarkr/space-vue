import Charts from './Charts'
import Summary from './Summary'

const Overview = () => {
  return (
    <>
      <h2 className='text-lg font-semibold'>Overview</h2>
      <div className='flex items-center justify-between gap-4'>
        <Summary />
        <Charts />
      </div>
    </>
  )
}

export default Overview
