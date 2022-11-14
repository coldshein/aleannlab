import React, { useState } from 'react';
import JobItem from '../components/JobItem';
import Skeleton from '../components/Skeleton';
import PaginatedItems from '../components/PaginatedItems';

const JobBoard = ({ items, isLoading, daysAgo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  return (
    <div className="container">
      {
        isLoading ? (
          [...Array(5)].map((s, index) => <Skeleton key={index} />)
        ) : (
          currentItem.map((item, index) =>
          (
            <JobItem
              id={item.id}
              createdAt={item.createdAt}
              title={item.title}
              name={item.name}
              key={item.id}
              img={item.pictures[1]}
              daysAgo={daysAgo}
            />
          ))

        )
      }

      <PaginatedItems
        itemsPerPage={itemsPerPage}
        totalItems={items}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>

  );

}



export default JobBoard;
