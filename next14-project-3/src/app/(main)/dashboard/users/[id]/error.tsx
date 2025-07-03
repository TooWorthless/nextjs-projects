'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-600">Error</h1>
      <p>Something went wrong: {error.message}</p>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}