import AboutGroup from '@/sections/AboutGroup'
import Price from '@/sections/Price'
import ExclusiveClub from '@/sections/ExckusiveClub'
import Main from '@/sections/Main'
import Advantages from '@/sections/Advantages'
import AboutAuthor from '@/sections/AboutAuthor'
import Reviews from '@/sections/Reviews'
import FAQ from '@/sections/FAG'
import Footer from '@/sections/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Rock Club',
	description:
		'ROCK Vocal Club — це ексклюзивний закритий клуб для вокалістів та викладачів, присвячений розвитку та вдосконаленню сучасного, рок та екстрим-вокалу. Якщо ви хочете отримати доступ до професійного навчання, поглибленого розбору технік, практичних вправ та відповідей на свої питання, цей клуб — це саме те, що вам потрібно!',
	keywords: ['Rock vocal', 'vocal', 'extreme vocal '],
	openGraph: {
		title: 'Rock Club',
		description:
			'ROCK Vocal Club — це ексклюзивний закритий клуб для вокалістів та викладачів, присвячений розвитку та вдосконаленню сучасного, рок та екстрим-вокалу. Якщо ви хочете отримати доступ до професійного навчання, поглибленого розбору технік, практичних вправ та відповідей на свої питання, цей клуб — це саме те, що вам потрібно!',
		url: 'https://example.com',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rock Club',
		description:
			'ROCK Vocal Club — це ексклюзивний закритий клуб для вокалістів та викладачів, присвячений розвитку та вдосконаленню сучасного, рок та екстрим-вокалу. Якщо ви хочете отримати доступ до професійного навчання, поглибленого розбору технік, практичних вправ та відповідей на свої питання, цей клуб — це саме те, що вам потрібно!',
	},
}

export default function Home() {
	return (
		<main className='w-700px'>
			<Main />
			<AboutGroup />
			<ExclusiveClub />
			<Advantages />
			<Price />
			<AboutAuthor />
			<Reviews />
			<FAQ />
			<Footer />
		</main>
	)
}
