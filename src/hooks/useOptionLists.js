import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useOptionLists = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lists, setLists] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchLists() {
      // database related works
      const db = getDatabase();
      const listRef = ref(db, "videos");
      const listQuery = query(
        listRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(listQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setLists((prevList) => {
            return [...prevList, Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchLists();
  }, [page]);

  return {
    loading,
    error,
    lists,
    hasMore,
  };
};

export default useOptionLists;
