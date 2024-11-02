import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string, options: object) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      if (err instanceof Error) {
        setError(err?.message);
      }
    } finally {
      setData(json);
      setLoading(false);
    }

    return { response, json };
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
