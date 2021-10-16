import Link from 'next/link';
import Image from 'next/image';
import { Anime } from '../types/Anime';

const AnimeList = ({ list }: { list: Anime[] }) => {
  const renderList = () => {
    return list.map((anime) => (
      <li key={anime.mal_id}>
        <Link href={`/anime/${anime.mal_id}`} passHref>
          <a className="relative h-64 w-48">
            <div className="relative h-64 w-48">
              <Image src={anime.image_url} layout="fill" className="object-cover" alt="" />
            </div>
          </a>
        </Link>
      </li>
    ));
  };
  return <ul className="flex flex-wrap">{renderList()}</ul>;
};
export default AnimeList;
