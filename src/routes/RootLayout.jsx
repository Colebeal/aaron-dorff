import { Outlet, useLocation } from 'react-router-dom'
import { motion as m, AnimatePresence } from 'framer-motion'

import Nav from '../components/Nav'

export default function RootLayout() {
	const location = useLocation().pathname

	return (
		<>
			<Nav />
				{/* <m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2, keyframes: [0, 0.5, 1, 0.5, 0] }}
					exit={{ opacity: 1 }}
					className='text-left flex gap-4 ml-0 m-10 mt- text-stone-400 font-semibold text-lg'
				>
					<h1>Meet Aaron Dorrf.</h1>
				</m.div> */}
				<m.div
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
					// transition={{ duration: 2}}
					// exit={{ opacity: 1 }}
					className='text-left flex items-baseline gap-7 ml-0 m-10 mt- text-stone-400 font-semibold text-3xl tracking-tightest'
				>
					<h1>AARON DORFF IS A</h1>
					<span className='text-orange-600 opacity-70 text-5xl'>
						{location === '/' && <h1 className=''>lot of things</h1>}

						{location === '/moto' && <h1>Gear Head</h1>}

						{location === '/photo' && <h1>Photographer</h1>}

						{location === '/craft' && <h1>CRAFTSMAN</h1>}

						{location === '/talent' && <h1>Model</h1>}
					</span>
				</m.div>
				<Outlet />
		</>
	)
}
