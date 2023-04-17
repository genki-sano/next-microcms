import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'
import styles from '@/styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <Layout
      title={'タイトル'}
      description={'ディスクリプション'}
      siteName={'サイト名'}
    >
      <div className={styles.container}>
        <p>Welcome!!</p>
      </div>
    </Layout>
  )
}

export default IndexPage
