import React from 'react'
import PropTypes from 'prop-types'


function Header({text = 'Feedback UI' , bgColor = 'rgba( 0 , 0 , 0 , 0.4)' , textColor = '#fef45c'}) {
    const HeaderStyle = {
        backgroundColor: bgColor,
        color: textColor,
    };
  return (
   <header style={HeaderStyle}>
    <div className="container">
        <h2>{text}</h2>
    </div>
     
   </header>
  )
}


Header.propTypes = {
        text: PropTypes.string,
        bgColor: PropTypes.string,
        textColor: PropTypes.string
    };
    
export default Header