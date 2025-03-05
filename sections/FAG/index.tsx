'use client'

import { useState } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

const faqs = [
	{
		question: '🔥 Для кого цей клуб?',
		answer:
			'👉 Для вокалістів і викладачів, які хочуть прокачати свої навички в сучасному, рок та екстрим-вокалі.',
	},
	{
		question: '🎤 Чи підходить клуб новачкам?',
		answer:
			'👉 Так! Є матеріали і для початківців, і для досвідчених вокалістів.',
	},
	{
		question: '💰 Скільки коштує підписка?',
		answer: '👉 600 грн на місяць',
	},
	{
		question: '🎸 Які матеріали є в клубі?',
		answer:
			'👉 Відеоуроки, вправи, подкасти, розбори технік та голосів учасників, відповіді на питання та багато іншого.',
	},
	{
		question: '📅 Як часто оновлюється контент?',
		answer:
			'👉 Кожного тижня виходять нові матеріали, а 1 та 15 числа — відповіді на запитання.',
	},
	{
		question: '🔗 Як приєднатися?',
		answer:
			'👉 Натискай кнопку «Записатися» і ставай частиною нашої рок-спільноти!',
	},
	{
		question: '❌ Як відписатися?',
		answer:
			'👉 Для того щоб відписатися з клубу напишить в телеграм або в інстаграм @yana_vocalcoach  ',
	},
]

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<section className='max-w-2xl mx-auto p-[1rem]'>
			<h2 className='text-5xl font-bold text-center mb-6'>ЧАСТІ ПИТАННЯ</h2>
			<div className='space-y-4'>
				{faqs.map((faq, index) => (
					<div key={index} className='border border-gray-300 rounded-lg p-4'>
						<button
							className='flex justify-between w-full text-lg font-medium'
							onClick={() => setOpenIndex(openIndex === index ? null : index)}
						>
							{faq.question}
							{openIndex === index ? <IoChevronUp /> : <IoChevronDown />}
						</button>
						{openIndex === index && <p className='mt-2'>{faq.answer}</p>}
					</div>
				))}
			</div>
		</section>
	)
}
