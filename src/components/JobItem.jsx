import React from 'react';
import { Link } from 'react-router-dom';

const JobItem = ( {title, name, img, id, createdAt }) => {

    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        isFavorite ? alert('Removed from favorite') : alert('Saved as favorite!')
    }

    const date = createdAt;
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date))/86400000;
    let daysAgo = Math.round(days);

    return (
        <div className="job-item">
            <div className="job-item__main">
                <div className="job-image__wrapper">
                    <img src={img} alt="" />
                </div>
                <div className="job-info">
                    <Link to={'/job/' + id} className="job-title">{title}</Link>
                    <div className="job-name">{name}</div>
                    <div className="job-location">
                        <img src="images/location.svg" alt="" />
                        <span>Vienna, Austria</span>
                    </div>
                </div>
            </div>
            <div className="job-rating">
                <img src="/images/Rating.svg" alt="" />
            </div>
            <div className="job-post">
                <button className='favorite' onClick={handleFavorite}>
                   {
                    <img src={isFavorite ? '/images/check-mark.svg' : '/images/bookmark.svg'}/>
                    }
                </button>
                <span className="post-info">Posted {daysAgo} days ago</span>
            </div>
        </div>
    );
}

export default JobItem;