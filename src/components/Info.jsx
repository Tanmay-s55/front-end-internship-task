import React from 'react'

const Info = () => {
  return (
    <div className='head-container'>
        <div className='long-container lc-2'>
            <div className='c-left'>
                <img src='./image2.png' />
            </div>
            <div className='c-right'>
                <h2>
                    Who We Are
                </h2>
                <p>
                The Indian real estate sector is resilient despite global headwinds. 
                Returns are impressive and the sector is expected to reach US$ 1 trillion in market 
                size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase 
                journey is very tedious and takes more than 2 years on average. Further, as the 
                ticket size of this investment is large, security and trust become quite critical. 
                Problems compound when you are currently away from your purchase destination. If you 
                are experiencing difficulties in the real estate purchase journey, we are here to 
                make it fast and transparent.
                </p>
                <button>
                    Contact Now
                    <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Info;