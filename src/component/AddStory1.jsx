import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function AddStory1() {
     const navigate = useNavigate()

     const [formData,setFormData] = useState({
          title:"",
          narrative:"",
          authorname:"",
          authorabrev:""
     })

     //state to show success message
     const[successMessage,setSuccessMessage] = useState("")

     // handle form submit
     function handleSubmit(e){
          e.preventDefault()

          const newPost = {
               id: Date.now(),
               date:new Date().toDateString(),
               title:formData.title,
               write: formData.narrative,
               authorName:formData.authorname,
               authorAbrev:formData.authorabrev
          }

          // get the " articles" data from localStorage (it returns a string or null)
          const existingPosts = JSON.parse(localStorage.getItem("articles")) || []
          //convert the string to a javascript array using JSON.parse()
          //if nothing exists on localstorage yet (null),use an empty array instead

          //create a new array where the new post is placed at the beginning
          const updatedPosts = [newPost,...existingPosts] 
          //spread operator(...) copies all existing posts after the new post

          // save the updated array back into localstorage
          localStorage.setItem("articles",JSON.stringify(updatedPosts))
          //convert the array back to a string usning JSON.stringify()
          // localStorage only stores data as strings

          // show success message
          setSuccessMessage(" Story Published Successful")

          // wait 1.5 seconds before redirect
          setTimeout(() =>{
               navigate('/articles')
          },1500)
     }
  return (
       <section className='sec-story'>
        <form onSubmit={handleSubmit} className='art-story'>
           <div className='div-story'>
            <div className='div-story1'>
                <div className='div-story2' id='div-story2'><h1 id='publishh'>Publish a Story</h1></div>
                 <div className='div-story2'><p id='mind'>What's on your mind today?</p></div>
            </div>
            <div className='div-story3'><h4>HEADLINES</h4></div>
            <input
             type="text"
             id='tittle'
             placeholder='E.g Software Development' 
             value={formData.title}
             onChange={(e) =>
             setFormData({...formData,title:e.target.value})
             }
             />
            <div className='div-story4'><h4>THE NARRATIVE</h4></div>
            <textarea name=""
             id="narrative" 
             placeholder='Once upon a Time'
             cols="30"
             rows="10"
             value={formData.narrative}
             onChange={(e) =>
             setFormData({...formData,narrative:e.target.value})
             }

             ></textarea>
             <div className='div-story3'><h4>AUTHOR NAME</h4></div>
            <input
             type="Name" 
             id='authorname'
             placeholder='E.g Peter Jones' 
             value={formData.authorname}
             onChange={(e) =>
             setFormData({...formData,authorname:e.target.value})
             }
             />
            <div className='div-story3'><h4 id='authorabrev'>AUTHOR ABBREVIATION</h4></div>
            <input
             type="text"
             id='authorabrev'
              placeholder='Name Abbreviation e.g P' 
              value={formData.authorabrev}
             onChange={(e) =>
             setFormData({...formData,authorabrev:e.target.value})
             }
              />
            <div className='div-storybox'>
                <button type='submit' className ='div-storybox1'><a id='publish' href="">Publish Now</a></button>
                <button type='submit' className='div-storybox1' id='div-storybox1'><a id='save' href="">Save Draft</a></button> 
                
           </div> 
            
             </div>
             
             
           
            
            
        </form>
        

        
       </section>
  )
}

export default AddStory1