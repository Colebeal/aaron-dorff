import { BsArrowDownCircleFill } from 'react-icons/bs'
import { motion as m } from 'framer-motion'

import Gallery from "../../components/Gallery"



export default function Talent() {
	return (
		<>
			<section className='relative mx-auto my-5 md:mb-48 grid-cols-4 grid grid-rows-2 max-w-[1000px] h-[500px] gap-10'>
				<div className="rounded-lg col-span-2 row-span-2 bg-cover bg-center bg-[url('/src/assets/IMG_4222.JPG')]"></div>
				<div className='col-span-2 flex flex-col items-start gap-5 text-left text-stone-500'>
					<h2 className='text-2xl font-semibold'>On Camera</h2>
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
					<a href='mailto:aarondorff22@gmail.com'>
						<button className='bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
							Let's work together
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