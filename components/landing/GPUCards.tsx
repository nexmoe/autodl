import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import gpuData from '@/components/landing/gpudata'

export default function GPUCards() {
	return (
		<section className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-white">
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
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
