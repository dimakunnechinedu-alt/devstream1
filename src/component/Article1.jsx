import React from 'react'
import { Link } from 'react-router-dom'

function Article1({id,date,title,paragraph,initial,fullname,img,img1}) {
  return (
    
    <section className='sec-wrapper'>
        <article className='art-box'>
            <div className='div-box1'>
                <div id='january'>
                    <div className='div-box2'><h4>Featured</h4></div>
                    <div className='div-box2' id='div-box2'>
                    <p>{date}</p>
                </div>
                </div>
                <Link to={`/articles/${id}`} className='div-box3'>
                    <h2 id='future'>{title}</h2><br />
                    <p id='art'>{paragraph}</p>
                </Link><br /><br />
                <div className='div-box33'>
                    <div className='div-box34'>
                        <div className='div-box344'><h2>{initial}</h2> </div>
                        <div className='div-box334'><h5>{fullname}</h5></div>
                    </div>
                    <div className='div-box35'>
                        <Link to={`/articles/${id}`} className='div-box355'>
                            <img  src={img} alt="" id='div-box355' />
                        </Link>
                        <Link to={`/articles/${id}`} className='div-box355'>
                            <img src={img1} alt="" id='div-box355'/>
                        </Link>
                    </div>
                </div>
                
                
            
             
                </div>
           
            
            

        </article>
    </section>
    
  )
}

export default Article1