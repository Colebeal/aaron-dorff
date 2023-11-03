export default function Craft() {
	return (
		<section className='mx-auto my-5 grid-cols-4 grid grid-rows-2 max-w-[1000px] h-[500px] gap-10'>
			<div className="col-span-2 rounded-lg row-span-2 bg-cover bg-bottom bg-[url('src/assets/091A1757.JPG')]"></div>
			<div className='col-span-2 flex flex-col items-start gap-5 text-left text-stone-500'>
				<h2 className='text-2xl font-semibold'>Woodworking</h2>
				<p>
					Meet Aaron Dorff, the craftsman. Based in Encinitas,
					California. Aaron has always had a passion for creativity and working
					with his hands, and he's found a perfect outlet for that passion in
					the world of woodworking. He spends most of his time in his garage,
					where he transforms raw materials into beautiful pieces of furniture
					and décor that reflect his unique style and love of the outdoors.
				</p>
				<p>
					He's constantly inspired by the awe of nature, and he
					works to bring a piece of that beauty into every piece he creates.
					Whether he's building a custom dining table for a client or creating a
					beautiful piece of wall art, Aaron's work is characterized by his
					attention to detail and his love of natural materials. He believes
					that the things we surround ourselves with should reflect our values
					and our connection to the world around us, and he strives to create
					pieces that will last a lifetime and bring joy and comfort to those
					who use them.
				</p>
				<a href='mailto:aarondorff22@gmail.com?subject=Custom order request'>
					<button className='bg-indigo-800 text-stone-50 hover:text-indigo-800 hover:bg-stone-50 transition duration-300'>
						Custom orders
					</button>
				</a>
			</div>
		</section>
	)
}
