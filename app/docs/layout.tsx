import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { docsOptions } from '../layout.config'
import { GoogleAnalytics } from '@next/third-parties/google'

const options = {
	...docsOptions,
	sidebar: {
		enabled: false,
	},
}

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout {...options}>
			<GoogleAnalytics gaId="G-XMCLZ43KKY" />
			{children}
		</DocsLayout>
	)
}
