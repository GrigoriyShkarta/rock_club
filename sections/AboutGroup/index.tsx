import about_group from '@/assets/about_group.jpeg'

export default function AboutGroup() {
	return (
		<>
			{/* Мобильная версия */}
			<div
				className='hidden max-sm:block'
				style={{
					backgroundImage: `url(${about_group.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='p-[1rem] flex flex-col items-center text-center gap-8 bg-black/80 rounded-xl '>
					<h1 className='font-bold text-4xl'>ДЛЯ КОГО ЦЕЙ КЛУБ</h1>
					<p className='text-2xl'>
						Для вокалістів, які прагнуть підняти свої вокальні навички на новий
						рівень.
					</p>
					<p className='text-2xl'>
						Для викладачів, які хочуть поглибити свої знання і отримати нові
						інструменти для навчання своїх учнів.
					</p>
					<p className='text-2xl'>
						Для тих, хто полюбляє рок-музику та вокал і хотів би більше в цьому
						розбиратися.
					</p>
				</div>
			</div>

			{/* Десктопная версия */}
			<div className='hidden md:block relative w-full min-h-[600px] flex items-center justify-center p-12 '>
				{/* Градиентный фон с эффектом "энергетического ядра" */}
				<div
					className='absolute inset-0 
          bg-[radial-gradient(ellipse_at_center,_#0000FF_0%,_transparent_70%),_radial-gradient(ellipse_at_center,_#FF0000_0%,_transparent_70%)_100%]
          animate-[pulse_8s_infinite_alternate]'
				>
					{/* Дополнительные эффекты */}
					<div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
					<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(0,0,0,0.8)_100%)]'></div>
				</div>

				{/* Контент с эффектом неонового свечения */}
				<div
					className='mx-auto relative z-10 p-12 flex flex-col items-center text-center gap-10 bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 max-w-4xl
          [box-shadow:0_0_30px_rgba(0,0,255,0.3),0_0_60px_rgba(255,0,0,0.3)]'
				>
					<h1
						className='font-bold text-5xl mb-6 text-white
            [text-shadow:0_0_10px_#00f,0_0_20px_#f00]'
					>
						ДЛЯ КОГО ЦЕЙ КЛУБ
					</h1>

					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
						<div
							className='p-6 bg-black/40 rounded-xl border border-blue-500/30 hover:border-red-500/50 transition-all
              hover:translate-y-[-5px] hover:[box-shadow:0_5px_20px_rgba(0,0,255,0.3)]'
						>
							<p className='text-xl text-white'>
								Для <span className='text-blue-400 font-bold'>вокалістів</span>,
								які прагнуть підняти свої навички на новий рівень.
							</p>
						</div>

						<div
							className='p-6 bg-black/40 rounded-xl border border-blue-500/30 hover:border-red-500/50 transition-all
              hover:translate-y-[-5px] hover:[box-shadow:0_5px_20px_rgba(255,0,0,0.3)]'
						>
							<p className='text-xl text-white'>
								Для <span className='text-red-400 font-bold'>викладачів</span>,
								які хочуть отримати нові інструменти для навчання.
							</p>
						</div>

						<div
							className='p-6 bg-black/40 rounded-xl border border-blue-500/30 hover:border-red-500/50 transition-all
              hover:translate-y-[-5px] hover:[box-shadow:0_5px_20px_rgba(255,0,255,0.3)]'
						>
							<p className='text-xl text-white'>
								Для{' '}
								<span className='text-purple-400 font-bold'>
									любителів року
								</span>
								, які хочуть глибше розбиратися у вокалі.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
