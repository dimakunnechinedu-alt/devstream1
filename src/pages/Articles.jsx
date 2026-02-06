import React from 'react'
import Article1 from '../component/Article1.jsx'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'


function Articles() {
  return (
  
    <>
    <h2 id='latest'>Latest Articles</h2>
    <p id='story'>
      Curated stories from the DevStream community.
    </p>
      <Article1

        id='1'
        date="27-1-2026"
        title="The Future of Web Design in 2025"
        paragraph="Artificial Intelligence is no longer a buzzword; it's a foundational tool for creative interfaces. As we move into 2025, the focus shifts toward spatial computing and motion-driven narratives. We expect to see more generative UI that adapts in real..."
        initial="P"
        fullname="Peter Jones"
        img={image1}
        img1={image2}
        
       />
      <Article1

        id='2'
        date="28-1-2026"
        title="Minimalism as a Lifestyle"
        paragraph="Choosing less isn't just about aesthetics; it's about clarity. In this article, we explore how reducing noise leads to better cognitive performance and emotional well-being. By stripping away the non-essential, we create space for the things that truly resonate..."
        initial="J"
        fullname="Jack Martins"
         img={image1}
        img1={image2}
      />
      <Article1

        id='3'
        date="29-1-2026"
        title="Mastering Tailwind CSS Transitions"
        paragraph="The secret to high-end UI isn't the color palette, it's the motion. Learn how to use utility classes to create fluid experiences that feel responsive and alive. Transitions are the glue that holds a modern user experience together..."
        initial="C"
        fullname="Chris Wood"
         img={image1}
        img1={image2}
      />
      <Article1

        id='4'
        date="30-1-2026"
        title="The Rise of Distributed Systems"
        paragraph="Scaling a modern application requires more than just more servers. It requires a fundamental shift in how we think about data consistency, network latency, and service discovery in a post-monolith world..."
        initial="A"
        fullname="Adam Bean"
         img={image1}
        img1={image2}
      />
    </>
    
  )
}

export default Articles