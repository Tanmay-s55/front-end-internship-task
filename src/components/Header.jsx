import React from 'react'

const Header = () => {
  return (
    <div className='head-container'>
        <div className='long-container lc-1' style={{background:"#002550"}}>
            <div className='text-div'>
                <h2>
                Making Your <a>Real Estate</a> Purchase Journey Faster And Transparent
                </h2>
            </div>
            <img className='house-img' src='./house.png' />
        </div>
    </div>
  );
}

export default Header;