import React from 'react';

export default function Contact() {
  return (
    <div className='bg-light border'>

      <form className='px-4 mt-3 vh-100'>
      
        <div class="form-group my-3">
          <label for="nameInput">Name:</label>
          <input type="text" class="form-control mt-1" id="nameInput" aria-describedby="emailHelp" placeholder="Enter your name here"></input>
        </div>
        
        <div class="form-group my-3">
          <label for="userEmail">Email address</label>
          <input type="email" class="form-control mt-1" id="userEmail" aria-describedby="emailHelp" placeholder="Enter your email here"></input>
        </div>
        
        <div class="form-group my-3">
          <label for="userMessage">Message:</label>
          <textarea type="textarea" class="form-control mt-1" id="userMessage" placeholder="Enter your message here"></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}