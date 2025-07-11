import Image from "next/image"
import React from "react"
import { IoBrowsers, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5"
import SidebarMenuItem from "./SidebarMenuItem"

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsers />,
    title: 'Dashboard',
    subtitle: 'Visualización'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator />,
    title: 'Counter',
    subtitle: 'Contador Client Side'
  },
	{
    path: '/dashboard/pokemons',
    icon: <IoFootball />,
    title: 'Pokemons',
    subtitle: 'Generación Estática'
  }
]

const Sidebar = () => {
	return (
		<div
			id='menu'
			className='bg-gray-900 min-h-screen z-10 text-slate-300 selection:bg-blue-600 selection:text-white w-96'
		>
			<div id='logo' className='my-4 px-6'>
				<h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact />
					<span className="ml-1">Dash</span><span className='text-blue-500'>8</span>.
				</h1>
				<p className='text-slate-500 text-sm'>
					Manage your actions and activities
				</p>
			</div>
			<div id='profile' className='px-6 py-10'>
				<p className='text-slate-500'>Welcome back,</p>
				<a href='#' className='inline-flex space-x-2 items-center'>
					<span>
						<Image
							className='rounded-full w-8 h-8'
							src='https://images.unsplash.com/photo-1632226039827-ec50c1525b22?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							width={50}
              height={50}
              alt='User avatar'
						/>
					</span>
					<span className='text-sm md:text-base font-bold'>Daenerys Targaryen</span>
				</a>
			</div>
			<div id='nav' className='w-full px-6'>
        {menuItems.map(item => (<SidebarMenuItem 
          path={item.path}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          key={item.path}
        />))}
			</div>
		</div>
	)
}

export default Sidebar
