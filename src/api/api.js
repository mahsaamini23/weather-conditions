import axios from "axios"

const api = axios.create({
    baseurl:`http://api.openweathermap.org/data/2.5/forecast?id=112931&lang=fa&app`,

})

export default api;