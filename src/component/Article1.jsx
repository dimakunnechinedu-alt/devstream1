import React from "react";
import { Link } from "react-router-dom";

function Article1({
  id,
  date,
  title,
  write,
  authorName,     // Must match what you stored in localStorage
  authorAbrev,
  onDelete,
  img,
  img1
}) {

  // Function to handle delete button click
  function handleDeleteClick(e) {

    // Prevent navigation (important because button is inside clickable area)
    e.preventDefault();

    // Ask user to confirm before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete this article?");

    // If user clicks "OK"
    if (confirmDelete) {
      onDelete(id); // Call delete function passed from parent
    }
  }

  return (
    <section className="sec-wrapper">
      <article className="art-box">

        <div className="div-box1">

          {/* FEATURED & DATE SECTION */}
            <div id="java">
            <div id="javas">
                <div className="javas1">
                    <h4 id="feat">Featured</h4>
                </div>
                <div className="javas1" id="javafeat">
                    <p id="date">mon Feb 9,2026</p>
                </div>
                </div>
            </div>
          


          {/* TITLE & PREVIEW TEXT */}
          <Link to={`/articles/${id}`} className="div-box3">

            {/* Article Title */}
            <h2 id="future">{title}</h2>

            <br />

            {/* Short preview of article text */}
            <p id="art">
              {write?.slice(0, 110)}...
            </p>

          </Link>

          <br /><br />


          {/* AUTHOR & ACTION SECTION */}
          <div className="div-box33">

            {/* Author Info */}
            <div className="div-box34">

              {/* Author Abbreviation */}
              <div className="div-box344">
                <h2 id="abrev">{authorAbrev}</h2>
              </div>

              {/* Author Name */}
              <div className="div-box334">
                <h5 id="nameauthor">{authorName}</h5>
              </div>

            </div>


            {/* ACTION BUTTONS (Delete & View) */}
            <div className="div-box35">

              {/* DELETE BUTTON */}
              {/* Using button instead of Link to avoid navigation */}
              <button
                className="div-box355"
                onClick={handleDeleteClick}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <img className="image1"   src={img} alt="Delete Article" />
              </button>

              {/* VIEW BUTTON */}
              <Link
                to={`/articles/${id}`}
                className="div-box355"
              >
                <img className="image1" src={img1} alt="View Article" />
              </Link>

            </div>

          </div>

        </div>

      </article>
    </section>
  );
}

export default Article1;
