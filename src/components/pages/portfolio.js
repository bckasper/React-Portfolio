import React from 'react';
import WeatherApp from '../../assets/weather-app.png'
import TeamGenerator from '../../assets/team-generator.png'

export default function Portfolio() {
  return (
    <div className='container-fluid vh-100 pt-2 justify-content-center d-flex'>
      
      {/* highlighted portfolio item */}
      <div className='row p-2 m-2 justify-content-center border bg-light weather-photo'>
        <h1 className='text-center'>Weather App</h1>
        <p className='text-center'>Simple weather app to plan your time outside. Enter in any city in the world and add them to your favorites to keep tabs on what is going on outside for the places you love to visit.</p>
        <img src={WeatherApp} className='weather-photo mb-2'></img>
        <div className="text-center">
              <a className="btn btn-outline-primary mx-1" href="https://bckasper.github.io/Fancy-Weather-App/" target="_blank">Go to App</a>
              
              <a  className="btn btn-outline-dark mx-1" href= 'https://github.com/bckasper/Fancy-Weather-App' target="_blank">Github Repo</a>
          </div>
      </div>

      {/* other portfolio items */}
      <div className='col align-items-center m-2 p-2 bg-light border'>

       {/*Team Generator App  */}
       <div className='col m-1 py-1 text-center app-bg'>
          <h3 className='text-center'>Team Profile Generator</h3> 
          <p className='text-center'>An easy-to-use backend tool to generate a team profile webpage</p>
          <img src={TeamGenerator} className="team-photo text-center m-auto"></img>
          <div className="text-center">
              <a className="btn btn-outline-primary mx-1" href="https://bckasper.github.io/Fancy-Weather-App/" target="_blank">Go to App</a>
              
              <a  className="btn btn-outline-dark mx-1" href= 'https://github.com/bckasper/Fancy-Weather-App' target="_blank">Github Repo</a>
          </div>
       </div>
       
       {/* Next App #2 */}
       <div className='col bg-warning m-1 py-1'>
          <h3 className='text-center'>Team Profile Generator</h3>
       </div>
       
       {/* Next App #3 */}
       <div className='col bg-warning m-1 py-1'>
          <h3 className='text-center'>Team Profile Generator</h3>
       </div>

      </div>


    </div>
  );
}