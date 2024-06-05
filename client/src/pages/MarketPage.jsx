import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
const MarketPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://api.currentsapi.services/v1/search?keywords=blockchain&apiKey=0RulcY1oYlStSU7qcS8-A2Pas_Hg-f18zvwJ6n0IOD4s6nt0&limit=20');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Log the fetched data for debugging

      // Extract only relevant data from the news and set state
      const extractedNews = data.news.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.image, // Extract image URL
        published: article.published  // Adding the published date for dynamic content check
      }));

      setNews(extractedNews);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={styles.page}>
    <Navbar />
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
                <p style={styles.published}>Published: {new Date(article.published).toLocaleString()}</p>
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
    color: '#333', // Set the text color
  },
  container: {
    padding: '20px',
  },
  heading: {
    color: '#007bff', // Set the heading color to blue
    fontSize: '24px',
    marginBottom: '20px',},
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
    color: 'white',
  },
  published: {
    fontSize: '14px',
    marginBottom: '10px',
    color: 'grey',
  },
  link: {
    color: '#28a745',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default MarketPage;
