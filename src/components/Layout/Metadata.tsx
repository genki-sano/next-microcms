import Head from 'next/head'

type Props = {
  title: string
  description: string
  siteName: string
}

export const Metadata: React.FC<Props> = ({ title, description, siteName }) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={`${url}/ogp.jpg`} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={siteName} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}
