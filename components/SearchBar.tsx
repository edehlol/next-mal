import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Search = () => {
  const router = useRouter();
  const [input, setInput] = useState('');

  const submitSearch = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    router.push(`/search/${input}`);
  };
  return (
    <form className="flex" onSubmit={submitSearch}>
      <input
        type="text"
        placeholder="Search"
        className="border py-2 px-2 w-full max-w-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="border" type="submit">
        Search
      </button>
    </form>
  );
};
export default Search;
