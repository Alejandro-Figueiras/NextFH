import Link from "next/link"
import {HomeIcon} from '@primer/octicons-react'
import ActiveLink from "../active-link/ActiveLink"

const navItems = [
  {
    path: '/about',
    text: 'About'
  },
  {
    path: '/contact',
    text: 'Contact'
  },
  {
    path: '/pricing',
    text: 'Pricing'
  }
]

const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 p-2 m-2 rounded gap-8">
      <Link href="/" className="flex items-center gap-2">
        <HomeIcon />Home
      </Link>
      {
        navItems.map( navItem => (<ActiveLink {...navItem} key={navItem.path} />))
      }
    </nav>
  )
}

export default Navbar