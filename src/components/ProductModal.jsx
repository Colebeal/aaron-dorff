import {AiOutlineClose} from 'react-icons/ai'

export default function ProductModal({ ProductType, modalStatus, modalStatusHandler }) {
	return (
		<>
			<AiOutlineClose
				className='cursor-pointer z-40 m-5 absolute top-0 left-0 text-4xl text-stone-500'
				onClick={modalStatusHandler}
			/>
			{/* <div className='m-5 hover:bg-white z-20 w-16 h-16 border-2 border-black absolute top-0 left-0'></div> */}
			<div
				id='backdrop'
				onClick={modalStatusHandler}
				className='z-20 rounded-lg w-full h-full absolute bg-stone-100 top-0 left-0 right-0'
			></div>
			{modalStatus == true && (
				<article className='z-30 absolute top-12 bg-white w-[900px] min-h-[600px] inset-x-0 left-0 right-0 m-auto rounded-lg grid grid-cols-4 gap-4 p-5 text-left'>
					<div className="rounded-lg row-span-3 col-span-2 bg-[url('/public/image/Dorff-Table-07.jpg')] bg-cover bg-no-repeat"></div>
					<div className='rounded-lg bg-white row-span-2 col-span-2 text-stone-800 text-xl p-5'>
						<h2 className='text-indigo-800 text-3xl my-5'>Product</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Cupiditate harum quisquam hic voluptatum at eius, commodi dicta.
							Eligendi rem adipisci eveniet quas ad cupiditate ea facilis quasi
							dolorum, quae accusamus.
						</p>
						<ul className='mt-5'>
							<li>Build time: 30-60 days</li>
							<li>Variety of lumber choices</li>
							<li>Design Consultation included</li>
							<li></li>
						</ul>
					</div>
					<div className='rounded-lg border-4 border-black col-span-2'></div>
				</article>
			)}
		</>
	)
}
