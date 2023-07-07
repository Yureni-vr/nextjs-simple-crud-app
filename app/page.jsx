
import styles from './page.module.css';
import Image from 'next/image';
import hero from '../public/hero.png';

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better Tips for your Natural Beauty</h1>
      <p className={styles.des}>Turn your ideas to the global and share</p>
      <button className={styles.button}>See more Articles</button>
    </div>
    <div className={styles.item}>
    <Image src={hero} alt='' className={styles.img}/>
    </div>
  
   </div>
   
  )
}
