import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleDetails1() {

  // 1️⃣ Get the article ID from URL
  const { id } = useParams();

  // 2️⃣ State to store the selected article
  const [article, setArticle] = useState(null);

  // 3️⃣ Load article when component mounts
  useEffect(() => {

    // Get all articles from localStorage
    // IMPORTANT: key must match where you saved it ("articles")
    const storedArticles =
      JSON.parse(localStorage.getItem("articles")) || [];

    // Find the article that matches the ID
    const selectedArticle = storedArticles.find(
      (item) => item.id.toString() === id
    );

    // Save the found article in state
    setArticle(selectedArticle);

  }, [id]);

  // 4️⃣ If article not found, show message
  if (!article) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Article not found</h2>
        <Link to="/articles">Go back to articles</Link>
      </div>
    );
  }

  return (
    <section className="sec-art1">

      <article className="artdetails">

        {/* Back Button */}
        <div className="div-art">

          <Link to="/articles" className="div-art1">
            <img id="arrowimg" src="/back.png" alt="Back" />
          </Link>

          <div className="div-art2" id="feed">
            Back to Feed
          </div>

        </div>

        {/* Author Info */}
        <div className="div-art11">

          <div className="div-art12">
            {article.authorAbrev}
          </div>

          <div className="div-art22">
            {article.authorName}
            <p id="verified">
              Verified Author · {article.date}
            </p>
          </div>

        </div>

        {/* Title */}
        <div className="div-art23">
          {article.title}
        </div>

        {/* Full Article Content */}
        <div className="div-art24">
          <p className="div-art25">
            {article.write}
          </p>
        </div>

      </article>

    </section>
  );
}

export default ArticleDetails1;
