import { motion as m, AnimatePresence } from 'framer-motion'

export default function Title({location, pathname}) {
	return (
		<m.div className='text-left flex items-baseline gap-7 text-stone-400 font-semibold text-3xl tracking-tightest'>
			<h1 className='relative'>AARON DORFF IS A</h1>
			<span className='text-orange-600 opacity-70 text-5xl'>
				<AnimatePresence mode='wait'>
					{pathname === '/' && (
						<m.h1
							className='absolute'
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
							className='absolute'
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
							className='absolute'
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
							className='absolute'
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
							className='absolute'
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
