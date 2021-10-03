import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTournament = payload => api.post(`/tournament`, payload)
export const getAllTournaments = () => api.get(`/tournaments`)

const apis = {
    insertMovie,
    getAllMovies,
}

export default apis