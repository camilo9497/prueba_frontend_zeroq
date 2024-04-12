
const BASE_URL = 'http://localhost:3000'

export const useFetcher = () => {
  const fetcher = async <T>(url:string): Promise<T> => {
    const res = await fetch(`${BASE_URL}${url}`)
    return await res.json()
  }

  return {
    fetcher
  }
}