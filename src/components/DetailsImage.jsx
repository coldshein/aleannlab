import React from 'react';

const DetailsImage = ({img}) => {
    return ( 
        <div className="details-img__wrapper">
            <img src={img} alt="" />
        </div>
     );
}
 
export default DetailsImage;