import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='layout'>
        <div>
            <Link className='link' to='/'>Uditok</Link>
            <Link className='link' to='/szerkeszt'>Szerkeszt</Link>
            <Link className='link' to='/nevjegy'>Nevjegy</Link>
        </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
