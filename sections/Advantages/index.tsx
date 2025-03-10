import { IoStarHalfSharp } from 'react-icons/io5'
import advantages from '@/assets/advantages.jpeg'

export default function Advantages() {
	return (
		<div
			style={{
				backgroundImage: `url(${advantages.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='p-[1rem] flex flex-col items-center gap-6 bg-black/80 rounded-xl'>
				<div className='flex flex-col'>
					<h1 className='font-bold text-4xl text-center'>ЩО ВИ ОТРИМАЄТЕ В</h1>
					<h1 className='font-bold text-4xl text-center'>ROCK Club</h1>
				</div>

				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>
						Відеоуроки по сучасному, рок та екстрим-вокалу
					</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>Відеорозбори вокалу рок-зірок</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>Ексклюзивні вправи в рок та метал стилях</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>Корисні подкасти та пости</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>
						Матеріали для вдосконалення технік та занурення в стилістику
						рок-музики і вокалу
					</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>Відповіді на свої питання</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>Рішення щодо своїх проблем чи учнів</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>Корисні фрагменти з моїх уроків</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>Участь у живих подіях</p>
				</div>
				<div className='flex gap-2 items-center w-full'>
					<IoStarHalfSharp
						color='#149eca'
						size={38}
						className='flex-shrink-0'
					/>
					<p className='text-2xl'>
						Додаткові знижки для учасників клубу на мої продукти
					</p>
				</div>
			</div>
		</div>
	)
}
