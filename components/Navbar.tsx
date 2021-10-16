import Link from 'next/link';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="h-16 mb-8 border-b flex items-center justify-between px-4">
      <Link href="/">
        <a className="text-lg font-semibold">NextMAL</a>
      </Link>

      <SearchBar />
    </div>
  );
};

export default Navbar;
