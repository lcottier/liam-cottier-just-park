import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextField from './text-field'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Just Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.body}>
          <div>
            <img src="/images/just-park-logo.png" alt="Logo" />
          </div>

          <div>
            <h1 className={styles.title}>Sign In</h1>
            <TextField title="User name" placeholder="Enter User name" icon="iconEmail"></TextField>
            <TextField icon="iconPadlock" title="Password" placeholder="Enter Password" subtitle="Forgot Password?"></TextField>
            <button className={styles.button}>Sign In</button>
          </div>
        </div>
        <div className={styles.sideImage}>
          <img src="/images/login-side-image.png" alt="side-image" />
        </div>
      </main>
    </div >
  )
}
