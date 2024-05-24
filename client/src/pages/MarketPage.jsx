import React, { useState, useEffect } from 'react';
import MarketNavbar from './MarketNavbar';

const MarketPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=blockchain&apiKey=126c6b3b156d4cf18dc0bac3db3f29a1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Extract only relevant data from the articles and set state
      const extractedNews = data.articles.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.urlToImage // Extract image URL
      }));
      setNews(extractedNews);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={styles.page}>
      <MarketNavbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Blockchain News</h1>
        <ul style={styles.list}>
          {news.map((article, index) => (
            <li key={index} style={styles.item}>
              <div style={styles.imageContainer}>
                {article.image && <img src={article.image} alt={article.title} style={styles.image} />}
              </div>
              <div>
                <h3 style={styles.title}>{article.title}</h3>
                <p style={styles.description}>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.link}>Read more</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  page: {
    // Set the background color of the page
    color: '#333', // Set the text color
  },
  container: {
    padding: '20px',
  },
  heading: {
    color: '#007bff', // Set the heading color to blue
    fontSize: '24px',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  item: {
    display: 'flex',
    marginBottom: '20px',
  },
  imageContainer: {
    marginRight: '20px',
  },
  image: {
    width: '200px',
    height: '150px',
  },
  title: {
    color: '#007bff',
    fontSize: '20px',
    marginBottom: '5px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
    color:'white',
  },
  link: {
    color: '#28a745',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default MarketPage;
