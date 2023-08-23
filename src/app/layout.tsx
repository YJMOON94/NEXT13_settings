import React from 'react';
import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';

import Control from './Control';

import StyledComponentsRegistry from './lib/registry';
import type { Topics } from './types/topic';

export const metadata: Metadata = {
	title: 'title test',
	description: 'page description test',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'topics', { cache: 'no-store' });
	const topics: Topics[] = await response.json();

	return (
		<html>
			<body>
				<h1>
					<Link href="/">WEB</Link>
				</h1>
				<ul>
					{topics?.map((topic) => (
						<li key={topic.id}>
							<Link href={`/pages/read/${topic.id}`}>{topic.title}</Link>
						</li>
					))}
					<li>
						<Link href={`/pages/fileUpload`}>fileUploadTest</Link>
					</li>
				</ul>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				<Control />
			</body>
		</html>
	);
}
