import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [author, setAuthor] = useState("OL26320A");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const { data } = await axios.get(
        `http://openlibrary.org/search.json?author=${author}`
      );
      setData(data);
      console.log(data, "data");
      if (data) {
        setLoading(false);
      }
    }
    fetchData();
  }, [author]);
  return (
    <APIContext.Provider
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

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
