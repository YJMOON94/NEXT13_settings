import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

const Read: React.FC<{ params: Params }> = async (props) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${props.params.id}`, { cache: 'no-cache' });
	const topic = await res.json();

	return (
		<>
			<h2>{topic.title}</h2>
			{topic.body}
		</>
	);
};

export default Read;
