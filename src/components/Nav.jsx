import { HiOutlineHome, HiOutlineMail } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { easeOut, motion as m, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

export default function Nav({ servicesRef, aboutRef, porfolioRef }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
			left: 0,
			behavior: 'smooth',
		})
	}

	const menuToggle = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const location = useLocation().pathname

	return (
		<AnimatePresence>
			{/* Mobile Menu Modal */}

			{isMenuOpen && (
				<m.div
					key='modal'
					initial={{ opacity: 0, y: 200 }}
					animate={{
						opacity: 1,
						y: 50,
						transition: { duration: 0.5, ease: easeOut },
					}}
					exit={{ opacity: 0, y: 200 }}
					className="md:hidden z-50 fixed bottom-5 left-0 w-full h-[400px] bg-[#ece3d4] font-['vintage'] flex justify-center p-10"
				>
					<ul
						key='mobile'
						className='rounded-full gap-6 flex flex-col justify-start items-center '
					>
						<li>
							<Link
								to='/photo'
								onClick={menuToggle}
								className='cursor-pointer focus:opacity-75 text-orange-500 focus:text-indigo-800 opacity-60'
							>
								Photographer
							</Link>
						</li>
						<li>
							<Link
								to='/craft'
								onClick={menuToggle}
								className='cursor-pointer  focus:opacity-75 text-orange-500 focus:text-indigo-800 opacity-60'
							>
								Craftsman
							</Link>
						</li>
						<li>
							<Link
								to='/talent'
								onClick={menuToggle}
								className='cursor-pointer focus:opacity-75 text-orange-500 focus:text-indigo-800 opacity-60'
							>
								Talent
							</Link>
						</li>
						<li>
							<IoClose
								onClick={menuToggle}
								className='focus:text-orange-500 text-indigo-800 opacity-60 font-bold text-2xl'
							/>
						</li>
					</ul>
				</m.div>
			)}

			{/* Mobile Navigation */}
			<m.header
				key='desktop'
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

				<div
					onClick={menuToggle}
					className='text-stone-500 font-semibold border-b-1 border-stone-500'
				>
					<h3 className='text-orange-500 opacity-60'>Navigation</h3>
				</div>
				<a
					href='mailto:aarondorff22@gmail.com'
					className='cursor-pointer text-2xl text-stone-400'
				>
					<HiOutlineMail />
				</a>
			</m.header>

			{/* Desktop Navigation*/}

			<m.header
				initial={{ translateY: -100 }}
				animate={{ translateY: -20 }}
				transition={{ duration: 1, delay: 1 }}
				className='hidden md:flex z-50 px-10 py-3 top-0 w-full items-center justify-between text-base '
			>
				<Link
					to='..'
					className='hidden md:block'
				>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl ' />
				</Link>

				<ul className='p-2 px-4 rounded-full items-center gap-20 md:flex tracking-wide'>
					<li className='cursor-pointer '>
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
					{/*   */}
				</ul>
				<a
					href='mailto:aarondorff22@gmail.com'
					className='cursor-pointer text-2xl text-stone-400'
				>
					<HiOutlineMail />
				</a>
			</m.header>
		</AnimatePresence>
	)
}
