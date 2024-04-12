import Image from "next/image"
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.container}>
      <Image alt="logo de la web" src={'/logo.png'} width={160} height={30} className={styles.img}  />
    </div>
  )
}