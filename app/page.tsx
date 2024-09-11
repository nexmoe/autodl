import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import {
	CloudIcon,
	CpuIcon,
	DollarSignIcon,
	RefreshCwIcon,
	ServerIcon,
	ShieldIcon,
	HeadphonesIcon,
} from 'lucide-react'
import { HomeLayout } from 'fumadocs-ui/home-layout'
import { baseOptions } from './layout.config'
import CTAButton from '@/components/CTAButton'

function Hero() {
	return (
		<section className="w-full py-32 md:py-48 lg:py-64 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
			<div className="container px-6 md:px-8 max-w-5xl mx-auto relative z-10">
				<div className="flex flex-col items-center space-y-8 text-center">
					<h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
						高效利用闲置资源
						<br />
						灵活租用计算能力
					</h1>
					<p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-400 leading-relaxed">
						为 AI 工作者提供灵活的短期 GPU 租赁方案，让您的项目快速启动，不再受限于硬件资源。
					</p>
					<div className="space-x-6 mt-12">
						<CTAButton />
						{/* <Button variant="outline">了解更多</Button> */}
					</div>
				</div>
			</div>
			{/* 添加更多动态背景元素 */}
			<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
			<div className="absolute inset-y-0 right-0 w-[300px] bg-gradient-to-l from-blue-500/20 to-transparent blur-3xl animate-blob" />
			<div className="absolute inset-y-0 left-0 w-[300px] bg-gradient-to-r from-purple-500/20 to-transparent blur-3xl animate-blob animation-delay-2000" />
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
		</section>
	)
}

function GPUCards() {
	const gpuData = [
		{
			name: 'NVIDIA RTX 3080',
			price: 0.88,
			discount: 30,
			daysLeft: 15,
			memory: '10GB GDDR6X',
			cores: 8704,
		},
		{
			name: 'NVIDIA RTX 3090',
			price: 1.32,
			discount: 35,
			daysLeft: 20,
			memory: '24GB GDDR6X',
			cores: 10496,
		},
		{
			name: 'NVIDIA RTX 4090',
			price: 1.98,
			discount: 40,
			daysLeft: 17,
			memory: '24GB GDDR6X',
			cores: 16384,
		},
		// 可以添加更多GPU数据
	]

	return (
		<section className="w-full py-24 md:py-32 lg:py-40 bg-gray-900 text-white">
			<div className="container px-6 md:px-8 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-20">
					超值显卡租赁
				</h2>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{gpuData.map((gpu, index) => (
						<Card key={index} className="bg-gray-800 border-gray-700">
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-blue-400">{gpu.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="flex justify-between items-baseline">
										<span className="text-3xl font-bold">
											${(gpu.price * (100 - gpu.discount)) / 100}/小时
										</span>
										<Badge variant="destructive" className="text-lg">
											省{gpu.discount}%
										</Badge>
									</div>
									<p className="text-gray-400">{gpu.daysLeft} 天可租</p>
									<div className="space-y-2">
										<p>
											<span className="font-semibold">显存：</span>
											{gpu.memory}
										</p>
										<p>
											<span className="font-semibold">CUDA核心：</span>
											{gpu.cores}
										</p>
									</div>
									{/* <Button className="w-full">立即租用</Button> */}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

function Features() {
	return (
		<section id="features" className="w-full py-24 md:py-32 lg:py-40 bg-gray-900 text-white relative">
			<div className="container px-6 md:px-8 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-20">
					我们的优势
				</h2>
				<div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3">
					{/* 使用新的 FeatureCard 组件 */}
					<FeatureCard
						icon={<CloudIcon className="h-12 w-12 text-blue-400" />}
						title="资源优化"
						description="充分利用闲置 10-30 天的高性能 GPU，提高资源利用率"
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

function WhyChooseUs() {
	return (
		<section className="w-full py-24 md:py-32 lg:py-40 bg-gray-900 text-white">
			<div className="container px-6 md:px-8 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-20">
					为什么选择我们？
				</h2>
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
					<ReasonCard
						icon={<ServerIcon className="h-12 w-12 text-primary" />}
						title="高性能设备"
						description="提供最新的GPU和CPU设备，满足各种计算需求"
					/>
					<ReasonCard
						icon={<ShieldIcon className="h-12 w-12 text-primary" />}
						title="安全可靠"
						description="采用先进的安全措施，保护您的数据和隐私"
					/>
					<ReasonCard
						icon={<HeadphonesIcon className="h-12 w-12 text-primary" />}
						title="24/7技术支持"
						description="专业团队全天候为您提供技术支持和解答"
					/>
				</div>
			</div>
		</section>
	)
}

function ReasonCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode
	title: string
	description: string
}) {
	return (
		<div className="flex flex-col items-center space-y-2 p-6 py-16 bg-gray-700 rounded-lg shadow-md">
			{icon}
			<h3 className="text-xl font-bold">{title}</h3>
			<p className="text-gray-300 text-center">{description}</p>
		</div>
	)
}

function Pricing() {
	return (
		<section
			id="pricing"
			className="w-full py-32 md:py-40 lg:py-48 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden"
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
						大幅降低研究成本，让您的经费发挥最大价值
					</p>
					<DollarSignIcon className="h-24 w-24 text-green-500 mt-8" />
				</div>
			</div>
			{/* 添加背景动画效果 */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
			<div className="absolute inset-y-0 right-0 w-[300px] bg-gradient-to-l from-blue-500/20 to-transparent blur-3xl animate-pulse" />
		</section>
	)
}

function Contact() {
	return (
		<section id="waitlist" className="w-full py-32 md:py-40 lg:py-48 bg-gray-950 text-white">
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

function Footer() {
	return (
		<footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-6 md:px-8 border-t border-gray-800 bg-gray-950 text-white">
			<p className="text-sm text-gray-400">© 2024 闲时显卡租赁. 保留所有权利。</p>
			{/* <nav className="sm:ml-auto flex gap-6">
				<Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
					条款
				</Link>
				<Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
					隐私政策
				</Link>
			</nav> */}
		</footer>
	)
}

export default function LandingPage() {
	return (
		<HomeLayout {...baseOptions}>
			<div className=" flex flex-col min-h-screen bg-gray-950 text-white">
				<main className="flex-1">
					<Hero />
					<GPUCards />
					<Features />
					<WhyChooseUs />
					<Pricing />
					<Contact />
				</main>
				<Footer />
			</div>
		</HomeLayout>
	)
}
