import React from 'react'

const Card = ({img, heading, desc, hasBtn, btn, viewMore, hasDate}) => {
  return (
    <div className='card'>
        <img src={img}/>
        <h3>{heading}</h3>
        <p>{desc}</p>
        {
          hasDate && <div className='date'><span class="material-symbols-outlined">
                    calendar_month
                    </span><p>9 June 2022</p></div>
        }
        {
            hasBtn && <button className='card-btn'>
            {btn}
            <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
            </button>
        }
        {
          viewMore && <a>View More</a>
        }
    </div>
  );
}

export default Card