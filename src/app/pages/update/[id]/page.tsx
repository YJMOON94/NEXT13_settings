'use client';

import React, { useState, useEffect, HTMLInputTypeAttribute } from 'react';
import { useParams, useRouter } from 'next/navigation';

type jsonData = {
	id: number;
	body: string;
	title: string;
};

const Update: React.FC = () => {
	const [title, setTitle] = useState<HTMLInputTypeAttribute>('');
	const [body, setBody] = useState<HTMLInputTypeAttribute>('');

	const router = useRouter();
	const params = useParams();

	const id: string | string[] = params.id;

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`);
			const data: jsonData = await res.json();
			setTitle(data.title);
			setBody(data.body);
		};
		fetchData();
	}, [id]);

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const option = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, body }),
		};

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${params.id}`, option);
		const data: jsonData = await res.json();
		const dataId = data.id;
		router.refresh();
		router.push(`/pages/read/${dataId}`);
	};

	return (
		<>
			<form onSubmit={submit}>
				<p>
					<input
						type="text"
						name="title"
						placeholder="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</p>
				<p>
					<textarea
						name="body"
						id=""
						placeholder="body"
						cols={30}
						rows={10}
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></textarea>
				</p>
				<p>
					<input type="submit" value="create" />
				</p>
			</form>
		</>
	);
};

export default Update;
