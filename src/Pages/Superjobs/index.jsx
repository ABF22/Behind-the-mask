import React, {useState, useEffect} from 'react'
import {Heros} from '../../Components'

const SuperJobs = () => {
    const [superHero,setSuperHero] = useState([]);

    const get100 = () => {
      let i =0
      while(i <100){
        i += 1;
            return i
        }
    }
  console.log(get100())
  async function fetchSuperhero() {
    try {
      const response = await fetch(`https://superheroapi.com/api.php/${process.env.REACT_APP_ACCESS_CODE}/${get100()}`)
      const data = await response.json()
      setSuperHero(data)
    } catch (error) {
      console.log(error.message)
    }
  }
    console.log(superHero)
  useEffect(() => {
    fetchSuperhero()
  }, [])


  return (
    <>
        <div>SuperJobs</div>
        <Heros superHero={superHero} />
    </>
  )
}

export default SuperJobs
