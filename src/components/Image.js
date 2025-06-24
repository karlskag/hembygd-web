import Link from "next/link";
import styles from '../../styles/Home.module.css'

const Image = ({ url, alt, fullWidth }) => {
  return (
    <Link href={url} className={styles.clickableImage} style={{ width: fullWidth ? '100%' : undefined }}>
      <img alt={alt} src={url} height={400} width={'100%'} style={{ objectFit: 'cover' }} />
    </Link>
  )
}

export default Image