import { Link, useLocation } from 'react-router-dom'
import { motion as m, AnimatePresence } from 'framer-motion'
export default function Profiles() {

		const container = {
			show: {
				transition: {
					staggerChildren: 0.2,
				},
			},
			exit: {
				transition: {
					staggerChildren: 0.2,
				},
			},
		}

		const item = {
			hidden: { opacity: 0, translateY: 25 },
			show: {
				opacity: 1,
				translateY: 0,
				transition: {
					duration: .5,
					ease: 'easeInOut',
				},
			},
			exit: {
				opacity: 0,
				translateY: -25,
				transition: {
					duration: 0.5,
					ease: 'easeInOut',
				},
			},
		}

	return (
		<m.section
			key='profiles'
			variants={container}
			initial='hidden'
			animate='show'
			exit='exit'
			className='my-5 grid-cols-2 xl:grid-cols-4 grid grid-rows-2 h-[400px] xl:h-[500px] gap-5 text-left'
		>
			<m.div
				key='photoProfile'
				variants={item}
				className='flex xl:row-span-2'
			>
				<Link
					to='/photo'
					className="w-full grow cursor-pointer bg-[url('/image/L1120123.jpeg')] bg-cover bg-bottom rounded-lg"
				>
					<div className='p-5 rounded-lg hidden lg:flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
						<h3 className='text-stone-50 text-3xl whitespace-nowrap'>
							Photographer
						</h3>
					</div>
				</Link>
			</m.div>
			<m.div
				key='craftProfile'
				variants={item}
				className='flex xl:row-span-2'
			>
				<Link
					to='/craft'
					className="w-full grow cursor-pointer bg-[url('/image/091A1757.JPG')] bg-cover bg-bottom rounded-lg"
				>
					<div className='p-5 rounded-lg hidden lg:flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
						<h3 className='text-stone-50 lg:text-3xl whitespace-nowrap'>
							Craftsman
						</h3>
					</div>
				</Link>
			</m.div>
			<m.div
				key='talentProfile'
				variants={item}
				className='flex row-span-2'
			>
				<Link
					to='/talent'
					className="w-full grow cursor-pointer bg-[url('/image/IMG_4222.JPG')] bg-cover bg-bottom rounded-lg"
				>
					<div className='p-5 rounded-lg hidden lg:flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
						<h3 className='text-stone-50 text-3xl whitespace-nowrap'>Model</h3>
					</div>
				</Link>
			</m.div>
			<m.div
				key='motoProfile'
				variants={item}
				className='flex row-span-2 '
			>
				<Link
					to='/moto'
					className="w-full grow cursor-pointer bg-[url('/image/IMG_4214.JPG')] bg-cover bg-bottom rounded-lg hover:bg-black"
				>
					<div className='p-5 rounded-lg hidden lg:flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
						<h3 className='text-stone-50 text-3xl whitespace-nowrap'>
							GearHead
						</h3>
					</div>
				</Link>
			</m.div>
		</m.section>
	)
}
