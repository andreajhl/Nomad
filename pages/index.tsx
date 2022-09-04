import type { NextPage } from 'next';
import { GetServerSideProps } from "next";
import { useFetch } from '../hooks/useFetch';
import { dehydrate, QueryClient} from 'react-query';
import { ItemNav, ItemHero, ItemCarousel, Footer } from '../interfaces';
import { PATH_CAROUSEL, PATH_SLIDE, PATH_FOOTER, PATH_NAV, PATH_MESSAGE } from '../constants';
import HomePage from '../components/homePage/homePage';

const Home: NextPage = () => (
  <HomePage />
)

export default Home;

export const getServerSideProps: GetServerSideProps = async() => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<ItemNav[]>('list',() => useFetch(PATH_NAV));
  await queryClient.prefetchQuery<Footer>('footer',() => useFetch(PATH_FOOTER));
  await queryClient.prefetchQuery<string>('message',() => useFetch(PATH_MESSAGE));
  await queryClient.prefetchQuery<ItemHero[]>('listHero',() => useFetch(PATH_SLIDE));
  await queryClient.prefetchQuery<ItemCarousel[]>('carousel',() => useFetch(PATH_CAROUSEL));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};