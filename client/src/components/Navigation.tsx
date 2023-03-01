import { NavLink } from 'react-router-dom'

import '../styles/Navigation.scss'

const Navigation = () => {
   const activeClassName = 'active'

   const links = [
      {
         name: 'Strona główna',
         icon: 'bx-home-alt',
         path: '/',
      },
      {
         name: 'Zarezerwuj',
         icon: 'bx-calendar',
         path: '/reserve',
      },
   ]

   return (
      <nav>
         <div className="title">
            Cinema<span>MAX</span>
         </div>
         <div className="links">
            {links.map((link, index) => (
               <NavLink key={index} to={link.path} className={({ isActive }) => (isActive ? activeClassName : undefined)}>
                  <i className={`bx ${link.icon}`}></i> {link.name}
               </NavLink>
            ))}
         </div>
      </nav>
   )
}

export default Navigation
