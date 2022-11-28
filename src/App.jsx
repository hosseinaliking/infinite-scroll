import React, { useEffect } from "react";

//* Infinit Scroll *//
import InfiniteScroll from "react-infinite-scroller";

//* Funcions *//
import fetchPeople from "./api/fetchPeople";
import { initialURL } from "./api/fetchPeople";

//* React Query *//
import { useInfiniteQuery } from "@tanstack/react-query";

const App = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(
      ["swapi people"],
      ({ pageParam = initialURL }) => fetchPeople(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      }
    );

  if (isLoading) return <p>Loading ....</p>;

  return (
    <div className="">
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div>Loading ...</div>}
      >
        {data.pages.map((item, index) =>
          item.results.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })
        )}
      </InfiniteScroll>
    </div>
  );
};

export default App;
