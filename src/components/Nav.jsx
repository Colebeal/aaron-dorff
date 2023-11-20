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
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
				className='flex md:hidden z-50 top-0 left-0 w-full items-center justify-between text-base'
			>
				<Link
					to='..'
					className='md:hidden'
				>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl ' />
				</Link>

				<div className='text-stone-500 font-semibold border-b-1 border-stone-500'>
					<h3 className='underline text-orange-500 opacity-60'>navigation</h3>
				</div>

				<ul className='absolute opacity-0 hidden rounded-full items-center gap-20 md:flex'>
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
							to='/craft'
							className='cursor-pointer  focus:opacity-75 focus:text-indigo-800'
						>
							Craftsman
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
			<m.header
				initial={{ translateY: -100 }}
				animate={{ translateY: -20 }}
				transition={{ duration: 1, delay: 1 }}
				className='hidden z-50 px-10 py-3 top-0 left-0 w-full max-w-screen-2xl items-center justify-between text-base md:flex'
			>
				<Link
					to='..'
					className='hidden md:block'
				>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl ' />
				</Link>

				<ul className='p-2 px-4 rounded-full items-center gap-20 md:flex'>
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
							to='/craft'
							className='cursor-pointer  focus:opacity-75 focus:text-indigo-800'
						>
							Craftsman
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
		</>
	)
}
