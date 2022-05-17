import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import UserFeed from '../components/UserFeed';

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insta Clone Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <UserFeed />
    </div>
  )
}
export default Home;
