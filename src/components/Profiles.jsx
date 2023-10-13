import { Link, useLocation } from 'react-router-dom'
import { motion as m, AnimatePresence } from 'framer-motion'
export default function Profiles() {
	const location = useLocation().pathname

	return (
		<section className='my-5 grid-cols-4 grid grid-rows-2 h-[500px] gap-5 text-left'>
			<Link
				to='/moto'
				className="cursor-pointer rounded-lg row-span-2 bg-cover bg-bottom bg-[url('/src/assets/IMG_4214.JPG')]"
			></Link>
			<Link
				to='/photo'
				className="cursor-pointer rounded-lg row-span-2 bg-cover bg-bottom bg-[url('/src/assets/l1120123.jpeg')]"
			></Link>
			<Link
				to='/talent'
				className="cursor-pointer rounded-lg row-span-2 bg-cover bg-bottom bg-[url('/src/assets/IMG_4222.JPG')]"
			></Link>
			<Link
				to='/craft'
				className="cursor-pointer rounded-lg row-span-2 bg-cover bg-bottom bg-[url('src/assets/091A1757.JPG')]"
			></Link>
		</section>
	)
}
