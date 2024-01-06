import Charts from './Charts'
import Summary from './Summary'

const Overview = ({ missions }) => {
  return (
    <>
      <h2 className='text-lg font-semibold'>Overview</h2>
      <div className='flex items-center justify-between flex-1 flex-shrink-0 gap-4'>
        <Summary />
        <Charts missions={missions} />
      </div>
    </>
  )
}

export default Overview
