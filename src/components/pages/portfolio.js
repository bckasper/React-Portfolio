import React from 'react';
import WeatherApp from '../../assets/weather-app.png'

export default function Portfolio() {
  return (
    <div className='container-fluid m-vh-100 pt-2 justify-content-center d-flex'>
      
      {/* highlighted portfolio item */}
      <div className='row p-2 m-2 justify-content-center border bg-light weather-photo'>
        <h1 className='text-center'>Weather App</h1>
        <p className='text-center'>Simple weather app to plan your time outside</p>
        <img src={WeatherApp} className='weather-photo mb-2'></img>
        <div className="text-center">
              <a className="btn btn-outline-primary mx-1" href="https://bckasper.github.io/Fancy-Weather-App/" target="_blank">Go to App</a>
              
              <a  className="btn btn-outline-dark mx-1" href= 'https://github.com/bckasper/Fancy-Weather-App' target="_blank">Github Repo</a>
          </div>
      </div>

      {/* other portfolio items */}
      <div className='col align-items-center bg-secondary m-2 p-2'>
       <div className='col bg-warning m-1'>hello</div>
       <div className='col bg-warning m-1'>hello</div>
       <div className='col bg-warning m-1'>hello</div>
      </div>


    </div>
  );
}