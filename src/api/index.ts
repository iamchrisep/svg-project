import axios from 'axios'
import { API_HOSTNAME } from 'constants/base'

export const fetchInit = async () => await axios.get(`${API_HOSTNAME}/init`)
export const fetchProject = async (id: string) => await axios.get(`${API_HOSTNAME}/project/${id}`)
