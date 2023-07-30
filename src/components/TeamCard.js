import React from 'react'
import { IMAGE_URL } from '../utils/constants';

const TeamCard = (props) => {
    const {name, desigination, imageSrc, intro} = props.info;
  return (
    <div className='card team-card'>
        <div className='card-left-section'>
            <img src={IMAGE_URL+imageSrc} alt=''/>
        </div>
        <div className='card-right-section'>
            <h4>{desigination}</h4>
            <h2>{name}</h2>
            <p>{intro}</p>
        </div>
    </div>
  )
}

export default TeamCard