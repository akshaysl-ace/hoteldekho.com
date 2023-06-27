import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className='text-blue-600 text-3xl'> Hello Welcome to Next JS ! </h1>
      </main>
    </>
  )
}
