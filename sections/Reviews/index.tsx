'use client'

import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import one from '@/assets/reviews/1.jpg'
import two from '@/assets/reviews/2.jpg'
import three from '@/assets/reviews/3.jpg'
import four from '@/assets/reviews/4.jpg'
import five from '@/assets/reviews/5.jpg'
import six from '@/assets/reviews/6.jpg'
import seven from '@/assets/reviews/7.jpg'
import ten from '@/assets/reviews/10.jpg'
import od from '@/assets/reviews/11.jpg'
import dw from '@/assets/reviews/12.jpg'

const images = [one, two, three, four, five, six, seven, ten, od, dw]

export default function Reviews() {
	return (
		<div className='flex flex-col gap-8 px-4 py-12 max-w-7xl mx-auto'>
			<h1 className='text-3xl md:text-5xl font-bold text-center text-white mb-6'>
				ВІДГУКИ
			</h1>

			<div className='relative'>
				<Carousel
					autoPlay
					infiniteLoop
					showThumbs={false}
					showStatus={false}
					interval={5000}
					stopOnHover
					emulateTouch
					swipeable
					dynamicHeight={false}
					className='rounded-xl overflow-hidden shadow-xl'
					renderArrowPrev={(onClickHandler, hasPrev, label) =>
						hasPrev && (
							<button
								type='button'
								onClick={onClickHandler}
								title={label}
								className='absolute left-4 z-10 h-16 w-16 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/80 transition-all max-sm:hidden'
								style={{ top: '50%', transform: 'translateY(-50%)' }}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='white'
									className='w-10 h-10'
								>
									<path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z' />
								</svg>
							</button>
						)
					}
					renderArrowNext={(onClickHandler, hasNext, label) =>
						hasNext && (
							<button
								type='button'
								onClick={onClickHandler}
								title={label}
								className='absolute right-4 z-10 h-16 w-16 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/80 transition-all max-sm:hidden'
								style={{ top: '50%', transform: 'translateY(-50%)' }}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='white'
									className='w-10 h-10'
								>
									<path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
								</svg>
							</button>
						)
					}
				>
					{images.map((img, index) => (
						<div
							key={index}
							className='relative h-[500px] md:h-[500px] lg:h-[600px]'
						>
							<Image
								src={img}
								alt={`Review ${index + 1}`}
								fill
								className='object-contain bg-black'
								quality={100}
								priority={index < 3}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}
