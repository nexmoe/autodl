import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	ArrowRightIcon,
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
						为高校用户提供灵活的短期单机整租方案，充分利用集群中闲置的计算资源。
					</p>
					<div className="space-x-6 mt-12">
						<Button>开始使用</Button>
						<Button variant="outline">了解更多</Button>
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

function Features() {
	return (
		<section id="features" className="w-full py-24 md:py-32 lg:py-40 bg-gray-900 text-white relative">
			<div className="container px-6 md:px-8 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-20">
					我们的特色
				</h2>
				<div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3">
					{/* 使用新的 FeatureCard 组件 */}
					<FeatureCard
						icon={<CloudIcon className="h-12 w-12 text-blue-400" />}
						title="高效利用"
						description="充分利用闲置10-30天的计算资源"
					/>
					<FeatureCard
						icon={<CpuIcon className="h-12 w-12 text-blue-400" />}
						title="灵活租用"
						description="短期单机整租，满足您的临时需求"
					/>
					<FeatureCard
						icon={<RefreshCwIcon className="h-12 w-12 text-blue-400" />}
						title="资源迁移"
						description="支持长期租用时的无缝workload迁移"
					/>
				</div>
			</div>
		</section>
	)
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
	return (
		<div className="group flex flex-col items-center space-y-2 border border-gray-700 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 hover:scale-105">
			<div className="p-3 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
				{icon}
			</div>
			<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
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

function ReasonCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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
		<section id="pricing" className="w-full py-32 md:py-40 lg:py-48 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
			<div className="container px-6 md:px-8 max-w-4xl mx-auto relative z-10">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
					超值定价
				</h2>
				<div className="flex flex-col items-center space-y-8">
					<div className="flex items-baseline justify-center space-x-4">
						<span className="text-7xl font-bold">60%</span>
						<span className="text-2xl text-gray-400">其他平台的价格</span>
					</div>
					<p className="text-3xl text-center max-w-2xl text-gray-300 leading-relaxed">
						超低价格，助力您的研究项目
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
		<section id="contact" className="w-full py-32 md:py-40 lg:py-48 bg-gray-950 text-white">
			<div className="container px-6 md:px-8 max-w-4xl mx-auto">
				<div className="flex flex-col items-center space-y-8 text-center">
					<h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						准备开始使用我们的服务？
					</h2>
					<p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-400 leading-relaxed">
						联系我们，了解更多关于如何利用我们的资源租用服务来加速您的研究项目。
					</p>
					<div className="w-full max-w-md space-y-6 mt-12">
						<form className="flex space-x-4">
							<Input
								className="flex-1 bg-gray-800 border-gray-700 text-white"
								placeholder="输入您的邮箱"
								type="email"
							/>
							<Button type="submit">
								订阅
								<ArrowRightIcon className="ml-2 h-5 w-5" />
							</Button>
						</form>
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

function Link({ href, children, ...props }: { href: string; children: React.ReactNode }) {

	return (
		<a href={href} {...props}>
			{children}
		</a>
	)
}
