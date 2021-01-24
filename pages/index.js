import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router"

function Home() {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push('/pokemon')
    }
  return (
    <>
      <Head>
        <title>My Next JS Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>Welcome, Explorer!</div>
      <Link href="/blog">
        <a>Go to blog page</a>
      </Link>
      <button onClick={handleClick}>
          Click me
      </button>
    </>
  );
}

export default Home;
