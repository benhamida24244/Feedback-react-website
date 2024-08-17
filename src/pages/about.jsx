import React from 'react'
import {Link} from 'react-router-dom'
function about() {
  return (
   <div className="card dfex flexColumn">
         <h2>This is About Page</h2>
         <p>
             This is a simple feedback app made with React. It allows users to leave feedback and view their past feedback.
             The data is stored in local storage.
             Feel free to add more features or fix any bugs you find.
             Thanks for using this app!
         </p>
         <button className='btn-primaary'>
            <Link to="/" className='item-link'>return Main Menu</Link>
            </button>
   </div>
  )
}

export default about