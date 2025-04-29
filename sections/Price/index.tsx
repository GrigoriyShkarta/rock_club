import Link from 'next/link'

export default function Price() {
	return (
		<div className='w-full'>
			{/* Мобильная версия (без изменений) */}
			<div className='md:hidden p-[1rem] flex flex-col items-center text-center gap-8 bg-[#010305]'>
				<h1 className='font-bold text-4xl'>ЦІНА</h1>
				<div
					className='p-6 rounded-lg'
					style={{
						border: '2px solid transparent',
						boxShadow:
							'0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 10px #0000ff, 0 0 20px #0000ff, 0 0 30px #0000ff',
					}}
				>
					<h1 className='font-bold text-4xl'>650 грн на місяць</h1>
				</div>
				<Link
					href={'https://secure.wayforpay.com/sub/rock_club'}
					className='text-[#ffffff] text-5xl font-bold [text-shadow:0_0_10px_#ffe500,0_0_20px_#e88989,0_0_30px_#e88989] tracking-wider'
				>
					Записатися
				</Link>
			</div>

			{/* Веб-версия */}
			<div className='hidden md:flex flex-col items-center justify-center py-20 px-4 min-h-[60vh] bg-[#010305]'>
				<div className='flex flex-col items-center gap-12 max-w-4xl w-full'>
					<h1 className='text-6xl font-bold text-white'>
						Ц<span className='text-red-500'>І</span>НА
					</h1>

					{/* Карточка цены */}
					<div className='relative p-1 rounded-xl bg-gradient-to-r from-blue-500 to-red-500'>
						<div className='bg-[#010305] rounded-lg py-10 px-20 text-center'>
							<span className='text-6xl font-bold text-white'>650 грн</span>
							<p className='text-2xl mt-4 text-white/80'>на місяць</p>
						</div>
					</div>

					{/* Кнопка */}
					<Link
						href={'https://secure.wayforpay.com/sub/rock_club'}
						className='px-16 py-5 text-4xl font-bold text-white bg-black
              border-2 border-yellow-400 rounded-full
              hover:bg-yellow-400/10 transition-all duration-300
              [box-shadow:0_0_20px_#ffe500] hover:[box-shadow:0_0_30px_#ffe500]'
					>
						Записатися
					</Link>
				</div>
			</div>
		</div>
	)
}
