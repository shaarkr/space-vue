import { useEffect, useState } from 'react'

const Summary = ({ missions }) => {
  const [successfulMissions, setSuccessfulMissions] = useState(0)
  const [unsuccessfulMissions, setUnsuccessfulMissions] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (missions.length > 0) {
      const successfulMissionsCount = missions.filter(
        ({ successful }) => successful
      ).length
      const unsuccessfulMissionsCount =
        missions.length - successfulMissionsCount
      const totalMissionPrice = missions.reduce(
        (total, mission) => total + mission.price,
        0
      )

      setSuccessfulMissions(successfulMissionsCount)
      setUnsuccessfulMissions(unsuccessfulMissionsCount)
      setTotalPrice(totalMissionPrice)
    }
  }, [missions])
  return (
    <div className='flex flex-wrap justify-between w-1/3 gap-2 p-3 bg-white border border-gray-200'>
      <div className='flex-1 px-4 py-2 bg-green-200 border border-gray-300 rounded '>
        <h3 className='font-semibold text-green-700'>Successful</h3>
        <p className='text-3xl text-green-700 '>{successfulMissions}</p>
      </div>
      <div className='flex-1 px-4 py-2 bg-red-200 border border-gray-300 rounded '>
        <h3 className='font-semibold text-red-700'>Unsuccessful</h3>
        <p className='text-3xl text-red-700 '>{unsuccessfulMissions}</p>
      </div>

      <div className='flex-1 px-4 py-2 bg-indigo-200 border border-gray-300 rounded '>
        <h3 className='font-semibold text-indigo-900'>Total Cost</h3>
        <p className='text-3xl text-indigo-900'>
          ${totalPrice.toLocaleString('en-US')}
        </p>
      </div>
    </div>
  )
}

export default Summary
