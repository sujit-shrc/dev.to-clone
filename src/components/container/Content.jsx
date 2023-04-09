import React, { useState, useEffect } from 'react'
import ArticleComponent from "./ArticleComponent";

const Content = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://dev.to/api/articles");
      const data = await res.json();
      setArticles(data);
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

      </header>

      <div className="articles">
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