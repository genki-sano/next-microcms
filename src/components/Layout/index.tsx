import { PropsWithChildren } from 'react'
import { Metadata } from '@/components/Layout/Metadata'

type Props = PropsWithChildren<{
  title: string
  description: string
  siteName: string
}>

export const Layout: React.FC<Props> = ({
  title,
  description,
  siteName,
  children,
}) => {
  return (
    <>
      <Metadata title={title} description={description} siteName={siteName} />
      {children}
    </>
  )
}
