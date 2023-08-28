import axios from 'axios'; // { AxiosError, AxiosRequestConfig, AxiosResponse }

// 'http://localhost:3000' === 개발용 url
// 'https://altong.com'=== 배포용 url

const instance = axios.create({
	baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:9999' : 'https://altong.com',
	timeout: 10000, // ms 단위
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
