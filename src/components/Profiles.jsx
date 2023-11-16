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
					duration: 1,
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
			className='my-5 grid-cols-4 grid grid-rows-2 h-[500px] gap-5 text-left'
		>
			<m.div
				key='photoProfile'
				variants={item}
				className='flex row-span-2 bg-cover bg-bottom hover:backdrop-brightness-50 '
			>
				<Link
					to='/photo'
					className="w-full grow cursor-pointer bg-[url('/image/L1120123.jpeg')] bg-cover bg-bottom rounded-lg"
				></Link>
			</m.div>
			<m.div
				key='craftProfile'
				variants={item}
				className='flex row-span-2 bg-cover bg-bottom hover:backdrop-brightness-50 '
			>
				<Link
					to='/craft'
					className="w-full grow cursor-pointer bg-[url('/image/091A1757.JPG')] bg-cover bg-bottom rounded-lg"
				></Link>
			</m.div>
			<m.div
				key='talentProfile'
				variants={item}
				className='flex row-span-2 bg-cover bg-bottom hover:backdrop-brightness-50 '
			>
				<Link
					to='/talent'
					className="w-full grow cursor-pointer bg-[url('/image/IMG_4222.JPG')] bg-cover bg-bottom rounded-lg"
				></Link>
			</m.div>
			<m.div
				key='motoProfile'
				variants={item}
				className='flex row-span-2 bg-cover bg-bottom hover:bg-black '
			>
				<Link
					to='/moto'
					className="w-full grow cursor-pointer bg-[url('/image/IMG_4214.JPG')] bg-cover bg-bottom rounded-lg hover:bg-black"
				></Link>
			</m.div>
		</m.section>
	)
}
