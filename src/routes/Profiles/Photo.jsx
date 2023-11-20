import { motion as m } from 'framer-motion'
import { BsArrowDownCircleFill } from 'react-icons/bs'

import Gallery from '../../components/Gallery'

export default function Photo() {
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
		<>
			<m.section
				variants={container}
				initial='hidden'
				animate='show'
				exit='exit'
				className='relative mx-auto my-5 lg:mb-48 flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 xl:max-w-[1000px] xl:h-[500px] gap-10'
			>
				<m.div
					variants={item}
					className="grow h-[400px] w-full rounded-lg col-span-4 xl:col-span-2 xl:row-span-2 bg-cover bg-bottom bg-[url('/image/L1120123.jpeg')]"
				></m.div>
				<m.div
					variants={item}
					className='col-span-4 xl:col-span-2 flex flex-col gap-5 text-left text-stone-500 items-start'
				>
					<h2 className='text-3xl xl:text-5xl text-indigo-700 opacity-70 whitespace-nowrap'>
						Action Shots
					</h2>
					<p>
						Meet Aaron Dorff, a photographer based in the vibrant coastal town
						of Encinitas. With a deep appreciation for the outdoors and a keen
						eye for capturing moments with intention, Aaron's lens tells stories
						of nature, adventure, and the human spirit. His passion for the
						outdoors seamlessly integrates with his work, creating visually
						compelling narratives that resonate with authenticity.
					</p>
					<p>
						Aaron's portfolio is as diverse as the landscapes he explores. From
						collaborating with outdoor brands to freeze-framing action sports
						and creating captivating portraits, he thrives on the variety this
						craft offers. Each photograph reflects his commitment to capturing
						not just images, but the essence of the moment. Aaron believes in
						the power of intentional design, both in the natural world and in
						the crafted visuals he produces.
					</p>
					<a href="mailto:aarondorff22@gmail.com?subject=Let's plan a shoot!">
						<button className='bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
							Let's plan a shoot
						</button>
					</a>
				</m.div>
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 2 } }}
					exit={{ opacity: 0 }}
					className='hidden md:block absolute -bottom-6 right-0'
				>
					<BsArrowDownCircleFill className='text-3xl text-orange-500 animate-bounce' />
				</m.div>
			</m.section>
			<Gallery />
		</>
	)
}
