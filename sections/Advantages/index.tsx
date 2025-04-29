import { IoStarHalfSharp } from 'react-icons/io5'
import advantages from '@/assets/advantages.jpeg'

export default function Advantages() {
	return (
		<>
			{/* Мобильная версия */}
			<div className='md:hidden relative w-full flex items-center justify-center p-4'>
				<div
					style={{
						backgroundImage: `url(${advantages.src})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className='p-[1rem] flex flex-col items-center gap-6 bg-black/80 rounded-xl'>
						<div className='flex flex-col'>
							<h1 className='font-bold text-4xl text-center'>
								ЩО ВИ ОТРИМАЄТЕ В
							</h1>
							<h1 className='font-bold text-4xl text-center'>ROCK Club</h1>
						</div>

						{[
							'Відеоуроки по сучасному, рок та екстрим-вокалу',
							'Відеорозбори вокалу рок-зірок',
							'Ексклюзивні вправи в рок та метал стилях',
							'Корисні подкасти та пости',
							'Матеріали для вдосконалення технік та занурення в стилістику рок-музики і вокалу',
							'Відповіді на свої питання',
							'Рішення щодо своїх проблем чи учнів',
							'Корисні фрагменти з моїх уроків',
							'Участь у живих подіях',
							'Додаткові знижки для учасників клубу на мої продукти',
						].map((item, index) => (
							<div key={index} className='flex gap-3 items-start w-full'>
								<IoStarHalfSharp
									color='#149eca'
									size={38}
									className='flex-shrink-0'
								/>
								<p className='text-lg'>{item}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Десктопная версия */}
			<div className='hidden md:block relative w-full min-h-screen flex items-center justify-center p-12'>
				{/* Градиентный фон с эффектом "космической энергии" */}
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
					className='relative z-10 p-12 flex flex-col items-center bg-black/70 backdrop-blur-sm rounded-2xl border border-white/10 max-w-6xl
          [box-shadow:0_0_30px_rgba(0,0,255,0.3),0_0_60px_rgba(255,0,0,0.3)] mx-auto'
				>
					<div className='flex flex-col items-center mb-10'>
						<h1 className='font-bold text-5xl text-white'>ЩО ВИ ОТРИМАЄТЕ В</h1>
						<h1
							className='font-bold text-6xl text-blue-400 mt-2
              [text-shadow:0_0_10px_#00f,0_0_20px_#00f]'
						>
							ROCK Club
						</h1>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
						{[
							'Відеоуроки по сучасному, рок та екстрим-вокалу',
							'Відеорозбори вокалу рок-зірок',
							'Ексклюзивні вправи в рок та метал стилях',
							'Корисні подкасти та пости',
							'Матеріали для вдосконалення технік та занурення в стилістику рок-музики і вокалу',
							'Відповіді на свої питання',
							'Рішення щодо своїх проблем чи учнів',
							'Корисні фрагменти з моїх уроків',
							'Участь у живих подіях',
							'Додаткові знижки для учасників клубу на мої продукти',
						].map((item, index) => (
							<div
								key={index}
								className='flex gap-4 items-start p-5 bg-black/40 rounded-xl border border-blue-500/30 hover:border-red-500/50 transition-all
                  hover:translate-y-[-3px] hover:[box-shadow:0_5px_20px_rgba(0,0,255,0.3)]'
							>
								<IoStarHalfSharp
									color={index % 2 ? '#149eca' : '#ff4d4d'}
									size={36}
									className='flex-shrink-0 mt-1'
								/>
								<p className='text-xl text-white'>{item}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
