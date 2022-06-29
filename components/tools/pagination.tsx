import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



export default function PaginatedItems({data, setCurrentData,itemsPerPage}:any) {
  // We start with an empty list of items.
  // const [currentItems, setCurrentItems] = useState(Array)
  console.log("this is current items:");
  console.log(data);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentData(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    
  }, [itemOffset, itemsPerPage,data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

    // let formula = data.length 
  };

  return (
    <nav aria-label="Page navigation"  className="d-flex justify-content-center py-3">
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        breakClassName={'page-item'}
        breakLinkClassName={'page-link link-secondary'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link link-secondary'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link link-secondary'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link link-secondary'}
        activeClassName={'active'}
        // renderOnZeroPageCount={null}
      />
    </nav>
  );
}


