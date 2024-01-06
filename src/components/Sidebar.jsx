import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <aside className='flex-col hidden w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r md:flex dark:bg-gray-900 dark:border-gray-700'>
        <Link to='/dashboard'>
          <h1 className='text-3xl font-bold dark:text-gray-200'>SpaceVue</h1>
        </Link>

        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav className='flex-1 -mx-3 space-y-3'>
            <Link
              className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              to='/dashboard'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
                />
              </svg>

              <span className='mx-2 text-sm font-medium'>Dashboard</span>
            </Link>
          </nav>

          <div className='mt-6'>
            <Link
              to='/'
              className='flex items-center gap-4 mt-6 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
            >
              <span className='text-gray-500 transition-colors duration-200 rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                  />
                </svg>
              </span>
              <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
                Logout
              </span>
            </Link>
          </div>
        </div>
      </aside>

      <aside className='flex items-center justify-between p-3 md:hidden'>
        <Link to='/dashboard'>
          <h1 className='font-bold '>SpaceVue</h1>
        </Link>
        <span className='cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </span>
      </aside>
    </>
  )
}

export default Sidebar
