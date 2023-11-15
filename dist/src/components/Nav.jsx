import { HiOutlineHome, HiOutlineMail } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { motion as m } from 'framer-motion'

export default function Nav({ servicesRef, aboutRef, porfolioRef }) {
	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
			left: 0,
			behavior: 'smooth',
		})
	}

	const location = useLocation().pathname

	return (
		<>
			<m.header
				initial={{ translateY: -100 }}
				animate={{ translateY: -20 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				className='z-50 px-10 py-3 top-0 left-0 w-full max-w-screen-2xl items-center justify-between text-base md:flex'
			>
				<Link
					to='..'
					className='hidden md:block'
				>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl ' />
				</Link>

				<ul className='  p-2 px-4 rounded-full backdrop-blur-lg backwdrop-opacity-100 items-center gap-20 md:flex'>
					<li className='cursor-pointer'>
						<Link
							to='/photo'
							className='cursor-pointer focus:opacity-75 focus:text-indigo-800'
						>
							Photographer
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							to='/talent'
							className='cursor-pointer focus:opacity-75 focus:text-indigo-800'
						>
							Talent
						</Link>
					</li>
					<li className='cursor-pointer '>
						<Link
							to='/craft'
							className='cursor-pointer  focus:opacity-75 focus:text-indigo-800'
						>
							Craftsman
						</Link>
					</li>
					<li className='cursor-pointer '>
						<Link
							to='/moto'
							className='cursor-pointer focus:opacity-75 focus:text-indigo-800'
						>
							Gearhead
						</Link>
					</li>
				</ul>
				<a
					href='mailto:aarondorff22@gmail.com'
					className='cursor-pointer text-2xl text-stone-400'
				>
					<HiOutlineMail />
				</a>
			</m.header>

			<div className='fixed bottom-10 right-5 z-20 flex h-fit w-fit gap-4 rounded-md bg-orange-100 p-2 shadow-lg dark:bg-teal-900 md:top-16 md:hidden'>
				{/* <ThemeToggle /> */}

				<Link to='..'>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl hover:text-orange-500' />
				</Link>
				{/* {isGallery && <HiMenu onClick={menuHandler} className="z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>} */}
			</div>
		</>
	)
}
