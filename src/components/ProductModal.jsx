import { AiOutlineClose } from 'react-icons/ai'
import { motion as m, AnimatePresence } from 'framer-motion'

export default function ProductModal({
	productType,
	modalStatus,
	modalStatusHandler,
}) {
	return (
		<AnimatePresence mode='wait'>
			{modalStatus == true && (
				<>
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						id='backdrop'
						onClick={modalStatusHandler}
						className='z-20 rounded-lg w-full h-full absolute bg-[#ece3d4] top-0 left-0 right-0'
					>
					</m.div>
					<m.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className='z-30 absolute xl:top-24 bg-white xl:w-[900px] xl:min-h-[70svh] inset-x-0 left-0 right-0 m-auto rounded-lg xl:grid grid-cols-4 gap-4 p-10 lg:py-16 lg:px-20 text-left'
					>
						{productType == 'table' && (
							<>
								<AiOutlineClose
									className='absolute top-0 right-0 cursor-pointer z-40 m-12 text-4xl text-white lg:left-0 lg:m-5 lg:text-orange-300 '
									onClick={modalStatusHandler}
								/>
								<div className="rounded-lg row-span-3 col-span-2 bg-[url('/image/Dorff-Table-07.jpg')] bg-cover bg-no-repeat min-h-[40svh]"></div>
								<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
									<h2 className='text-stone-700 text-3xl my-5'>Tables</h2>
									<p>
										Handcrafted and made to order; let's make your dream table
										come to life.
									</p>
									<ul className='text-base mt-5 italic'>
										<li>Build time: 4-6 weeks depending on complexity</li>
										<li>Lumber of your choice</li>
										<li>Weekly Progress updates</li>
										<li>Price on request</li>
									</ul>
								</div>
								<div className='col-span-2 p-5'>
									<a href='mailto:aarondorff22@gmail.com?subject=Custom order request'>
										<button className='p-5 bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
											Request a quote
										</button>
									</a>
								</div>
							</>
						)}
						{productType == 'cut' && (
							<>
								<AiOutlineClose
									className='absolute top-0 right-0 cursor-pointer z-40 m-12 text-4xl text-white lg:left-0 lg:m-5 lg:text-orange-300 '
									onClick={modalStatusHandler}
								/>
								<div className="rounded-lg row-span-3 col-span-2 bg-[url('/image/Dorff-Board.jpg')] bg-cover bg-center min-h-[40svh]"></div>
								<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
									<h2 className='text-stone-700 text-2xl my-5 whitespace-nowrap'>
										Cutting Boards
									</h2>
									<p>
										One of my favorite things to make, cutting boards are an
										easy way to add a personal touch to your kitchen. Whether
										for preparing a meal, or displaying one lets work together
										to make something special.
									</p>
									<ul className='text-base mt-5 italic'>
										<li>Build time: 2-3 days </li>
										<li>Lumber of your choice</li>
										<li>Design Consultation included</li>
										<li>Price on request</li>
									</ul>
								</div>
								<div className='col-span-2 p-5'>
									<a href='mailto:aarondorff22@gmail.com?subject=Custom order request'>
										<button className='p-5 bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
											Request a quote
										</button>
									</a>
								</div>
							</>
						)}
						{productType == 'bed' && (
							<>
								<AiOutlineClose
									className='absolute top-0 right-0 cursor-pointer z-40 m-12 text-4xl text-white lg:left-0 lg:m-5 lg:text-orange-300 '
									onClick={modalStatusHandler}
								/>
								<div className='flex flex-col row-span-3 col-span-2 gap-5'>
									<div className="rounded-lg grow  bg-[url('/image/Dorff-Craft-14.jpg')] bg-cover bg-bottom min-h-[40svh]"></div>
									<div className="rounded-lg grow bg-[url('/image/Dorff-Craft-13.jpg')] bg-cover bg-center"></div>
								</div>
								<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
									<h2 className='text-stone-700 text-2xl my-5 whitespace-nowrap'>
										Bed Frames
									</h2>
									<p>
										Available in a variety of styles and sizes, let's work on a
										perfect centerpiece for your bedroom. I have worked to
										develop a CNC pattern for a sturdy, stylish, and simple
										bedframe. Perfect for easy set up, unobtusive presence in
										your space, and easy to take apart for a move.
									</p>
									<p className='my-5'>
										If looking for something more personalized, a custom
										bedframe solutions will be perfect for you. With a variety
										of lumber choices and infinite design options, this is the
										perfect way to make your bedroom your own.
									</p>
									<ul className='text-base  italic'>
										<li>CNC Build time: 1-2 weeks</li>
										<li>Custom Build time: 30-60 days</li>
										<li>Variety of lumber choices</li>
										<li>Design Consultation included</li>
										<li>Price on request</li>
									</ul>
								</div>
								<div className='col-span-2 p-5'>
									<a href='mailto:aarondorff22@gmail.com?subject=Custom order request'>
										<button className='p-5 bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
											Request a quote
										</button>
									</a>
								</div>
							</>
						)}
						{productType == 'shelf' && (
							<>
								<AiOutlineClose
									className='absolute top-0 right-0 cursor-pointer z-40 m-12 text-4xl text-white lg:left-0 lg:m-5 lg:text-orange-300 '
									onClick={modalStatusHandler}
								/>
								<div className="rounded-lg row-span-3 col-span-2 bg-[url('/image/Dorff-Craft-04.jpg')] bg-cover bg-center min-h-[40svh]"></div>
								<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
									<h2 className='text-stone-700 text-2xl my-5 whitespace-nowrap'>
										Shelves
									</h2>
									<p>
										Handcrafted and made to order, available in everything from
										stand alone floating shelves to full shelving units.
									</p>
									<ul className='text-base mt-5 italic'>
										<li>Build time: 1-2 days</li>
										<li>Variety of lumber choices</li>
										<li>Installation available at a cost for local clients</li>
										<li>Price on request</li>
									</ul>
								</div>
								<div className='col-span-2 p-5'>
									<a href='mailto:aarondorff22@gmail.com?subject=Custom order request'>
										<button className='p-5 bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
											Request a quote
										</button>
									</a>
								</div>
							</>
						)}
						{productType == 'record' && (
							<>
								<AiOutlineClose
									className='absolute top-0 right-0 cursor-pointer z-40 m-12 text-4xl text-white lg:left-0 lg:m-5 lg:text-orange-300 '
									onClick={modalStatusHandler}
								/>
								<div className="rounded-lg row-span-3 col-span-2 bg-[url('/image/Dorff-Craft-06.jpg')] min-h-[40svh] bg-cover bg-center"></div>
								<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
									<h2 className='text-stone-700 text-2xl my-5 whitespace-nowrap'>
										Record Holders
									</h2>
									<p>
										Why leave all your vintage vinyl in a box in the attic? With
										these custom record holders you can display your collection
										in style. Available in a variety of sizes and styles,
										integrate your music taste into the design of your home.
									</p>
									<ul className='text-base mt-5 italic'>
										<li>Build time: 1-2 days</li>
										<li>Variety of lumber choices</li>
										<li>Installation available at a cost for local clients</li>
										<li>Price on request</li>
									</ul>
								</div>
								<div className='col-span-2 p-5'>
									<a href='mailto:aarondorff22@gmail.com?subject=Custom order request'>
										<button className='p-5 bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
											Request a quote
										</button>
									</a>
								</div>
							</>
						)}
						{productType == 'build' && (
							<>
								<AiOutlineClose
									className='absolute top-0 right-0 cursor-pointer z-40 m-12 text-4xl text-white lg:left-0 lg:m-5 lg:text-orange-300 '
									onClick={modalStatusHandler}
								/>
								<div className='grid grid-cols-2 row-span-3 col-span-2 gap-5'>
									<div className="rounded-lg bg-[url('/image/Dorff-Craft-09.jpg')] bg-cover min-h-[20svh]"></div>
									<div className="rounded-lg bg-[url('/image/Dorff-Craft-10.jpg')] bg-cover bg-center"></div>
									<div className="rounded-lg bg-[url('/image/Dorff-Craft-11.jpg')] bg-cover bg-left min-h-[20svh]"></div>
									<div className="rounded-lg bg-[url('/image/Dorff-Craft-12.jpg')] bg-cover bg-left"></div>
								</div>
								<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
									<h2 className='text-stone-700 text-2xl my-5 whitespace-nowrap'>
										Build Outs
									</h2>
									<p>
										Looking to make your sprinter van or truck bed a home or the
										ultimate weekender? Together we can architect a custom build
										out to fit your needs. From custom cabinetry to functional
										storage and stow away beds, if you dream it I can build it.
									</p>
									<ul className='text-base mt-5 italic'>
										<li>Build time: Heavily dependent on complexity</li>
										<li>Variety of lumber choices</li>
										<li>Design Consultation included</li>
										<li>Price on request</li>
									</ul>
								</div>
								<div className='col-span-2 p-5'>
									<a href='mailto:aarondorff22@gmail.com?subject=Custom order request'>
										<button className='p-5 bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
											Request a quote
										</button>
									</a>
								</div>
							</>
						)}
					</m.section>
				</>
			)}
		</AnimatePresence>
	)
}
