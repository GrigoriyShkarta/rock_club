import Image from 'next/image'
import mainPhoto from '@/assets/main.jpg'
import Link from 'next/link'

export default function Main() {
	return (
		<div className=''>
			{/* Мобильная версия (до md breakpoint) */}
			<div className='md:hidden flex justify-between w-full relative'>
				<Image src={mainPhoto} alt='Rock Club' height={780} />
				<div className='z-10 flex flex-col gap-4 items-center w-full absolute bottom-[18%]'>
					<h1 className='text-8xl font-bold text-center'>ROCK CLUB</h1>
					<Link
						href={'https://secure.wayforpay.com/sub/rock_club'}
						className='text-[#ffffff] text-5xl font-bold [text-shadow:0_0_10px_#ffe500,0_0_20px_#e88989,0_0_30px_#e88989] tracking-wider'
					>
						Записатися
					</Link>
				</div>
			</div>

			{/* Десктоп версия (md и выше) */}
			<div className='hidden md:flex h-screen'>
				{/* Левая часть - изображение */}
				<div className='relative'>
					<Image
						src={mainPhoto}
						alt='Rock Club'
						fill
						className='hidden max-sm:block'
						priority
					/>
				</div>

				{/* Правая часть - контент с неоновым фоном */}
				<div className='w-full relative flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_#0000FF_0%,_transparent_70%),_radial-gradient(ellipse_at_center,_#FF0000_0%,_transparent_70%)_100%]'>
					{/* Эффект неонового свечения */}
					<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-70'></div>
					<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-70 mix-blend-screen'></div>

					<div className='relative z-10 p-8 text-center max-w-lg'>
						<h1 className='text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8'>
							ROCK CLUB
						</h1>

						<Link
							href={'https://secure.wayforpay.com/sub/rock_club'}
							className='inline-block px-12 py-4 text-2xl font-bold text-white bg-transparent border-2 border-yellow-400 rounded-full hover:bg-yellow-400/20 transition-all duration-300 relative overflow-hidden mb-8'
						>
							<span className='relative z-10'>Записатися</span>
							<span className='absolute inset-0 bg-yellow-400/10 rounded-full blur-md -z-0'></span>
							<span className='absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffe500_0%,_transparent_70%)] opacity-30 hover:opacity-50 -z-0 transition-opacity duration-300'></span>
						</Link>

						<p className='text-2xl mb-12'>
							Це ексклюзивний закритий клуб для вокалістів та викладачів,
							присвячений розвитку та вдосконаленню сучасного, рок та
							екстрим-вокалу. Якщо ви хочете отримати доступ до професійного
							навчання, поглибленого розбору технік, практичних вправ та
							відповідей на свої питання, цей клуб — це саме те, що вам
							потрібно!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
