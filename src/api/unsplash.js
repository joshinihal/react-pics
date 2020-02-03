import axios from 'axios';

export default axios.create({
	baseURL:'https://api.unsplash.com',
	headers:{
				Authorization:'Client-ID 8bf3a1d3b002d04ce1cc50f11e79a6efaa640a0596ee518c9df672f4dba505ce'
			}
});