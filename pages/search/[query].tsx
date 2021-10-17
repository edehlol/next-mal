import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AnimeList from '../../components/AnimeList';
import Layout from '../../components/Layout';
import { Anime } from '../../types/Anime';

const SearchPage = ({ data }: { data: any }) => {
  const router = useRouter();
  const query = router.query.query as string;

  console.log(data);
  return (
    <Layout>
      <AnimeList data={data} query={query} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context.query;
  const res = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=${query}&page=1&genre=12&genre_exclude=1`
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default SearchPage;
