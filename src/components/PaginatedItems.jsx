import React, { useState } from 'react';


const PaginatedItems = ({ itemsPerPage, totalItems, paginate, currentPage, setCurrentPage }) => {
    const [activePage, setActivePage] = useState(1);
    const handlePage = (index) => {
        setActivePage(index);
    }

    const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(totalItems.length / itemsPerPage); i++) {
        pageNumbers.push(i);
   }

   const nextPage = () => {
    if(currentPage !== pageNumbers.length){
        setCurrentPage( prev => prev + 1);
        handlePage(++currentPage);
        
    }
   }
   const prevPage = () => {
    if(currentPage !== 1){
        setCurrentPage(prev => prev - 1);
        handlePage(--currentPage);
    }
   }
  
    return (
        <div className='pagination'>
            <button className="prev-page" onClick={() => {
                prevPage()
            }}>
                <img src="/images/Arrow left.svg" alt="" />
            </button>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a  className={`page-link ${activePage === number ? 'active-page' : null}`} onClick={() => {
                                paginate(number)
                                handlePage(number)
                            }}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <button className="next-page" onClick={() => {
                nextPage()
            }}>
                <img src="/images/Arrow right.svg" alt="" />
            </button>
        </div>
    );
}
// const dynamicPicture = ${pictures[0]}?random=${Math.floor(Math.random() * (100 - 1 + 1)) + 1};

export default PaginatedItems;