let baseUrl;
let key;
switch(process.env.NODE_ENV) {
	case 'development':
	    baseUrl = 'https://apis.juhe.cn';
		key= '62c31438fc20923644a1ad8150201d14';
		break;
    case 'production':
	    baseUrl = 'https://apis.juhe.cn';
		key='62c31438fc20923644a1ad8150201d14';
		break;
}
const urls = {
	baseUrl,
	key
}
export default urls