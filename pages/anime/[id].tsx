import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Anime } from '../../types/Anime';
import { GetServerSideProps } from 'next';
import { Related } from '../../types/Related';

const AnimePage = ({ anime }: { anime: Anime }) => {
  console.log(anime);

  const renderRelatedAnime = () => {
    if (!anime.related) return null;

    const test = Object.entries(anime.related);
    console.log(test);

    return Object.entries(anime.related).map(([key, value]: any) => {
      return (
        <div key={key}>
          <h3 className="text-lg font-semibold">{key}</h3>
          <ul>
            {value.map((item: Related) => (
              <li key={item.mal_id}>
                <Link href={`/anime/${item.mal_id}`}>
                  <a>{item.name}</a>
                </Link>{' '}
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  if (anime) {
    return (
      <Layout>
        <h1 className="text-2xl mb-8">{anime.title}</h1>
        {anime.trailer_url && (
          <iframe className="mb-8" title="video" width="560" height="315" src={anime.trailer_url} />
        )}
        <div>
          <h4 className="text-lg">Related</h4>
          <ul>{renderRelatedAnime()}</ul>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  console.log(id);
  const res = await fetch(`https://api.jikan.moe/v3/anime/${id}/`);
  const anime = await res.json();
  return {
    props: {
      anime,
    },
  };
};

export default AnimePage;
