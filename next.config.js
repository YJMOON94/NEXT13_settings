/** @type {import('next').NextConfig} */
// image 외부링크 연결시 세팅 설정
const nextConfig = {
	images: {
		protocol: 'https',
		hostname: '해당링크',
		port: '',
		pathname: '/링크/**',
	},
};

module.exports = nextConfig;
