import React from 'react';
import WeatherApp from '../../assets/weather-app.png'
import TeamGenerator from '../../assets/team-generator.png'
import JSCode from '../../assets/Main_page.png'
import Robot from '../../assets/rock-paper-scissors.png'
import Planner from '../../assets/plannr.png'
import PW from '../../assets/Pwd_Generator_Complete.png'

export default function Portfolio() {
  return (
    <div className='container-fluid justify-content-center'>
      
      
      <div className='row row-cols-2 justify-content-center border bg-light weather-photo py-2 align-items-start'>
        
        {/* Weather Application */}
        <div className='col-lg-4 col-md-2 text-center m-3 border app-bg'>
            <h3 className='text-center'>Weather App</h3>
            <p className='text-center'>Simple weather app to plan your time outside.</p>
        <img src={WeatherApp} className='photos'></img>
            <a className="btn btn-outline-primary mx-1 mb-3" href="https://bckasper.github.io/Fancy-Weather-App/" target="_blank">Go to App</a>
            <a  className="btn btn-outline-dark mx-1 mb-3" href= 'https://github.com/bckasper/Fancy-Weather-App' target="_blank">Github Repo</a>
        </div>

        {/* Team Profile Generator application */}
        <div className='col-lg-4 col-md-2 text-center m-3 border app-bg'>
            <h3 className='text-center'>Team Profile Generator</h3> 
            <p className='text-center'>An easy-to-use backend tool to generate a team profile webpage.</p>
        <img src={TeamGenerator} className="photos"></img>
            <a className="btn btn-outline-primary mx-1 mb-3" href="https://bckasper.github.io/Fancy-Weather-App/" target="_blank">Go to App</a>
            <a  className="btn btn-outline-dark mx-1 mb-3" href= 'https://github.com/bckasper/Fancy-Weather-App' target="_blank">Github Repo</a>
        </div>
       
        {/* Javascript Quiz application */}
        <div className='col-lg-4 col-md-2 text-center m-3 border app-bg'>
            <h3 className='text-center'>Javascript Quiz</h3>
            <p className='text-center'>A simple quiz to test your basic knowledge in the Javascript programming language.</p>
            <img src={JSCode} className='photos'></img>
            <a className="btn btn-outline-primary mx-1 mb-3" href="https://bckasper.github.io/JS-Code-Quiz/" target="_blank">Go to App</a>    
            <a  className="btn btn-outline-dark mx-1 mb-3" href= 'https://github.com/bckasper/JS-Code-Quiz' target="_blank">Github Repo</a>
        </div>
       
        {/* Robot application */}
        <div className='col-lg-4 col-md-2 text-center m-3 border app-bg h-100'>
            <h3 className='text-center'>Human vs. Robot</h3>
            <p>A game of rock, paper, scissors that will determine the fate of humanity as we know it.</p>
            <img src={Robot} className="photos"></img>
            <a className="btn btn-outline-primary mx-1 mb-3" href="https://bckasper.github.io/Rock-Paper-Scissors/" target="_blank">Go to App</a>
            <a  className="btn btn-outline-dark mx-1 mb-3" href= 'https://github.com/bckasper/Rock-Paper-Scissors' target="_blank">Github Repo</a>
        </div>

        {/* Password Generator application */}
        <div className='col-lg-4 col-md-2 text-center m-3 border app-bg'>
            <h3 className='text-center'>Password Generator</h3>
            <p>Don't trust other password generators? Use ours!</p>
            <img src={PW} className='photos'></img>
            <a className="btn btn-outline-primary mx-1 mb-3" href="https://bckasper.github.io/Rock-Paper-Scissors/" target="_blank">Go to App</a>  
            <a  className="btn btn-outline-dark mx-1 mb-3" href= 'https://github.com/bckasper/Rock-Paper-Scissors' target="_blank">Github Repo</a>
        </div> 

       {/* Note Taker application */}
        <div className='col-lg-4 col-md-2 text-center m-3 border app-bg'>
            <h3 className='text-center'>Note Taker</h3>
            <p>A simple application to help you take notes.</p>
            <img src={Planner} className='photos'></img>
            <a className="btn btn-outline-primary mx-1 mb-3" href="https://bckasper.github.io/Rock-Paper-Scissors/" target="_blank">Go to App</a>    
            <a  className="btn btn-outline-dark mx-1 mb-3" href= 'https://github.com/bckasper/Rock-Paper-Scissors' target="_blank">Github Repo</a>
        </div>


      </div>
    </div>
  );
}