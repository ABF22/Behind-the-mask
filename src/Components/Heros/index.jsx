import React from 'react'

const Heros = ({superHeros}) => {
  return (
    <div className="superH">
      {superHeros.map(hero => <Link to={`${hero.id}`}>
        <div className="hero-image">
            <img src={hero.image} alt={hero.name} />
        </div>
        </Link>
        )}
    </div>
  )
}

export default Heros
