import React, { useState, useEffect } from 'react'
import ArticleComponent from "./ArticleComponent";

const Content = () => {

  const [articles, setArticles] = useState([]);
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://dev.to/api/articles");
      const data = await res.json();
      setArticles(data);
      setCoverImage(data[1]['cover_image'])
    }, 2000);
  },[]);


  return (
    <div className="mainContent">
      <header>
        <ul>
          <li>
            <a href="#" target="_self">
              Relevent
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Latest
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Top
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#" target="_self">
              Week
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Month
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Year
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Infinity
            </a>
          </li>
        </ul>
      </header>

      <div className="articles">
        {coverImage && (
          <a href={coverImage}>
            <img src={coverImage} alt="not found" />
          </a>
        )}
        {articles &&
          articles.map((article, key) => {
            return (
              <ArticleComponent
                key={key}
                articles={article}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Content