import React from 'react';

export default function Contact() {
  return (
    <div className='contact-bg'>

      <form className='px-4 pt-3 vh-100 was-validated'>
      
        <div className="form-group my-3">
          <label for="nameInput">Name:</label>
          <input type="text" class="form-control mt-1" id="nameInput" aria-describedby="emailHelp" placeholder="Enter your name here" required></input>
        </div>
        
        <div class="form-group my-3">
          <label for="userEmail">Email address</label>
          <input type="email" class="form-control mt-1" id="userEmail" aria-describedby="emailHelp" placeholder="Enter your email here" required></input>
        </div>
        
        <div class="form-group my-3">
          <label for="userMessage">Message:</label>
          <textarea type="textarea" className="form-control mt-1" id="userMessage" placeholder="Enter your message here" required></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}