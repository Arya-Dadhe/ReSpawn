import React from 'react';
import './style.css';
// import ReactDOM from 'react-dom';
import Undraw from "./assets/WhatsApp Image 2023-02-02 at 2.31.19 AM.jpeg";
import LoginButton from './LoginButton';
// import whatsapp from 'https://www.alexishospital.com/assets/images/whats-app-logo.svg';

function App() {
  return (
    <div className="App">
     
     <div className="nav">
          <ul>
            <li className="logo"><span style={{color: '#01edc9'}}>Re</span><span style={{color: '#00b3fe'}}>Spawn</span></li>
            <li className="nav-element">About</li>
            <li className="nav-element">Blogs</li>
            <li className="nav-element">Contacts</li>
            <div className="buttons">
              <li className><input type="button" className="btn-nav" defaultValue="Make an appointment" /></li>
              <li><LoginButton/></li>
            </div>
          </ul>
        </div>
        <div className="main">
          <div className="content">
            <div className="para">
              <h1>Hello</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="image">
              <img src={Undraw}  />
              
            </div>
          </div>
          <div className="FAQ">
            {/* <div className="faqlink">
              <img src={whatsapp} alt="whatsapp-appointment" />
            </div>  */}
            <div className="AMA">
              <h5>Ask Me Anything</h5>
            </div>     
          </div>
        </div>
        {/* <button onclick="topFunction()" id="myBtn" title="Go to top"><span>^</span></button> */}
        {/* <div className="grid">
          <div className="grid-element"><img src="./WhatsApp Image 2023-02-02 at 2.31.19 AM.jpeg" alt="Patient Helpdesk" /></div>
          <div className="grid-element"><a href>Doctor's Dashboard</a></div>
          <div className="grid-element"><img src="./WhatsApp Image 2023-02-02 at 2.55.31 AM.jpeg" alt="Organization" /></div>
          <div className="grid-element"><a href>Patient Helpdesk</a></div>
          <div className="grid-element"><img src="./WhatsApp Image 2023-02-02 at 2.37.39 AM.jpeg" alt="Doctor" /></div>
          <div className="grid-element"><a href>Organization</a></div> 
        </div> */}
        <div className='footer' >
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis iusto reiciendis deleniti nam. Officiis, aperiam deserunt atque quaerat inventore quo ullam fugit quos harum tenetur molestias a? Saepe, ipsam cumque eligendi earum, amet corporis eveniet odit nostrum deserunt accusantium ipsa numquam nam itaque aliquam omnis explicabo maxime delectus vero, beatae libero quia nesciunt ullam sit officia. Dignissimos quidem laboriosam distinctio necessitatibus neque perferendis laborum recusandae, dolore et illum repudiandae error veniam totam. Architecto nesciunt, suscipit labore consequuntur totam, deleniti commodi odio blanditiis sint dolore nulla doloribus accusamus quidem voluptatum. Sed magnam explicabo dolorum maxime totam iure facilis quia libero voluptates?</p>
        </div>

      
    </div>
  );
}

export default App;
