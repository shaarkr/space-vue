import Charts from './Charts'
import Summary from './Summary'

const Overview = ({ missions }) => {
  return (
    <>
      <h2 className='text-sm font-semibold md:text-lg'>Overview</h2>
      <div className='flex flex-col justify-between w-full gap-4 md:flex-row'>
        <Summary missions={missions} />
        <Charts missions={missions} />
      </div>
    </>
  )
}

export default Overview
