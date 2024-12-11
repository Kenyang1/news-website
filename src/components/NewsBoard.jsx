// NewsBoard Component
export const NewsBoard = ({ category }) => {
  // State to store fetched articles
  const [articles, setArticles] = useState([]);

  // Fetch news articles when category changes
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch news");
        return response.json();
      })
      .then((data) => setArticles(data.articles))  // Set fetched articles to state
      .catch((error) => console.error("Error fetching news:", error));  // Log errors
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-warning">News</span>
      </h2>
      {/* Show a message if no articles are available */}
      {articles.length === 0 && <p className="text-center">No articles available.</p>}
      {/* Map through articles and display NewsItem components */}
      {articles.map((news, index) => (
        <NewsItem
          key={news.url || index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

