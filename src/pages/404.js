// pages/404.js
import Link from 'next/link';

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back to the home page</Link>
    </div>
  );
}

export default NotFound;
