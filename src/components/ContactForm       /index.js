import React from 'react'
import './header.css'

function index() {
    return (
        <div class="my-container">  
        <h3>Contact</h3>  
        <form action="https://formspree.io/mknvjllw" method="POST">
          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your Full name..">
      
          <label  for="Email">Email</label>
          <input name="_replyto" type="text" id="lname" name="Email" placeholder="Your Email...">
          
          <label for="subject">Subject</label>
          <textarea name="message" id="subject" placeholder="Write something.." style="height:100px"></textarea>
          
          <button id="button" type="submit">Submit</button>
        </form>
      </div>
    )
}

export default index
       