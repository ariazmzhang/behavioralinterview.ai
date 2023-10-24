// pages/500.js (or 500.tsx)
function InternalServerError({ error }) {
  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <p>{error}</p>
    </div>
  );
}

export default InternalServerError;
