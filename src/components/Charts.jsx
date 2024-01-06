import { useEffect, useState } from 'react'
import { AgChartsReact } from 'ag-charts-react'

const Charts = ({ missions }) => {
  const [chartOptions, setChartOptions] = useState(null)

  useEffect(() => {
    if (missions.length > 0) {
      const successfulMissions = missions.filter(mission => mission.successful)
      const successPercentage =
        (successfulMissions.length / missions.length) * 100

      const chartOptions = {
        title: {
          text: 'Mission Success Rate',
        },
        series: [
          {
            type: 'pie',
            angleKey: 'value',
            labelKey: 'category',
            data: [
              {
                category: 'Successful',
                value: successPercentage,
              },
              {
                category: 'Unsuccessful',
                value: 100 - successPercentage,
              },
            ],
          },
        ],
      }

      setChartOptions(chartOptions)
    }
  }, [missions])

  const barChartOptions = {
    data: missions.map(({ successful, price }) => ({
      price: price / 1_000_000,
      successful: successful ? 'Success' : 'Failure',
    })),
    title: {
      text: 'Mission Cost ($mn)',
    },
    series: [
      {
        type: 'bar',
        xKey: 'successful',
        yKey: 'price',
      },
    ],
  }

  return (
    chartOptions && (
      <div className='flex items-center flex-shrink-0 w-2/3 gap-2'>
        <div className=' flex-shrink-0 h-[180px] w-1/2 border rounded overflow-hidden'>
          <AgChartsReact options={barChartOptions} />
        </div>
        <div className=' flex-shrink-0 h-[180px] w-1/2 border rounded overflow-auto'>
          <AgChartsReact options={chartOptions} />
        </div>
      </div>
    )
  )
}

export default Charts
