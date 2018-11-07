import axios from 'axios'

const api = {
    getData: () => axios.get('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=20&apikey=e125865efb994f843965340cf7a53669&ts=9&hash=ad725490698ef5de174244ecbeb08aa8')
}

export default api;