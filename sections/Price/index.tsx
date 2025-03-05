import Link from 'next/link'

export default function Price() {
	return (
		<div className='p-[1rem] flex flex-col items-center text-center gap-8 bg-[#010305]'>
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
	)
}
