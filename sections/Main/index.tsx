import Image from 'next/image'
import mainPhoto from '@/assets/main.jpg'

import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Main() {
	return (
		<div className='flex justify-between w-full'>
			<Image src={mainPhoto} alt='Rock Club' height={780} />
			<div className='z-10 flex flex-col gap-4 items-center w-full absolute bottom-[33%]'>
				<h1 className={`${bebasNeue.className} text-8xl font-bold`}>
					ROCK CLUB
				</h1>
				<Link
					href={'/'}
					className='text-[#ffffff] text-5xl font-bold [text-shadow:0_0_10px_#ffe500,0_0_20px_#e88989,0_0_30px_#e88989] tracking-wider'
				>
					Записатися
				</Link>
			</div>
		</div>
	)
}
