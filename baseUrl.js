let baseUrl;
switch(process.env.NODE_ENV) {
	case 'development':
	    baseUrl = 'qa-api';
		break;
    case 'production':
	    baseUrl = 'pro-api';
		break;
}
export default {
	baseUrl
}