import React from 'react'
import Dhoni from '../images/Dhoni.webp'
import Rahane from '../images/Rahane.webp'
import kohli from '../images/kohli.avif'
import Smith from '../images/Aswin.webp'
import Kane from '../images/Sanju.jpg'

function Players(){
  return (
    <div className="main">
            <div className="col col1">
                <h2>Players</h2>
            </div>
            <div className="col">
                <div className="card">
                    <img  className="rahane" src={Rahane} alt="" />
                    <h3>Rahane</h3>
                    
                </div>
                <div className="card">
                    <img className='dhoni' src={Dhoni} alt="" />
                    <h3>Dhoni</h3>
                </div>
                <div className="card">
                    <img className='Kohli' src={kohli} alt="" />
                    <h3>Kohli</h3>
                </div>
                <div className="card">
                    <img className='aswin' src={Smith} alt="" />
                    <h3>Aswin</h3>
                </div>
                <div className="card">
                    <img className='sanju' src={Kane} alt="" />
                    <h3 className='react'>Sanju Samson</h3>
                </div>
            </div>    
        </div>

  )
}



export default Players;