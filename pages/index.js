import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome EDWMSLAND!" />
        <p className="description">
          Site is currently under maintenance
        </p>
        <p>
        <iframe src="https://giphy.com/embed/p95AUQEUVwZvHuAL8e" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/DogeBONK-bonk-dobo-dogebonk-p95AUQEUVwZvHuAL8e">via GIPHY</a></p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
