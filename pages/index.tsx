import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { Anime } from '../types/Anime';

const Home = ({ topAnime }: { topAnime: Anime[] }) => {
  console.log(topAnime);

  const renderTopAnime = () => {
    return topAnime.map((anime) => (
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

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Top Anime</h1>
        <ul className="flex flex-wrap">{renderTopAnime()}</ul>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await fetch('https://api.jikan.moe/v3/top/anime/1');
  const json = await data.json();
  return {
    props: {
      topAnime: json.top,
    },
  };
}

export default Home;
