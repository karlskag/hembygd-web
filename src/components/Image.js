import Link from "next/link";

const Image = ({ url, alt }) => {
  return (
    <Link href={url}>
      <img alt={alt} src={url} height={400} width={'48%'} style={{ objectFit: 'cover' }} />
    </Link>
  )
}

export default Image