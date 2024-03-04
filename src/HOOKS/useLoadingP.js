// useLoading.js
import { useState, useEffect } from 'react';

const useLoading = (initialLoading = true, delay = 2000) => {
  const [loading, setLoading] = useState(initialLoading);

  useEffect(() => {
    let timeout;
    
    if (loading) {
      timeout = setTimeout(() => {
        setLoading(false);
      }, delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [loading, delay]);

  return { loading, setLoading };
};

export default useLoading;
