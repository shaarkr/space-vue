import Table from './Table'

const MissionData = ({ data }) => {
  return (
    <>
      <h2 className='text-sm font-semibold md:text-lg'>Mission Data</h2>
      <Table data={data} />
    </>
  )
}

export default MissionData
