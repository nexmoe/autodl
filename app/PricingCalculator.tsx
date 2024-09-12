'use client'

import React, { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const gpuData = [
    { name: 'NVIDIA RTX 4090', price: 1.98, marketPrice: 3.30 },
	{ name: 'NVIDIA RTX 3080', price: 0.88, marketPrice: 1.47 },
	{ name: 'NVIDIA RTX 3090', price: 1.32, marketPrice: 2.20 },
]

export default function PricingCalculator() {
	const [selectedGPU, setSelectedGPU] = useState(gpuData[0])
	const [gpuCount, setGPUCount] = useState(10)
	const [hours, setHours] = useState(1440)
	const [savings, setSavings] = useState(0)

	useEffect(() => {
		const marketTotal = hours * selectedGPU.marketPrice * gpuCount
		const ourTotal = hours * selectedGPU.price * gpuCount
		setSavings(marketTotal - ourTotal)
	}, [selectedGPU, gpuCount, hours])

	return (
		<div className="w-full max-w-md space-y-6">
			<div>
				<label className="block text-sm font-medium text-gray-400 mb-2">
					选择显卡型号
				</label>
				<Select
					onValueChange={(value) => setSelectedGPU(gpuData.find(gpu => gpu.name === value) || gpuData[0])}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="选择显卡型号" />
					</SelectTrigger>
					<SelectContent>
						{gpuData.map((gpu) => (
							<SelectItem key={gpu.name} value={gpu.name}>
								{gpu.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div>
				<label htmlFor="gpuCount" className="block text-sm font-medium text-gray-400 mb-2">
					显卡数量
				</label>
				<Input
					type="number"
					id="gpuCount"
					value={gpuCount}
					onChange={(e) => setGPUCount(Math.max(10, parseInt(e.target.value) || 10))}
					className="w-full"
				/>
			</div>
			<div>
				<label htmlFor="hours" className="block text-sm font-medium text-gray-400 mb-2">
					估算使用时长（小时）
				</label>
				<Input
					type="number"
					id="hours"
					value={hours}
					onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
					className="w-full"
				/>
			</div>
			<div className="text-center">
				<p className="text-2xl font-bold text-green-400">
					预计节省: ¥{savings.toFixed(2)}
				</p>
				<p className="text-gray-400 mt-2">
					相比市场平均价格 (¥{(hours * selectedGPU.marketPrice * gpuCount).toFixed(2)})
				</p>
				<p className="text-gray-400 mt-2">
					我们的价格: ¥{(hours * selectedGPU.price * gpuCount).toFixed(2)}
				</p>
			</div>
		</div>
	)
}