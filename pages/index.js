import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect,  } from 'react';

export default function Home() {

  const [offsetY, setOffsetY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)

  const [getYsectionThree, setYsectionThree] = useState(0)



  
  const handleScroll = () => {
    // Calcule de la taille de l'écran (hauteur)
    const windowHeight = (window.innerHeight * 1.6);

    
    setOffsetY(window.pageYOffset)
    setOffsetX(window.pageYOffset - window.innerWidth / 10)

  
    // get section 3
    const getSectionThree = document.querySelector('.section-3').getBoundingClientRect();

    // Détection du point d'arrivage de l'écran dans la section avant d'utiuliser l'effet dront
    window.pageYOffset >= getSectionThree.height
      // Remise du compteur à zero 
      ? setYsectionThree(window.pageYOffset - windowHeight)
      : setYsectionThree(0)  

  }  


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
 



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <section className='h-screen bg-red-700 relative section-1'>

          <div className='absolute inset-1/3'>
            <h1 className='text-center text-white text-2xl'style={{transform: `translateY(${offsetY * 1.6}%)`}}>Hello One</h1>
          </div>

          <div className='triangle bg-red-700 absolute bottom-0 right-0'>
          </div>
      
        </section>

        <section className='h-screen bg-amber-400 section-2'>
         
          <div className=' h-full overflow-hidden relative'>
            <div className='absolute left-full bottom-3/4'>
              <h1 className='w-max text-white text-2xl pt-20' style={{transform: `translateX(-${offsetX * 0.8}px)`}} >Hello Droite</h1>
            </div>
            
            <div className='absolute right-full bottom-2/4'>
              <p className='w-max text-white text-2xl pb-20' style={{transform: `translateX(${offsetX * 0.8}px)`}}>Je viens de la gauche</p>
            </div>
          </div>

        </section>

        <section className='h-screen bg-lime-400 section-3 relative overflow-hidden'>
            <div className='absolute inset-1/3 bottom-0 '>
              <h1 className='text-white text-2xl text-center'style={{transform: `translateY(-${getYsectionThree * 1.6}%`}}>Hello Three</h1>
            </div>
        </section>

   

      </main>
    </div>
  )
}
