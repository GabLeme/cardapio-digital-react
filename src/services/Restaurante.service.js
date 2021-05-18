import axios from 'axios';


const RestauranteService = {
    getAll: () => axios.get('http://localhost:8080/api/v1/restaurantes')
}

export default RestauranteService;