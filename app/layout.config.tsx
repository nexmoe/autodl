import { type DocsLayoutProps } from 'fumadocs-ui/layout'
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout'
import { pageTree } from '@/app/source'
import Image from 'next/image'
import logoimage from './20240911-143807.png'

function logo() {
	return (
		<div className='flex flex-row items-center'>
			<Image src={logoimage} width={48} height={48} alt="灵动算力" />
      <div>灵动算力</div>
		</div>
	)
}

// shared configuration
export const baseOptions: HomeLayoutProps = {
	nav: {
		title: logo(),
	},
	// links: [
	//   {
	//     text: 'Documentation',
	//     url: '/docs',
	//     active: 'nested-url',
	//   },
	// ],
}

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
	...baseOptions,
	tree: pageTree,
}
