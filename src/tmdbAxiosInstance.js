import axios from "axios";

const tmdbAxiosinstnce=axios.create({
    baseURL:"https://api.themoviedb.org/3"

})

export default tmdbAxiosinstnce