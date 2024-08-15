import React from 'react'
import './titleCard.css'
import cards_data from '../../assets/cards/Cards_data'

function TitleCard({name}) {
  return (
      <>
          <div className="Container-Card">
              <h2>{name}</h2>
              <div className="Card-List">
                  {
                    cards_data.map((card,index)=>{
                        return <dir className='Card' key={index}>
                                      <img src={card.image} alt="" />
                                      <p>{card.name}</p>
                               </dir>
                    })
                  }
              </div>
          </div> 
      </>

  )
}

export default TitleCard