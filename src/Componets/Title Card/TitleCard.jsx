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

/*

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGQ0MmNhNzMyODBjZjg0OTcyYTYyODc3YTMyOTAxZiIsIm5iZiI6MTcyMzk0NDAwOC4wODM0LCJzdWIiOiI2NmMxNGE3NTg3MDM5MzM0Mzk2NzMzOTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4gjBAkjDyuFVhq6Co2IE93-VUIoUTdkY1UzVailnBYA'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



*/ 