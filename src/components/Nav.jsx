import { HiOutlineHome, HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { easeOut, motion as m, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

export default function Nav({ servicesRef, aboutRef, porfolioRef }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const menuToggle = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<AnimatePresence>
			{/* Mobile Menu Modal */}

			{isMenuOpen && (
				<>
					<m.div
						key='backdrop'
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 0.5, ease: easeOut },
						}}
						exit={{
							opacity: 0,
							transition: { duration: 0.5, ease: easeOut },
						}}
						onClick={menuToggle}
						className='z-20 absolute top-0 left-0 w-full h-full backdrop-blur-sm'
					></m.div>
					<m.div
						key='modal'
						initial={{ opacity: 0, y: 200 }}
						animate={{
							opacity: 1,
							y: 50,
							transition: { duration: 0.5, ease: easeOut },
						}}
						exit={{
							opacity: 0,
							y: 200,
							transition: { duration: 0.5, ease: easeOut },
						}}
						className="md:hidden z-50 fixed bottom-5 left-0 w-full m-5 h-[300px] bg-indigo-200 font-['vintage'] flex justify-center py-10 px-2 shadow-lg rounded-t-3xl text-3xl backdrop-blur-sm backdrop-opacity-10"
					>
						<ul className='gap-6 flex flex-col justify-start items-end '>
							<li>
								<Link
									to='/photo'
									onClick={menuToggle}
									className='cursor-pointer focus:opacity-75 text-orange-500 '
								>
									Photographer
								</Link>
							</li>
							<li>
								<Link
									to='/craft'
									onClick={menuToggle}
									className='cursor-pointer  focus:opacity-75 text-orange-500 '
								>
									Craftsman
								</Link>
							</li>
							<li>
								<Link
									to='/talent'
									onClick={menuToggle}
									className='cursor-pointer focus:opacity-75 text-orange-500'
								>
									Talent
								</Link>
							</li>
							<li>
								<IoClose
									onClick={menuToggle}
									className='text-indigo-800 opacity-60 text-4xl'
								/>
							</li>
						</ul>
					</m.div>
				</>
			)}

			{/* Mobile Navigation */}
			<m.header
				key='mobile'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
				className='flex md:hidden z-50 top-0 left-0 w-full items-center justify-between text-lg'
			>
				<Link
					to='..'
					className='md:hidden'
				>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl focus:text-stone-500' />
				</Link>

				<div
					onClick={menuToggle}
					className='text-stone-500 font-semibold border-b-1 border-stone-500'
				>
					<h3 className='text-indigo-800 opacity-60'>Navigation</h3>
				</div>
				<a
					href='mailto:aarondorff22@gmail.com'
					className='cursor-pointer text-2xl text-stone-400'
				>
					<HiOutlineMail className='focus:text-inherit active:text-inherit' />
				</a>
			</m.header>

			{/* Desktop Navigation*/}

			<m.header
				key='desktop'
				initial={{ translateY: -100 }}
				animate={{ translateY: -20 }}
				transition={{ duration: 1, delay: 1 }}
				className='hidden md:flex z-50 px-10 py-3 top-0 w-full items-center justify-between text-base '
			>
				<Link
					to='..'
					className='hidden md:block'
				>
					<HiOutlineHome className='animate-fade-in cursor-pointer text-2xl  hover:text-indigo-700' />
				</Link>

				<ul className='p-2 px-4 rounded-full items-center gap-20 md:flex tracking-wide'>
					<li className='cursor-pointer '>
						<Link
							to='/photo'
							className='cursor-pointer focus:opacity-75 hover:text-indigo-700'
						>
							Photographer
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							to='/craft'
							className='cursor-pointer  focus:opacity-75 hover:text-indigo-700'
						>
							Craftsman
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							to='/talent'
							className='cursor-pointer focus:opacity-75 hover:text-indigo-700'
						>
							Talent
						</Link>
					</li>
				</ul>
				<a
					href='mailto:aarondorff22@gmail.com'
					className='cursor-pointer text-2xl text-stone-400 hover:text-indigo-700'
				>
					<HiOutlineMail />
				</a>
			</m.header>
		</AnimatePresence>
	)
}
