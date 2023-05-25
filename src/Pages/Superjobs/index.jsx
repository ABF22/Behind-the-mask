import React from 'react'

const SuperJobs = () => {

    
  async function fetchSuperhero() {
    try {
      const response = await fetch('')
      const data = await response.json()
      setSuper(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchSuperhero()
  }, [])


  return (
    <div>SuperJobs</div>
  )
}

export default SuperJobs
