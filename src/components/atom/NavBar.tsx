import React from 'react'

interface NavBarProps {
  open: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ open }) => {
  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={open} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </nav>

  )
}

export default NavBar