import { useState, useEffect } from "react";

/**
 * Custom hook for managing loading state with automatic timeout
 * @param duration - Duration in milliseconds before loading completes
 * @returns Object with loading state and setLoading function
 */
export const useLoading = (duration: number = 1200) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return { loading, setLoading };
};
