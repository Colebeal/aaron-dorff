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
						className='z-20 rounded-lg w-full h-full absolute bg-[#ece3d4] xl:bg-stone-100 top-0 left-0 right-0'
					>
						<AiOutlineClose
							className='hidden xl:block cursor-pointer z-40 xl:m-5 absolute top-0 left-0 text-4xl text-stone-500'
							onClick={modalStatusHandler}
						/>
					</m.div>
					<m.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className='z-30 absolute xl:top-24 bg-white xl:w-[900px] xl:min-h-[70svh] inset-x-0 left-0 right-0 m-auto rounded-lg xl:grid grid-cols-4 gap-4 p-5 text-left'
					>
						{productType == 'table' && (
							<>
								<AiOutlineClose
									className='xl:hidden absolute cursor-pointer z-40 m-7 top-0 right-0 text-5xl text-white'
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
										<li>Build time: 60-90 days</li>
										<li>Lumber of your choice</li>
										<li>Weekly Progress updates</li>
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
									className='xl:hidden absolute cursor-pointer z-40 m-7 top-0 right-0 text-5xl text-white'
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
										<li>Build time: 1-3 weeks</li>
										<li>Lumber of your choice</li>
										<li>Design Consultation included</li>
										<li></li>
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
									className='xl:hidden absolute cursor-pointer z-40 m-7 top-0 right-0 text-5xl text-white'
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
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Cupiditate harum quisquam hic voluptatum at eius, commodi
										dicta. Eligendi rem adipisci eveniet quas ad cupiditate ea
										facilis quasi dolorum, quae accusamus.
									</p>
									<ul className='text-base mt-5 italic'>
										<li>Build time: 30-60 days</li>
										<li>Variety of lumber choices</li>
										<li>Design Consultation included</li>
										<li></li>
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
									className='xl:hidden absolute cursor-pointer z-40 m-7 top-0 right-0 text-5xl text-white'
									onClick={modalStatusHandler}
								/>
								<div className="rounded-lg row-span-3 col-span-2 bg-[url('/image/Dorff-Craft-04.jpg')] bg-cover bg-center min-h-[40svh]"></div>
								<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
									<h2 className='text-stone-700 text-2xl my-5 whitespace-nowrap'>
										Shelves
									</h2>
									<p>Handcrafted and made to order,</p>
									<ul className='text-base mt-5 italic'>
										<li>Build time: 30 days</li>
										<li>Variety of lumber choices</li>
										<li>Design Consultation included</li>
										<li></li>
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
									className='xl:hidden absolute cursor-pointer z-40 m-7 top-0 right-0 text-5xl text-white'
									onClick={modalStatusHandler}
								/>
								<div className="rounded-lg row-span-3 col-span-2 bg-[url('/image/Dorff-Craft-06.jpg')] min-h-[40svh] bg-cover bg-center"></div>
								<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
									<h2 className='text-stone-700 text-2xl my-5 whitespace-nowrap'>
										Record Holders
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Cupiditate harum quisquam hic voluptatum at eius, commodi
										dicta. Eligendi rem adipisci eveniet quas ad cupiditate ea
										facilis quasi dolorum, quae accusamus.
									</p>
									<ul cclassName='text-base mt-5 italic'>
										<li>Build time: 30-60 days</li>
										<li>Variety of lumber choices</li>
										<li>Design Consultation included</li>
										<li></li>
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
									className='xl:hidden absolute cursor-pointer z-40 m-7 top-0 right-0 text-5xl text-white'
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
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Cupiditate harum quisquam hic voluptatum at eius, commodi
										dicta. Eligendi rem adipisci eveniet quas ad cupiditate ea
										facilis quasi dolorum, quae accusamus.
									</p>
									<ul className='text-base mt-5 italic'>
										<li>Build time: 30-60 days</li>
										<li>Variety of lumber choices</li>
										<li>Design Consultation included</li>
										<li></li>
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
