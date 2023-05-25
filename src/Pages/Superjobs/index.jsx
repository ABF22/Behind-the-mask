import React, {useState, useEffect} from 'react'
import {Heros} from '../../Components'
//  const access = process.env.REACT_APP_ACCESS_CODE

const SuperJobs = () => {
    const [superHero,setSuperHero] = useState([]);

    const get100 = () => {
        for(let i =0; i <100 ;i++){
            return i
        }
    }
    let list = 700;
    const rand = Math.floor(Math.random()*list)
  async function fetchSuperhero() {
    try {
      const response = await fetch(`https://superheroapi.com/api/${access}/${get100}`)
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
