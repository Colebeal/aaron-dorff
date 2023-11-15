export default function Moto() {
	return (
		<section className='mx-auto my-5 grid-cols-4 grid grid-rows-2 max-w-[1000px] h-[500px] gap-10'>
			<div className="rounded-lg col-span-2 row-span-2 bg-cover bg-center bg-[url('/src/assets/IMG_4214.JPG')] text-2xl"></div>
			<div className='col-span-2 flex flex-col items-start gap-5 text-left text-stone-500'>
				<h2 className='text-2xl font-semibold'>Moto - UTV - OffRoad</h2>
				<p>
					Meet Aaron Dorff, the ultimate gearhead with a passion for all things
					that run on gasoline. Whether he's knee-deep in engine grease or
					sharing a cold one with some buds, Aaron's genuine enthusiasm for
					things that go vroom is contagious. No pretense here; he's the guy you
					want in your crew when you're talking torque and testing limits. 
				</p>
				<a href='mailto:aarondorff22@gmail.com'>
					<button className='bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
						Let's work together
					</button>
				</a>
			</div>
		</section>
	)
}
