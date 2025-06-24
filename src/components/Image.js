import Link from "next/link";

const Image = ({ url, alt, fullWidth }) => {
  return (
    <Link href={url}>
      <img alt={alt} src={url} height={400} width={fullWidth ? '100%' : '48%'} style={{ objectFit: 'cover' }} />
    </Link>
  )
}

export default Image