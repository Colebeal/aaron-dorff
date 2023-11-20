import { motion as m } from 'framer-motion'

export default function Moto() {
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
			variants={container}
			initial='hidden'
			animate='show'
			exit='exit'
			className='md:mx-auto my-5 pb-5 flex flex-col md:grid-cols-4 md:grid md:grid-rows-2 max-w-[1000px] md:h-[500px] gap-10'
		>
			<m.div
				variants={item}
				className="grow h-[500px] w-full rounded-lg md:col-span-2 md:row-span-2 bg-cover bg-center bg-[url('/image/IMG_4214.JPG')] text-2xl"
			></m.div>
			<m.div
				variants={item}
				className='col-span-2 flex flex-col items-start gap-5 text-left text-stone-500'
			>
				<h2 className='text-2xl md:text-5xl text-indigo-700 opacity-70 whitespace-nowrap'>
					Moto - UTV - Off Road
				</h2>
				<p>
					Meet Aaron Dorff, the ultimate gearhead with a passion for all things
					that run on gasoline. Whether he's knee-deep in engine grease or
					sharing a cold one with some buds, Aaron's genuine enthusiasm for
					things that go vroom is contagious. No pretense here; he's the guy you
					want in your crew when you're talking torque and testing limits.
				</p>
				<a href="mailto:aarondorff22@gmail.com?subject=Moto Inquiry">
					<button className='bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
						Let's Ride
					</button>
				</a>
			</m.div>
		</m.section>
	)
}
