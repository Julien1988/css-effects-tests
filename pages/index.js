import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';

export default function Home() {

  const [offsetY, setOffsetY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
    setOffsetX(window.pageYOffset)
  }  

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>

        <section className='h-screen bg-red-700 relative'>
          <div className='flex justify-center items-center h-full'>
            <h1 className='text-center text-white text-2xl'>Hello One</h1>
          </div>
          <div className='triangle bg-red-700 absolute bottom-0 right-0'>
          </div>
      
        </section>

        <section className='h-screen bg-amber-400'>
         
          <div className='flex justify-center items-center h-full overflow-hidden'>
            <div className='left-from-right-effect translate-x-96'>
              <div className='translate-x-96'>
              <h1 className='text-center text-white text-2xl' style={{transform: `translateX(-${offsetX * 0.5}px)`}}>Hello Droite</h1>
             
              </div>
              <div className='-translate-x-96'>
              <p className='text-center text-white text-2xl' style={{transform: `translateX(${offsetX * 0.3}px)`}}>Je viens de la gauche</p>
              </div>
              
            </div>
          </div>
        </section>

        <section className='h-screen bg-lime-400'>
          <div className='flex justify-center items-center h-full'>
           <h1 className='text-center text-white text-2xl'>Hello Three</h1>
          </div>
        </section>

      </main>
    </div>
  )
}
