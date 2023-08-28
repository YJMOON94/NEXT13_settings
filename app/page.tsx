import React from 'react';
import { connectDB } from '../util/database';

// import Image from 'next/image';

export default async function Home() {
	const client = await connectDB;
	const db = client.db('forum');
	let result = await db.collection('post').find().toArray();
	console.log(result);
	return (
		<>
			{result.map((content, ind) => (
				<div key={ind}>
					<h1>{content.title}</h1>
					<p>{content.content}</p>
				</div>
			))}
		</>
	);
}
