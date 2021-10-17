import Link from 'next/link';
import Image from 'next/image';
import { Anime } from '../types/Anime';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const ListItem = ({ anime }: { anime: Anime }) => {
  return (
    <li className="w-full mb-8">
      <Link href={`/anime/${anime.mal_id}`} passHref>
        <a className="">
          <div className="flex">
            <div className="mr-4">
              <div className="relative h-32 w-24">
                <Image
                  src={anime.image_url}
                  layout="fill"
                  className="object-cover rounded-lg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3>{anime.title}</h3>
              <p>Score: {anime.score}</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

const AnimeList = ({ data, query }: { data: any; query: string }) => {
  console.log(data);
  const [list, setList] = useState(data.results);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMoreData = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&page=${
        currentPage + 1
      }&genre=12&genre_exclude=1`
    ).then((res) => res.json());
    setCurrentPage(currentPage + 1);

    setList(list.concat(data.results));
    return data;
  };
  const renderList = () => {
    return list.map((anime: Anime) => <ListItem anime={anime} key={anime.mal_id} />);
  };
  return (
    <InfiniteScroll
      next={fetchMoreData}
      hasMore={currentPage <= data.last_page}
      loader={'loading'}
      dataLength={list.length}
    >
      <ul className="flex flex-wrap">{renderList()}</ul>
    </InfiniteScroll>
  );
};
export default AnimeList;
