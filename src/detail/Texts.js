import React from 'react'

function Texts() {
  return (
    <div className='texts'>
        <h5 data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Orci faucibus quam enim </h5>
        <h5 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">Elit massa porta purus eu, tortor turpis</h5>
        <h5 data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Placerat mattis eget vel curabitur sed.</h5>
        <h5 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">Elit massa porta purus eu</h5>
        <h5 data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Consectr adipiscing elit. Odio aliquet</h5>

        <div className="btn" >
            <img src="images/arrowBig.png" alt="" />
        </div>
        
    </div>
  )
}

export default Texts