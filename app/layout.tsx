import './global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
	subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<GoogleAnalytics gaId="G-XMCLZ43KKY" />
			<body className="min-h-screen bg-background">
				<RootProvider
					search={{ enabled: false }}
					theme={{
						forcedTheme: 'dark',
					}}
				>
					{children}
				</RootProvider>
			</body>
		</html>
	)
}
