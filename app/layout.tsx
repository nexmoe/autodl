import './global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
const inter = Inter({
	subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<GoogleAnalytics gaId="G-XMCLZ43KKY" />
			<Script id="microsoft-clarity-analytics">
				{`
					 (function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "o5g5wqb2cz");
				`}
			</Script>
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
