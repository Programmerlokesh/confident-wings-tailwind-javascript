import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";
import useOptionLists from "../hooks/useOptionLists";
import Quiz from "./Quiz";

const Quizes = () => {
  const [page, setPage] = useState(1);
  const { loading, error, lists, hasMore } = useOptionLists(page);
  return (
    <div>
      {lists.length > 0 && (
        <InfiniteScroll
          dataLength={lists.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          className="grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-5 lg:px-40 sm:px-14 md:px-14 xsm:px-8 pb-20"
        >
          {lists.map((list) =>
            list.map((text, index) =>
              text.noq > 0 ? (
                <NavLink to={`/quizpage/${text.listID}`} key={index}>
                  <Quiz title={text.title} noq={text.noq} />
                </NavLink>
              ) : (
                <Quiz title={text.title} noq={text.noq} key={index} />
              )
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && lists.length === 0 && (
        <div className="text-red-600 text-2xl text-center">
          No data found!!!
        </div>
      )}
      {error && (
        <div className="text-red-600 text-2xl text-center">
          There was an error!!!
        </div>
      )}
      {loading && <div className="text-slate-800">Loading...</div>}
    </div>
  );
};

export default Quizes;
