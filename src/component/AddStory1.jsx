import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStory1() {

  // Hook for redirecting user after publishing
  const navigate = useNavigate();

  // State to store form inputs
  const [formData, setFormData] = useState({
    title: "",
    narrative: "",
    authorname: "",
    authorabrev: ""
  });

  // State to show success message
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload

    // Simple validation (prevent empty fields)
    if (!formData.title || !formData.narrative || !formData.authorname) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create a new post object
    const newPost = {
      id: Date.now(), // Unique ID using timestamp
      date: new Date().toDateString(), // Current date
      title: formData.title,
      write: formData.narrative,
      authorName: formData.authorname,
      authorAbrev: formData.authorabrev
    };

    // Get existing posts from localStorage
    // If nothing exists, use empty array
    const existingPosts = JSON.parse(localStorage.getItem("articles")) || [];

    // Add new post to the beginning of the array
    const updatedPosts = [newPost, ...existingPosts];

    // Save updated array back to localStorage
    localStorage.setItem("articles", JSON.stringify(updatedPosts));

    // Show success message
    setSuccessMessage("Story published successfully!");

    // Clear form fields after submission
    setFormData({
      title: "",
      narrative: "",
      authorname: "",
      authorabrev: ""
    });

    // Redirect after 1.5 seconds
    setTimeout(() => {
      navigate("/articles");
    }, 1500);
  }

  return (
    <section className="sec-story">
      {/* Form starts here */}
      <form onSubmit={handleSubmit} className="art-story">

        <div className="div-story">

          <div className="div-story1">
            <div className="div-story2">
              <h1 id="publishh">Publish a Story</h1>
            </div>
            <div className="div-story2">
              <p id="mind">What's on your mind today?</p>
            </div>
          </div>

          {/* HEADLINE INPUT */}
          <div className="div-story3">
            <h4 id="headline">HEADLINES</h4>
          </div>

          <input
            type="text"
            id="title"
            placeholder="E.g Software Development"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          {/* NARRATIVE INPUT */}
          <div className="div-story4">
            <h4 id="narrate">THE NARRATIVE</h4>
          </div>

          <textarea
            id="narrative"
            placeholder="Once upon a time..."
            cols="30"
            rows="10"
            value={formData.narrative}
            onChange={(e) =>
              setFormData({ ...formData, narrative: e.target.value })
            }
          ></textarea>

          {/* AUTHOR NAME INPUT */}
          <div className="div-story3">
            <h4 id="authorname1">AUTHOR NAME</h4>
          </div>

          <input
            type="text"
            id="authorname"
            placeholder="E.g Peter Jones"
            value={formData.authorname}
            onChange={(e) =>
              setFormData({ ...formData, authorname: e.target.value })
            }
          />

          {/* AUTHOR ABBREVIATION INPUT */}
          <div className="div-story3">
            <h4 id="abbreviation">AUTHOR ABBREVIATION</h4>
          </div>

          <input
            type="text"
            id="authorabrev"
            placeholder="Name Abbreviation e.g P"
            value={formData.authorabrev}
            onChange={(e) =>
              setFormData({ ...formData, authorabrev: e.target.value })
            }
          />

          {/* SUCCESS MESSAGE DISPLAY */}
          {successMessage && (
            <p style={{ color: "green", marginTop: "10px" }}>
              {successMessage}
            </p>
          )}

          {/* BUTTONS */}
          <div className="div-storybox">

            {/* Publish Button */}
            <button type="submit" className="div-storybox1">
              Publish Now
            </button>

            {/* Save Draft Button (not submitting form) */}
            <button
              type="button"
              className="div-storybox1"
              onClick={() => alert("Draft feature coming soon!")}
            >
              Save Draft
            </button>

          </div>

        </div>
      </form>
    </section>
  );
}

export default AddStory1;
