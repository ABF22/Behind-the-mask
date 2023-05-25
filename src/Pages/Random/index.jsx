
import React, {useState, useEffect} from 'react'
import {HeroJob} from '../../Components'
import './style.css'


const Random = () => {
    const [superHero,setSuperHero] = useState([]);
    const [loading, setLoading] = useState(true);

    const rand = Math.floor(Math.random()*700)
  async function fetchSuperhero() {
    try {
      const response = await fetch(`https://superheroapi.com/api.php/${process.env.REACT_APP_ACCESS_CODE}/${rand}`)
      const data = await response.json()
      setSuperHero(data)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchSuperhero()
  }, [])


  return (
    <div className = 'layout'>
        <div>Random hero</div>
        {loading ? <p>Loading...</p> :  <HeroJob superHero={superHero} />}
    </div>
  )
}

export default Random
