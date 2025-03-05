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
import nine from '@/assets/reviews/9.jpg'

import s from './style.module.css'

const images = [one, two, three, four, five, six, seven, nine]

export default function Reviews() {
	return (
		<div className='flex flex-col gap-6'>
			<h1 className='text-5xl font-bold text-center'>ВІДГУКИ</h1>
			<Carousel autoPlay infiniteLoop>
				{images.map((img, index) => (
					<div key={index} className={s.imageWrapper}>
						<Image src={img} alt={`Review ${index + 1}`} fill />
					</div>
				))}
			</Carousel>
		</div>
	)
}
