import React from 'react'
import { Link } from 'react-router-dom'

function ArticleDetails1() {
  return (
    <section className='sec-art1'>
        <article className='artdetails'>
            <div className='div-art'>
                <Link className='div-art1'>
                    <img id='arrowimg' src="/back.png" alt="" />
                </Link>
                <div className='div-art2' id='feed'>Back to Feed</div>
            </div>
            <div className='div-art11'>
                <div className='div-art12'><h1>P</h1></div>
                <div className='div-art22'>
                    <h4 id='peter'>Peter Jones</h4>
                    <p id='verified'>Verified Author • Jan 27, 2026</p>
                </div>
            </div>
            <div className='div-art23'>
                <h1 id='design'>The Future of Web Design in 2025</h1>
            </div>
            <div className='div-art24'>
                <div className='div-art25'>
                    <p id='lorem11'>
                      Artificial Intelligence is no longer a buzzword; it's a foundational tool for creative interfaces. As we move into 2025, the focus shifts toward spatial computing and motion-driven narratives. We expect to see more generative UI that adapts in real-time to user intent.
                    </p><br /><br />

                    <div className='div-art26'>
                        <p id='lorem12'>
                            "The purpose of writing is to make thoughts visible. When we write, we create a legacy that outlives our presence."
                        </p>
                    </div>
                </div>
            </div>
                

        </article>
    </section>
  )
}

export default ArticleDetails1