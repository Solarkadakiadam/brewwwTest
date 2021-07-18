import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  // for more complex state you might set up useReducer for Redux-like state updates
  const [data, setData] = useState(null);
  const [author, setAuthor] = useState("OL26320A");
  const [loading, setLoading] = useState(true);

  // useEffect is a lifecycle method for function components, run once after mount
  useEffect(() => {
    // the callback to useEffect can't be async, but you can declare async within
    setLoading(true);
    async function fetchData() {
      // use the await keyword to grab the resolved promise value
      // remember: await can only be used within async functions!
      const { data } = await axios.get(
        `http://openlibrary.org/search.json?author=${author}`
      );
      // update local state with the retrieved data
      console.log(data, "data bu");
      setData(data);
      if (data) {
        setLoading(false);
      }
    }
    // fetchData will only run once after mount as the deps array is empty
    fetchData();
  }, [author]);
  return (
    <APIContext.Provider
      // Add required values to the value prop within an object (my preference)
      value={{
        data,
        setAuthor,
        loading,
        author,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
