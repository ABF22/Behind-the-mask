import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {HeroJob} from '../../Components'

const SuperJob = () => {
  const [hero, setHero] = useState({ name: {},image: {}, work: {} });
  const { id } = useParams()

  useEffect(() => {
    async function fetchHero() {
      const response = await fetch(`https://superheroapi.com/api/${2268091433374349}/${id}`)
      const data = await response.json()
      setHero(data)
    }

    fetchHero()

  }, [])

  return (
    <main>
      <HeroJob hero={hero} />
    </main>
  );
}

export default SuperJob;
