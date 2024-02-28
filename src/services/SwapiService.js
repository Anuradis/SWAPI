export default {
  fetchPeopleDataByPage: async (page) => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching people data:', error)
    }
  },

  fetchPersonDetailsById: async (personId) => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${personId}/`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching person data:', error)
    }
  }
}
