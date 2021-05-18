import { useEffect } from "react"

import HomeView from './HomeView'
import RestauranteService from '../../services/Restaurante.service'

const HomeController = (props) => {

    useEffect(() => {
        async function fetchRestaurantes() {
            let apiCall = await RestauranteService.getAll()
            let response = apiCall.data;
            return response
        }

        console.log(fetchRestaurantes())
    }, [])

    

    return (
        <HomeView></HomeView>
    )
}

export default HomeController;