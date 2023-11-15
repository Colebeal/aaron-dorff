import { motion as m } from 'framer-motion'

export default function Greet() {
	return (
		<m.div
			initial={{ translateX: -25, opacity: 0 }}
			animate={{ translateX: 0, opacity: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
			exit={{ opacity: 0 }}
			className='bg-stone-900 text-left text-stone-400'
		>
			<h1 className='-translate-x-10 my-5'>Meet</h1>
			<h1 className='z-10 text-[#82b2aa] translate-x-10 -translate-y-3'>
				Aaron Dorff
			</h1>
		</m.div>
	)
}
