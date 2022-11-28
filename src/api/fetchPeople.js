export const initialURL = 'http://swapi.dev/api/people/'

const fetchPeople = async (url) => { 
  const req = await fetch(url)
  return req.json();
}

export default fetchPeople;