// NewsItem Component to display individual news article
import image from '../assets/news.jpg';

export const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
      {/* Display image or fallback image */}
      <img src={src ? src : image} style={{height: "200px", width: "320px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        {/* Display article title and description */}
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Current Event in America"}</p>
        {/* Link to full article */}
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};