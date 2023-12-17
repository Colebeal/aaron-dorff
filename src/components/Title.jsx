import { motion as m, AnimatePresence } from 'framer-motion'

export default function Title({location, pathname}) {
	return (
		<m.div className='mb-20 2xl:mb-24 lg:mb-0 text-left flex flex-col lg:flex-row xl:items-baseline xl:gap-7 text-stone-400 lg:text-3xl tracking-tightest'>
			<h1 className='relative 2xl:translate-y-6'>AARON DORFF IS A</h1>
			<span className='relative text-orange-600 opacity-70 text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl'>
				<AnimatePresence mode='wait'>
					{pathname === '/' && (
						<m.h1
							className='absolute top-20 lg:top-auto whitespace-nowrap '
							key='base'
							initial={{ opacity: 0, translateY: -65 }}
							animate={{ opacity: 1, translateY: -85 }}
							transition={{ duration: 0.5 }}
							exit={{ opacity: 0, translateY: -115 }}
						>
							lot of things
						</m.h1>
					)}

					{pathname === '/moto' && (
						<m.h1
							key='moto'
							className='absolute top-20 lg:top-auto whitespace-nowrap'
							initial={{ opacity: 0, translateY: -65 }}
							animate={{ opacity: 1, translateY: -85 }}
							transition={{ duration: 0.5 }}
							exit={{ opacity: 0, translateY: -115 }}
						>
							Gear Head
						</m.h1>
					)}

					{pathname === '/photo' && (
						<m.h1
							key='photo'
							className='absolute top-20 lg:top-auto'
							initial={{ opacity: 0, translateY: -65 }}
							animate={{ opacity: 1, translateY: -85 }}
							transition={{ duration: 0.5 }}
							exit={{ opacity: 0, translateY: -115 }}
						>
							Photographer
						</m.h1>
					)}

					{pathname === '/craft' && (
						<m.h1
							key='craft'
							className='absolute top-20 lg:top-auto'
							initial={{ opacity: 0, translateY: -65 }}
							animate={{ opacity: 1, translateY: -85 }}
							transition={{ duration: 0.5 }}
							exit={{ opacity: 0, translateY: -115 }}
						>
							CRAFTSMAN
						</m.h1>
					)}

					{pathname === '/talent' && (
						<m.h1
							key='talent'
							className='absolute top-20 lg:top-auto'
							initial={{ opacity: 0, translateY: -65 }}
							animate={{ opacity: 1, translateY: -85 }}
							transition={{ duration: 0.5 }}
							exit={{ opacity: 0, translateY: -115 }}
						>
							Model
						</m.h1>
					)}
				</AnimatePresence>
			</span>
		</m.div>
	)
}
