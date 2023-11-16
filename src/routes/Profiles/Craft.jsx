import { BsArrowDownCircleFill } from 'react-icons/bs'
import { delay, motion as m } from 'framer-motion'
import { useState } from 'react'

import ProductModal from '../../components/ProductModal'

export default function Craft() {
	const [modalStatus, setModalStatus] = useState(false)
	const [productType, setProductType] = useState('')
	
	const modalStatusHandler = (product) => {
		modalStatus ? setModalStatus(false) : setModalStatus(true)
		if (product !== productType) {
			setProductType(product)
		}
	}

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
				className='relative mx-auto my-5 grid-cols-4 grid grid-rows-2 max-w-[1000px] h-[500px] gap-10'
			>
				<m.div
					variants={item}
					className="col-span-2 rounded-lg row-span-2 bg-cover bg-bottom bg-[url('/image/091A1757.JPG')]"
				></m.div>
				<m.div
					variants={item}
					className='col-span-2 flex flex-col items-start gap-5 text-left text-stone-500'
				>
					<h2 className='text-5xl text-indigo-700 opacity-70'>Woodworking</h2>
					<p>
						Meet Aaron Dorff, the craftsman. Based in Encinitas, California.
						Aaron has always had a passion for creativity and working with his
						hands, and he's found a perfect outlet for that passion in the world
						of woodworking. He spends most of his time in his garage, where he
						transforms raw materials into beautiful pieces of furniture and
						décor that reflect his unique style and love of the outdoors.
					</p>
					<p>
						He's constantly inspired by the awe of nature, and he works to bring
						a piece of that beauty into every piece he creates. Whether he's
						building a custom dining table for a client or creating a beautiful
						piece of wall art, Aaron's work is characterized by his attention to
						detail and his love of natural materials. He believes that the
						things we surround ourselves with should reflect our values and our
						connection to the world around us, and he strives to create pieces
						that will last a lifetime and bring joy and comfort to those who use
						them.
					</p>
					<a href='mailto:aarondorff22@gmail.com?subject=Custom order request'>
						<button className='bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
							Custom orders
						</button>
					</a>
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition:{delay: 2} }}
						exit={{ opacity: 0 }}
						className='absolute -bottom-6 right-0'
					>
						<BsArrowDownCircleFill className='text-3xl text-orange-500 animate-bounce' />
					</m.div>
				</m.div>
			</m.section>
			<section className='m-10 mt-48'>
				<h2 className='text-5xl text-indigo-700 opacity-70'>Past Projects</h2>
				<div className='relative p-10 grid gap-4 grid-cols-5 grid-rows-4 min-h-[700px]'>
					<ProductModal
						modalStatus={modalStatus}
						modalStatusHandler={modalStatusHandler}
						productType={productType}
						setProductType={setProductType}
					/>
					<div
						className="cursor-pointer rounded-lg bg-cover bg-[url('/image/Dorff-Table-07.jpg')] col-span-2 row-span-2"
						onClick={() => modalStatusHandler('table')}
					>
						<div className='p-5 rounded-lg flex justify-center items-center w-full h-full opacity-0 hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-4xl'>Tables</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('cut')}
						className="cursor-pointer rounded-lg bg-cover bg-[url('/image/Dorff-Board.jpg')] row-span-2"
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-2xl p-3'>Cutting Boards</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('bed')}
						className="cursor-pointer rounded-lg bg-cover bg-bottom bg-[url('/image/Dorff-Craft-14.jpg')] col-span-2 row-span-2 col-start-4 row-start-3 "
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-4xl'>Bed Frames</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('cut')}
						className="cursor-pointer rounded-lg bg-cover bg-[url('/image/Dorff-Craft-03.jpg')]"
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className=' text-stone-50 text-2xl p-3'>Cutting Boards</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('shelf')}
						className="cursor-pointer rounded-lg bg-cover bg-bottom bg-[url('/image/Dorff-Craft-04.jpg')] row-span-2"
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-2xl'>Shelves</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('shelf')}
						className="cursor-pointer rounded-lg bg-cover bg-[url('/image/Dorff-Craft-05.jpg')]"
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-2xl'>Shelves</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('record')}
						className="cursor-pointer rounded-lg bg-cover bg-bottom bg-[url('/image/Dorff-Craft-06.jpg')] row-span-2"
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-2xl'>Record Holders</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('shelf')}
						className="cursor-pointer rounded-lg bg-cover bg-center bg-[url('/image/Dorff-Craft-08.jpg')] row-span-2"
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-2xl'>Shelves</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('build')}
						className="cursor-pointer rounded-lg bg-cover bg-center bg-[url('/image/Dorff-Craft-09.jpg')]"
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-2xl whitespace-nowrap'>
								Build-outs
							</h3>
						</div>
					</div>
					<div
						onClick={() => modalStatusHandler('build')}
						className="cursor-pointer rounded-lg bg-cover bg-[url('/image/Dorff-Craft-12.jpg')]"
					>
						<div className='p-5 rounded-lg flex justify-center items-center opacity-0 w-full h-full hover:opacity-100 hover:bg-slate-800 hover:bg-opacity-90 transition duration-200'>
							<h3 className='text-stone-50 text-2xl whitespace-nowrap'>
								Build-outs
							</h3>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
