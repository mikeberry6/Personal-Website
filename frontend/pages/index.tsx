import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const search = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const url = `${baseUrl}/v1/foods?query=${encodeURIComponent(query)}&page=1`;
    const res = await fetch(url);
    const data = await res.json();
    setResults(data.items ?? []);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Nutrient Profile Search</h1>
      <input
        className="border p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a food"
      />
      <button onClick={search} className="ml-2 bg-blue-500 text-white px-4 py-2">
        Search
      </button>
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
