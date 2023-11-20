import Nav from '../components/Nav'
import Loader from '../components/Loader'
import Title from '../components/Title.jsx'
import Photo from './Profiles/Photo.jsx'
import Moto from './Profiles/Moto.jsx'
import Craft from './Profiles/Craft.jsx'
import Talent from './Profiles/Talent.jsx'
import Profiles from '../components/Profiles.jsx'

import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function RootLayout() {
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const pathname = location.pathname

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<Nav />
					<main className='m-auto mt-6 md:mt-12'>
						<Title
							location={location}
							pathname={pathname}
						/>
						<AnimatePresence mode='wait'>
							<Routes
								location={location}
								key={location.pathname}
							>
								<Route
									index
									path='/'
									element={<Profiles />}
								/>
								<Route
									path='/photo'
									element={<Photo />}
								/>
								<Route
									path='/moto'
									element={<Moto />}
								/>
								<Route
									path='/craft'
									element={<Craft />}
								/>
								<Route
									path='/talent'
									element={<Talent />}
								/>
							</Routes>
						</AnimatePresence>
					</main>
				</>
			)}
		</>
	)
}
