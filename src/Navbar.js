import React from 'react'


const Navbar = () => {
  return (
    <div>
       <div className='Header'>
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
    </div>
  )
}

export default Navbar
