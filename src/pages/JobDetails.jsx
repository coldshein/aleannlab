import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Benefits from '../components/Benefits';
import DetailsImage from '../components/DetailsImage';
import EmploymentType from '../components/EmploymentType';
import { Link } from 'react-router-dom';
import Map from '../components/Map';

const JobDetails = () => {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const params = useParams();
    const current = params.id;
    React.useEffect(() => {
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
            .then(res => res.json())
            .then((json) => {
                setDetails(json.find((i) => i.id == current));
                setIsLoading(false);
            })
    }, [])

    const date = details.createdAt;
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date)) / 86400000;
    let daysAgo = Math.round(days);


    const { address, description, email, name, phone, salary } = details;
    return (
        <div className="container job-details__container">
            <div className="job-details__wrapper">
                <div className="job-details">
                    <div className="job-details__header">
                        <h2 className="job-details__title">Job Details</h2>
                        <div className="job-details__header-buttons">
                            <button className="job-details__header-btn">
                                <img src="/images/bookmark.svg" alt="" />
                                <span>Save to my list</span>
                            </button>
                            <button className="job-details__header-btn">
                                <img src="/images/share.svg" alt="" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="header-functions">
                        <button className="job-details__header-btn">
                            <img src="/images/Star.png" alt="" />
                            <span>Save to my list</span>
                        </button>
                        <button className="job-details__header-btn">
                            <img src="/images/share.svg" alt="" />
                            <span>Share</span>
                        </button>
                    </div>
                    <button className='apply'>Apply now</button>
                    <div className="job-details__top">
                        <h1 className="job-details__top-title">{details.title}</h1>
                        <div className="job-details__salary">
                            <span>€ {salary}</span>
                            Brutto, per year
                        </div>
                    </div>
                    <div className="post-date">Posted {daysAgo} days ago</div>
                    <p className="job-description">
                        {
                            description
                        }
                    </p>
                    <div className="button-wrapper">
                        <button className="apply">Apply now</button>
                    </div>
                    <h2 className="job-details__title">Additional info</h2>
                    <hr />
                    <div className="job-detail__text">Employment type</div>
                    <div className="job-detail__row">
                        {
                            details.employment_type?.map((text, index) => (
                                <EmploymentType key={index} employment={text} />
                            ))
                        }
                    </div>
                    <div className="job-detail__text">Benefits</div>
                    <div className="job-detail__row">
                        {
                            details.benefits?.map((text, index) => (
                                <Benefits key={index} benefits={text} />
                            ))
                        }
                    </div>
                    <h2 className="job-details__title">Attached images</h2>
                    <hr />
                    <div className="job-detail__row">
                        {
                            details.pictures?.map((img, index) => (
                                <DetailsImage img={img} key={index} />
                            ))
                        }
                    </div>
                    <h2 className="job-details__title contacts-title">Contacts</h2>
                    <hr className='contacts-hr' />
                </div>
                <div className="job-contacts">
                    <div className="job-contacts__inner">
                        <div className="contact-info">
                            <div className="job-contacts__bg"></div>
                            <div className="job-contacts__wrapper">
                                <div className="job-contacts__name">
                                    {name}. <br />
                                    
                                </div>
                                <div className="job-contacts__location">
                                    <img src="/images/location.svg" alt="" />
                                    {address}
                                </div>
                                <div className="job-contacts__contact">
                                    {phone}, <br />
                                    {email}
                                </div>
                            </div>
                        </div>
                        {
                            isLoading ? null : <Map lat={details.location.lat} long={details.location.long} />
                        }
                    </div>
                </div>
            </div>
            <Link to="/" className="goback">
                <img src="/images/Arrow.svg" alt="" />
                RETURN TO JOB BOARD
            </Link>
        </div>

    );
}

export default JobDetails;