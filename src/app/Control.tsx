'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const Control = () => {
	const params = useParams();
	const router = useRouter();
	const id = params.id;

	const option = {
		method: 'DELETE',
	};

	const deleteHandler = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, option);
		if (res.ok) {
			alert('삭제되었습니다');
			router.push(`/`);
			router.refresh(); // 순서 바뀔경우 refresh 에서 push 로 이동되기 전 해당 페이지를 리로드해 404 오류 발생
		}
	};

	return (
		<>
			<ul>
				<li>
					<Link href="/pages/create">Create</Link>
				</li>
				{id && (
					<>
						<li>
							<Link href={`/pages/update/${id}`}>update</Link>
						</li>
						<li>
							<input type="button" value="delete" onClick={deleteHandler} />
						</li>
					</>
				)}
			</ul>
		</>
	);
};

export default Control;
