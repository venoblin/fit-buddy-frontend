import axios from 'axios'
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from '@/global'

const options = {
  method: 'GET',
  url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
  headers: {
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST
  }
}

export const GetExercises = (params = null) => {
  if (params) {
    params.muscle === 'cardio'
      ? (options.params = { type: 'cardio' })
      : (options.params = params)
  }

  const exercises = axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return exercises
}
