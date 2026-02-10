import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section id='sec1'>
      <article id='art1'>
        <div className='div1'>
          <div id='divsub'>
            <p id='live'>Live Editor v2.0</p>
          </div>
          <h1 id='word'>Words that <span id='matters'>Matters.</span></h1>
          <p id='modern'>
            The modern standard of digital publishing.Connect with a global audience through beautiful,focused typography
          </p><br />

          <div id='divsub1'>

          
           <div id='divsub2'>
            
            <h4 id='write' >Start Reading </h4><br /><br />
            <img id='image1' src="/right-arrow.png" alt="" />
            
          </div>
          
          <div id='divsub22'>
            <Link to="/add-story">
            <h4 id='writter'>Become a writter</h4>
            </Link>
          </div>
          </div>
        </div>
        <div className='div11'>
          <div className='div1sub'id='div1sub2'>
            <div className='divbox1'><img id='image2' src="star.png" alt="" /></div>
            <div className='divbox11'>
              <p id='content'>AI Assisted Content</p>
            </div>
          </div>
          <div className='div1sub' id='div1sub'>
              <div className='divbox1'><img id='image2' src="layout.png" alt="" /></div>
            <div className='divbox11'>
              <p id='content'>Adaptive Layouts</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default HeroSection