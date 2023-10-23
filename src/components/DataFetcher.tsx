import React from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
 
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string; 
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DataFetcher: React.FC = () => {

  const { data, error } = useSWR<Post[]>("https://jsonplaceholder.typicode.com/posts", fetcher, {   revalidateIfStale: false, revalidateOnFocus: false });

  if(error) return <>Error loading data</>;
  if(!data) return <>Loading data...</>;

  return (
    <div>
        <h1>Data from API</h1>
        <ul>
            {data.map((item) => (
            <li key={item.id}>{item.title}</li>
            ))}
        </ul>

        <Link to="/empty">Link to empty page</Link>
    </div>
  )
}

export default DataFetcher