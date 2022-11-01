import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response))
        .then(() => setLoading(false))
        .catch(setError);
    }, 3000);
  }, [url]);

  return [data, error, loading];
}
