import React, { useEffect, useState } from "react";
import Article1 from "../component/Article1.jsx";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";

function Articles() {

  // State to store all articles
  const [articles, setArticles] = useState([]);

  // useEffect runs once when component loads
  useEffect(() => {
    // Get stored articles from localStorage
    // If nothing exists, use empty array
    const storedArticles =
      JSON.parse(localStorage.getItem("articles")) || [];

    // Save them into state
    setArticles(storedArticles);
  }, []);

  // Optional: Log articles (outside JSX)
  console.log(articles);

  // Function to delete an article
  function handleDelete(id) {

    // Update state safely using previous state
    setArticles((prevArticles) => {

      // Remove article with matching ID
      const updatedArticles = prevArticles.filter(
        (article) => article.id !== id
      );

      // Update localStorage after deleting
      localStorage.setItem(
        "articles",
        JSON.stringify(updatedArticles)
      );

      // Return updated list to update state
      return updatedArticles;
    });
  }

  return (
    <>
      {/* Page Heading */}
      <h2 id="latest">Latest Articles</h2>

      <p id="story">
        Curated stories from the DevStream community.
      </p>

      {/* If no articles exist, show message */}
      {articles.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontStyle: "italic",
          }}
        >
          No articles found. Be the first to publish a story.
        </p>
      ) : (
        // If articles exist, map through them
        articles.map((article) => (
          <Article1
            key={article.id}       // Unique key for React
            {...article}           // Spread article properties
            onDelete={handleDelete} // Pass delete function
            img={image1}           // Extra image prop
            img1={image2}          // Extra image prop
          />
        ))
      )}
    </>
  );
}

export default Articles;
