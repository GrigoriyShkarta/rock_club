import about_group from '@/assets/about_group.jpeg'

export default function AboutGroup() {
	return (
		<div
			style={{
				backgroundImage: `url(${about_group.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='p-[1rem] flex flex-col items-center text-center gap-8 bg-black/60 rounded-xl '>
				<h1 className='font-bold text-5xl'>для кого цей клуб</h1>
				<p className='text-3xl'>
					Для викладачів, які хочуть поглибити свої знання і отримати нові
					інструменти для навчання своїх учнів.
				</p>
				<p className='text-3xl'>
					Для тих, хто полюбляє рок-музику та вокал і хотів би більше в цьому
					розбиратися.
				</p>
			</div>
		</div>
	)
}
