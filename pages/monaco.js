import Editor from '@monaco-editor/react'
import Link from 'next/link'

export default function MonacoScreen() {
	return (
		<>
			<Editor
				height='90vh'
				defaultLanguage='javascript'
				defaultValue='// Welcome to Monaco using JavaScript'
				theme='vs-dark'
			/>
			<div style={{ margin: '1rem 1rem 0' }}>
				<Link href='/'>
					<a>← Back to home</a>
				</Link>
			</div>
		</>
	)
}
