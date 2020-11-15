import axios from 'axios';

console.log(process.env.REACT_APP_BACKEND_HOST);
const OrbquestaClient = axios.create();

export default OrbquestaClient;
