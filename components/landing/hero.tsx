import CTAButton from '@/components/CTAButton'

export default function Hero() {
	return (
		<section className="w-full py-32 md:py-36 lg:py-48 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative">
			<div className="container px-6 md:px-8 max-w-5xl mx-auto relative z-10">
				<div className="flex flex-col items-center space-y-8 text-center">
					<h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
						灵活租用计算能力
					</h1>
					<p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-400 leading-relaxed">
						为 AI 工作者提供灵活的短期 GPU 租赁方案，让您的项目快速启动，不再受限于硬件资源。
					</p>
					<div className="space-x-6 mt-12 flex items-center gap-2">
						<div className='text-gray-200'>成为首批尝鲜用户，享受独家优惠和支持</div>
						<CTAButton />
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
