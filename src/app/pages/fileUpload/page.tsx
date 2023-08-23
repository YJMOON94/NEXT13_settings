'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';

// interface FileData {
// 	lastModified: number;
// 	name: string;
// 	size: number;
// 	type: string;
// }

const FileUpload = () => {
	const [imgBase64, setImgBase64] = useState<string>('');

	const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const render = new FileReader();

		if (e.target.files !== null) {
			if (e.target.files[0]) {
				render.readAsDataURL(e.target.files[0]);
			}
		}

		render.onloadend = () => {
			const base64 = render.result;

			if (base64) {
				setImgBase64(base64.toString());
			}
		};

		render.onerror = () => {
			console.log('err');
		};
	};

	localStorage.setItem('img', imgBase64);

	const utterance = new SpeechSynthesisUtterance('Hello world!');
	speechSynthesis.speak(utterance);

	return (
		<>
			파일 <input type="file" name="test" id="test" onChange={getFile} accept="image/*" />
			이미지 <BlankImg src={imgBase64} alt="미리보기" />
		</>
	);
};

export default FileUpload;

const BlankImg = styled.img`
	display: inline-block;
	width: 200px;
	background-color: #f3f3f3;
`;
