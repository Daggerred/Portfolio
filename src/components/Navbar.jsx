import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
          <NavLink to="/" className="vh-100 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
              <p className='blue-gradient_text'>Shailendra Sisodia</p>
          </NavLink>
          <nav className='flex text-lg gap-20 font-medium'>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
              About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
              Projects
          </NavLink>
          </nav>
      </header>
  )
}

export default Navbar

// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <header className='w-full flex items-center justify-between p-4 shadow-md bg-gray-100'>
//       <NavLink to="/" className="rounded-lg bg-transparent p-4 flex items-center justify-center font-bold shadow-lg">
//         <p className='blue-gradient_text'>Shailendra Sisodia</p>
//       </NavLink>
//       <nav className='flex text-lg gap-20 font-medium'>
//         <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
//           About
//         </NavLink>
//         <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
//           Projects
//         </NavLink>
//       </nav>
//     </header>
//   )
// }

// export default Navbar
