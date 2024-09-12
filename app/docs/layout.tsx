import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { docsOptions } from '../layout.config'

const options = {
  ...docsOptions,
  sidebar: {
    enabled: false
  }
}

export default function Layout({ children }: { children: ReactNode }) {
	return <DocsLayout {...options}>{children}</DocsLayout>
}
