import axios from 'axios';

export const fetchShow = () => 
    axios
    .get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes')
    .then(res => {
        console.log('data for app', res.data)
        return res})
    .catch(err => console.log(err))