import Charts from './Charts'
import Summary from './Summary'

const Overview = ({ missions }) => {
  return (
    <>
      <h2 className='text-lg font-semibold'>Overview</h2>
      <div className='flex justify-between flex-shrink-0 w-full gap-4'>
        <Summary missions={missions} />
        <Charts missions={missions} />
      </div>
    </>
  )
}

export default Overview
