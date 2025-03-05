import AboutGroup from '@/sections/AboutGroup'
import Price from '@/sections/Price'
import ExclusiveClub from '@/sections/ExckusiveClub'
import Main from '@/sections/Main'
import Advantages from '@/sections/Advantages'
import AboutAuthor from '@/sections/AboutAuthor'
import Reviews from '@/sections/Reviews'
import FAQ from '@/sections/FAG'
import Footer from '@/sections/Footer'

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
