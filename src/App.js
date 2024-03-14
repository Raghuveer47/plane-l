import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  return (
   <>
   {/* <div className='Header'>
    <nav>
      <ul>
      <li>
        <img src='https://static.vecteezy.com/system/resources/previews/000/620/372/non_2x/aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration.jpg'/>
      </li>
      <li>
        <a href=''>About</a>

      </li>
      <li>
        <a href=''>Home</a>
      </li>
      <li>
        <a href=''>About</a>
      </li>
      <li>
        <a href=''>Service</a>
      </li>
      <li>
        <a href=''>Flights</a>

      </li>
      <li>
        <a href=''>Discount</a>
      </li>
      </ul>
    </nav>
    <button>Book Ticket</button>
   </div>

   <div className='main'>
  <div className='left'>
<h1>Flight withus</h1>
<p>Book flight tickets with Qatar Airways, proud winner of Skytrax's<br></br> Airline of the Year 2022, to more than 150 destinations. Special fares, earn Avios & more.</p>
<button className='b1'>Book Now</button>
  </div>
  <div className='right'>
<img src='https://img.freepik.com/free-vector/travel-time-typography-design-with-airplane_1308-88584.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais'/>
  </div>

   </div>
   
   <div className='footer'>
    <p>Privacy Policy|Terms of Service|Do 
      </p>
<input placeholder='email'/>
<button className='b1'>Subscribe</button>
   </div> */
   
   <>
   <Navbar/>
   <Main/>
   <Footer/>

   </>
   }
   
   </>
  )
}

export default App
