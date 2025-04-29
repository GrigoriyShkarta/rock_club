import exclusive from '@/assets/exclusive_club.jpeg'

export default function ExclusiveClub() {
	return (
		<div
			className='hidden max-sm:block'
			style={{
				backgroundImage: `url(${exclusive.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='bg-black/80 p-5 rounded-xl flex flex-col items-center text-center gap-8'>
				<p className='text-2xl'>
					ROCK Club — це ексклюзивний закритий клуб для вокалістів та
					викладачів, присвячений розвитку та вдосконаленню сучасного, рок та
					екстрим-вокалу. Якщо ви хочете отримати доступ до професійного
					навчання, поглибленого розбору технік, практичних вправ та відповідей
					на свої питання, цей клуб — це саме те, що вам потрібно!
				</p>
			</div>
		</div>
	)
}
