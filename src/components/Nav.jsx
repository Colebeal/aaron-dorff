import { HiOutlineHome, HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

export default function Nav({ servicesRef, aboutRef, porfolioRef }) {
	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
			left: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<m.header
				initial={{ translateY: -50 }}
				animate={{ translateY: 0 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				className='z-50 bg-stone-900 px-10 py-3 fixed top-0 left-0 w-full max-w-screen-2xl h-12 items-center justify-between text-base md:flex'
			>
				<Link
					to='..'
					className='hidden md:block'
				>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl' />
				</Link>

				<ul className='hidden items-center gap-20 md:flex'>
					<li className='cursor-pointer'>
						<Link
							to='/moto'
							className='cursor-pointer'
						>
							Gearhead
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							to='/photo'
							className='cursor-pointer'
						>
							Photographer
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							to='/talent'
							className='cursor-pointer'
						>
							Talent
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							to='/craft'
							className='cursor-pointer'
						>
							Craftsman
						</Link>
					</li>
				</ul>
				<a className='cursor-pointer text-2xl text-stone-400'>
					<HiOutlineMail />
				</a>
			</m.header>

			<div className='fixed bottom-10 right-5 z-20 flex h-fit w-fit gap-4 rounded-md bg-orange-100 p-2 shadow-lg dark:bg-teal-900 md:top-16 md:hidden'>
				{/* <ThemeToggle /> */}

				<Link to='..'>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl text-teal-900 dark:text-orange-50' />
				</Link>
				{/* {isGallery && <HiMenu onClick={menuHandler} className="z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>} */}
			</div>
		</>
	)
}
