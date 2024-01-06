import Table from './Table'

const MissionData = ({ data }) => {
  return (
    <>
      <h2 className='text-lg font-semibold'>Mission Data</h2>
      <Table data={data} />
    </>
  )
}

export default MissionData
