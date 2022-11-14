import React from 'react';


const Map = ({ lat, long }) => {

    React.useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=8461e2aa188a49c985eaa7ee118cb154`)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, [])
    console.log(lat, long)

    return (
        <div className="map">
            <img width="600" height="400"
                src={`https://maps.geoapify.com/v1/staticmap?style=dark-matter-purple-roads&width=600&height=400&center=lonlat:${lat},${long}&zoom=6&apiKey=8461e2aa188a49c985eaa7ee118cb154`}
                alt="8531 East Marginal Way South, Tukwila, WA 98108, United States of America" />
        </div>
    )

}
export default Map;