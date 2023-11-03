import { motion as m } from 'framer-motion'
import { BsArrowDownCircleFill } from 'react-icons/bs'

import Gallery from '../../components/Gallery'

export default function Photo() {
	return (
		<>
			<section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='relative mx-auto my-5 md:mb-48 grid-cols-4 grid grid-rows-2 max-w-[1000px] h-[500px] gap-10'
			>
				<div className="rounded-lg col-span-2 row-span-2 bg-cover bg-bottom bg-[url('/src/assets/l1120123.jpeg')]"></div>
				<div className='col-span-2 flex flex-col gap-5 text-left text-stone-500 items-start'>
					<h2 className='text-2xl font-semibold'>Action Shots</h2>
					<p>
						Meet Aaron Dorff, a photographer based in the vibrant
						coastal town of Encinitas. With a deep appreciation for the outdoors
						and a keen eye for capturing moments with intention, Aaron's lens
						tells stories of nature, adventure, and the human spirit. His
						passion for the outdoors seamlessly integrates with his work,
						creating visually compelling narratives that resonate with
						authenticity.
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
					<a href='mailto:aarondorff22@gmail.com'>
						<button className='bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
							Let's plan a shoot
						</button>
					</a>
				</div>
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.7 }}
					transition={{
						duration: 2,
						delay: 5,
					}}
					className='absolute -bottom-6 right-0'
				>
					<BsArrowDownCircleFill className='text-3xl text-orange-500 animate-bounce' />
				</m.div>
			</section>
			<Gallery />
		</>
	)
}
