import { useEffect, useState } from 'react';
export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/workflows')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}