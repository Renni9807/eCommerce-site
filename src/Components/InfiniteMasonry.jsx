import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css"; // Assuming you're using react-masonry-css

const InfiniteMasonry = ({ fetchData, renderComponent }) => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreItems = useCallback(async () => {
    const newItems = await fetchData(page);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setHasMore(newItems.length > 0);
    setPage((prevPage) => prevPage + 1);
  }, [fetchData, page]);

  useEffect(() => {
    fetchMoreItems();
  }, [fetchMoreItems]);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreItems}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {items.map((item, index) => renderComponent(item, index))}
      </Masonry>
    </InfiniteScroll>
  );
};

export default InfiniteMasonry;
