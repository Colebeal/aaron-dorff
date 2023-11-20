import { BsArrowDownCircleFill } from 'react-icons/bs'
import { motion as m } from 'framer-motion'

import Gallery from '../../components/Gallery'

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

export default function Talent() {
	return (
		<>
			<m.section
				variants={container}
				initial='hidden'
				animate='show'
				exit='exit'
				className='relative mx-auto my-5 md:mb-48 md:grid-cols-4 flex flex-col md:grid md:grid-rows-2 max-w-[1000px] md:h-[500px] gap-10'
			>
				<m.div
					variants={item}
					className="grow h-[400px] md:h-[500px] w-full rounded-lg col-span-2 row-span-2 bg-cover bg-center bg-[url('/image/IMG_4222.JPG')]"
				></m.div>
				<m.div
					variants={item}
					className='col-span-2 flex flex-col items-start gap-5 text-left text-stone-500'
				>
					<h2 className='text-3xl md:text-5xl text-indigo-700 opacity-70'>On Camera</h2>
					<p>
						Meet Aaron Dorff, a genuinely talented and easygoing individual with
						a natural knack for riding motorcycles and surfing. Whether he's
						effortlessly riding the waves or cruising down the open road,
						Aaron's simplicity and skill shine through. Comfortable in front of
						the camera, his genuine charm and laid-back demeanor make him a
						captivating presence, bringing authenticity to any project.
					</p>
					<p>
						Aaron is more than just a skilled surfer and motorcycle enthusiast;
						he's a friendly face ready to elevate your brand or project.
						Available for hire, Aaron's down-to-earth personality makes
						collaboration a breeze, and his natural talent ensures that your
						content will resonate with authenticity. If you're looking for
						someone who effortlessly combines skill with approachability, Aaron
						Dorff is your guy, ready to bring a touch of genuine charm to your
						next venture.
					</p>
					<a href="mailto:aarondorff22@gmail.com?subject=On Camera Opportunity">
						<button className='bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
							Let's work together
						</button>
					</a>
				</m.div>
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.7 }}
					transition={{
						duration: 2,
						delay: 0.5,
					}}
					className='hidden md:block absolute -bottom-6 right-0'
				>
					<BsArrowDownCircleFill className='text-3xl text-orange-500 animate-bounce' />
				</m.div>
			</m.section>
			<Gallery />
		</>
	)
}
