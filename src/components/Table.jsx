import { useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-alpine.css' // Theme

const Table = ({ data = [] }) => {
  const columnDefs = useRef([
    { headerName: 'Mission', field: 'mission' },
    { headerName: 'Company', field: 'company' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'Time', field: 'time' },
    { headerName: 'Rocket', field: 'rocket' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Successful', field: 'successful' },
  ])
  return (
    <div className='w-full ag-theme-alpine max-h-[400px] h-full'>
      <AgGridReact rowData={data} columnDefs={columnDefs.current} />
    </div>
  )
}

export default Table
