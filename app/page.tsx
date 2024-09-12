import React from 'react'

import Hero from '@/components/landing/hero'
import Footer from '@/components/landing/footer'
import GPUCards from '@/components/landing/GPUCards'

import {
	CloudIcon,
	CpuIcon,
	DollarSignIcon,
	RefreshCwIcon,
	BatteryChargingIcon,
	ClockIcon,
	SearchIcon,
} from 'lucide-react'
import { HomeLayout } from 'fumadocs-ui/home-layout'
import { baseOptions } from './layout.config'
import CTAButton from '@/components/CTAButton'
import PricingCalculator from '@/components/landing/PricingCalculator'

import { Metadata } from 'next'
export const metadata = {
	title: '灵动算力租赁',
	description: '',
} satisfies Metadata

function PainPoints() {
	return (
		<section className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-white">
			<div className="container px-6 md:px-8 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-20">
					解决您的痛点
				</h2>
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
					<PainPointCard
						icon={<DollarSignIcon className="h-12 w-12 text-red-400" />}
						title="成本压力大"
						problem="长期租用或购买设备成本高昂"
						solution="灵活的短期租赁方案，显著降低研究成本"
					/>
					<PainPointCard
						icon={<SearchIcon className="h-12 w-12 text-red-400" />}
						title="短期节点难寻"
						problem="短期高性能节点供应不足，难以满足临时需求"
						solution="提供丰富的短期高性能节点，满足临时计算需求"
					/>
					<PainPointCard
						icon={<BatteryChargingIcon className="h-12 w-12 text-red-400" />}
						title="硬件资源不足"
						problem="高性能GPU价格昂贵，难以负担"
						solution="提供按需租用的高性能GPU，无需大额投资"
					/>
					<PainPointCard
						icon={<ClockIcon className="h-12 w-12 text-red-400" />}
						title="项目进度受限"
						problem="硬件资源不足导致项目进度缓慢"
						solution="即时访问高性能计算资源，加速项目进展"
					/>
				</div>
			</div>
		</section>
	)
}

function PainPointCard({
	icon,
	title,
	problem,
	solution,
}: {
	icon: React.ReactNode
	title: string
	problem: string
	solution: string
}) {
	return (
		<div className="flex flex-col items-center space-y-4 p-8 bg-gray-900 rounded-lg shadow-md">
			<div className="p-3 bg-red-500/10 rounded-full mb-4">{icon}</div>
			<h3 className="text-xl font-bold text-center">{title}</h3>
			<p className="text-red-400 text-center">{problem}</p>
			<p className="text-green-400 text-center">{solution}</p>
		</div>
	)
}

function Features() {
	return (
		<section id="features" className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-white relative">
			<div className="container px-6 md:px-8 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-20">
					我们的优势
				</h2>
				<div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3">
					<FeatureCard
						icon={<CloudIcon className="h-12 w-12 text-blue-400" />}
						title="高性能计算"
						description="提供高性能 GPU，满足各种计算需求"
					/>
					<FeatureCard
						icon={<CpuIcon className="h-12 w-12 text-blue-400" />}
						title="灵活租用"
						description="按需租用单机整套设备，满足短期高强度计算需求"
					/>
					<FeatureCard
						icon={<RefreshCwIcon className="h-12 w-12 text-blue-400" />}
						title="无缝迁移"
						description="支持长期项目的工作负载无缝迁移，保证研究连续性"
					/>
				</div>
			</div>
		</section>
	)
}

function FeatureCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode
	title: string
	description: string
}) {
	return (
		<div className="group flex flex-col items-center space-y-2 border border-gray-700 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 hover:scale-105">
			<div className="p-3 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
				{icon}
			</div>
			<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
				{title}
			</h3>
			<p className="text-gray-300 text-center">{description}</p>
		</div>
	)
}

function Pricing() {
	return (
		<section
			id="pricing"
			className="w-full py-32 md:py-40 lg:py-48 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative"
		>
			<div className="container px-6 md:px-8 max-w-4xl mx-auto relative z-10">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
					经济实惠的定价
				</h2>
				<div className="flex flex-col items-center space-y-8">
					<div className="flex items-baseline justify-center space-x-4">
						<span className="text-7xl font-bold">60%</span>
						<span className="text-2xl text-gray-400">市场平均价格</span>
					</div>
					<p className="text-3xl text-center max-w-2xl text-gray-300 leading-relaxed">
						大幅降低计算成本，让您的经费发挥最大价值
					</p>
					<PricingCalculator />
				</div>
			</div>
			{/* 保留原有的背景动画效果 */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
			<div className="absolute inset-y-0 right-0 w-[300px] bg-gradient-to-l from-blue-500/20 to-transparent blur-3xl animate-pulse" />
		</section>
	)
}

function Contact() {
	return (
		<section
			id="waitlist"
			className="w-full py-32 pb-42 md:py-40 md:pb-56 lg:py-48 lg:pb-64 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
		>
			<div className="container px-6 md:px-8 max-w-4xl mx-auto">
				<div className="flex flex-col items-center space-y-8 text-center">
					<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						加入等待列表，抢先体验
					</h2>
					<p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-400 leading-relaxed">
						我们即将推出服务。留下您的邮箱，成为首批尝鲜用户，享受独家优惠和支持。
					</p>
					<div className="w-full max-w-md space-y-6 mt-12">
						<CTAButton />
					</div>
				</div>
			</div>
		</section>
	)
}

export default function LandingPage() {
	return (
		<HomeLayout {...baseOptions}>
			<div className=" flex flex-col min-h-screen bg-gray-950 text-white">
				<main className="flex-1">
					<Hero />
					<Pricing />
					<PainPoints />
					<GPUCards />
					<Features />
					<Contact />
				</main>
				<Footer />
			</div>
		</HomeLayout>
	)
}
