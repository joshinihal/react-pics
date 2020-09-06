import axios from 'axios';

export default axios.create({
	baseURL:'https://api.unsplash.com',
	headers:{
				Authorization:'YOUR_AUTH_KEY'
			}
});
