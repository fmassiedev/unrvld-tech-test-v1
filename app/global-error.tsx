"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
          <pre className="text-sm text-slate-800 mt-4">{error.message}</pre>
        </div>
      </body>
    </html>
  );
}
