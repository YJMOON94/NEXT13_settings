'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../../utils/customAxios';

type jsonData = {
	id: number;
	body: string;
	title: string;
};

const Create: React.FC = () => {
	const router = useRouter();

	const [inputT, setInputT] = useState<string>();
	const [bodyT, setBodyT] = useState<string>();

	// const _submit = useSubmit();
	const inputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputT(e.currentTarget.value);
	};

	const bodyOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setBodyT(e.currentTarget.value);
	};

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const res = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}topics`,
			JSON.stringify({ title: inputT, body: bodyT }),
		);
		const data: jsonData = await res.data;

		router.refresh();
		router.push(`/pages/read/${data.id}`);
	};

	return (
		<>
			<form onSubmit={submit}>
				<p>
					<Input type="text" name="title" placeholder="title" onChange={inputOnchange} value={inputT} />
				</p>
				<p>
					<textarea
						name="body"
						id=""
						placeholder="body"
						cols={30}
						rows={10}
						onChange={bodyOnchange}
						value={bodyT}
					></textarea>
				</p>
				<p>
					<Input type="submit" value="create" />
				</p>
			</form>
		</>
	);
};

export default Create;

const Input = styled.input`
	width: 200px;
	height: auto;
`;
