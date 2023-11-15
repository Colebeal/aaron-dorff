import { useLocation } from 'react-router-dom'
import { photoCol1, photoCol2, photoCol3 } from '../assets/img-data'

export default function Gallery() {
	const location = useLocation().pathname

	return (
		<>
			{location === '/photo' && (
				<div className='grid grid-cols-3 gap-5'>
					<div className='flex flex-col gap-5'>
						{photoCol1.map((image) => (
							<img
								id={image.id}
								key={image.id}
								src={image.src}
								className={image.className}
							/>
						))}
					</div>
					<div className='flex flex-col gap-5'>
						{photoCol2.map((image) => (
							<img
								id={image.id}
								key={image.id}
								src={image.src}
								className={image.className}
							/>
						))}
					</div>
					<div className='flex flex-col gap-5'>
						{photoCol3.map((image) => (
							<img
								id={image.id}
								key={image.id}
								src={image.src}
								className={image.className}
							/>
						))}
					</div>
				</div>
			)}

			{location === '/talent' && (
				<div className='grid grid-cols-4 gap-5'>
					<img
						src='src/assets/IMG_4215.JPG'
						alt=''
					/>
					<img
						src='src/assets/IMG_4219.JPG'
						alt=''
						className='col-span-2 self-center'
					/>
					<img
						src='src/assets/IMG_4214.JPG'
						alt=''
					/>
					<img
						src='src/assets/IMG_4226.JPG'
						alt=''
						className='col-span-2'
					/>
					<img
						src='src/assets/IMG_4212.JPG'
						alt=''
						className='col-span-2'
					/>
				</div>
			)}
		</>
	)
}
