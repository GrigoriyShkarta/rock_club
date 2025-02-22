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
				{/* <p className='mb-8 text-[#ffcc03] font-bold text-2xl text-center'>
					Ваш шлях до майстерності в сучасному, рок та екстрим-вокалі!
				</p> */}
				{/* <button className='p-[1rem] rounded-lg bg-[#6e47f9] font-bolt tracking-widest'>
					Записатися
				</button> */}
				<Link
					href={'/'}
					className='text-[#ffffff] text-2xl font-bold tracking-widest [text-shadow:0_0_10px_#aa1515,0_0_20px_#ea0000,0_0_30px_#e88989]'
				>
					Записатися
				</Link>
			</div>
		</div>
	)
}
