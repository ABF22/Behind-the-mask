import React from 'react';

const HeroJob = ({ superHero }) => {

console.log(superHero)

  return (
    <div className="showHero">
      {
       Object.values(superHero).filter(hero => hero.id ? true : false)
      }
      <div id = "heroDeets">
        <img src={superHero.image.url} alt={superHero.name} />
        </div>
        <div>
        <h2>{superHero.name}</h2>
        <h3>Job</h3>
        <div dangerouslySetInnerHTML={{ __html: superHero.work.occupation }}></div>
        <h3>Place of work</h3>
        <div dangerouslySetInnerHTML={{ __html: superHero.work.base }}></div>
        </div>
    </div>
  );
}

export default HeroJob;
