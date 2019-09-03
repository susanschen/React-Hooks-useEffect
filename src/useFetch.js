import { useEffect, useState } from "react";

/*
useFetch isn't technically a generic function that works for all API 
since each API data structure is different.  The code breaks if the data
straucture doesn't match.
*/
export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    // Use x.text() if data is text format
    fetch(url)
      .then(x => x.json())
      .then(y => {
        // console.log(y);  // to view the data structure
        setState({ data: y.results[0], loading: false });
      });
  }, [url]);

  return state;
};


/*
 This is an example using async await.

const useFetch = (url)=> {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json();
      const [item] = data.results;
      setData(item);
      setLoading(false);
    }
    fetchData();
  },[url]);

  return {data,loading};
}

*/