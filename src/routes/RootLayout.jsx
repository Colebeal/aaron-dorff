import { Outlet, useLocation } from 'react-router-dom'
import { motion as m, AnimatePresence } from 'framer-motion'

import Nav from '../components/Nav'

export default function RootLayout() {
	const location = useLocation().pathname

	return (
		<>
			<Nav />
			<m.div className='text-left flex gap-3 ml-0 m-16 text-stone-400 font-semibold text-lg'>
				<h1>Aaron Dorff is</h1>
				<span className='-translate-y-1 border-b-4 border-stone-700 text-[#82b2aa]'>
					{location === '/' && (
						<h1 className='translate-y-1'>a lot of things</h1>
					)}

					{location === '/moto' && (
						<h1 className='translate-y-1'>a Gear Head</h1>
					)}

					{location === '/photo' && (
						<h1 className='translate-y-1'> a Photographer</h1>
					)}

					{location === '/craft' && (
						<h1 className='translate-y-1'>a Craftsman</h1>
					)}

					{location === '/talent' && <h1 className='translate-y-1'>a Model</h1>}
				</span>
			</m.div>
			<AnimatePresence>
				<Outlet />
			</AnimatePresence>
		</>
	)
}
