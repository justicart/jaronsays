import React from 'react'
import { Link, useCurrentRoute, useView } from 'react-navi'
import { MDXProvider } from '@mdx-js/react'
import ArticleMeta from './ArticleMeta'
import Picture from './Picture'
import styles from './BlogPostLayout.module.css'

function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute()
  let { connect, content, head } = useView()
  let { MDXComponent, readingTime } = content

  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.
  return connect(
    <div className={styles.main}>
      {head}
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <Link href={url.pathname}>{title}</Link>
          </h1>
          <ArticleMeta
            blogRoot={blogRoot}
            meta={data}
            readingTime={readingTime}
          />
          <div className={styles.separator} />
        </header>
        <MDXProvider components={{
          a: Link,
          wrapper: ({ children }) =>
            <div className={styles.content}>
              {children}
            </div>
        }}>
          <MDXComponent />
        </MDXProvider>
        <div className={styles.separator} />
        <footer className={styles.footer}>
          <section className={styles.links}>
            <div className={styles.previous}>
            {
              data.previousDetails &&
              <Link href={data.previousDetails.href}>
                ← {data.previousDetails.title}
              </Link>
            }
            </div>
            <div  className={styles.home}>
              <Link href={blogRoot}>
                <Picture />
              </Link>
            </div>
            <div className={styles.next}>
            {
              data.nextDetails &&
              <Link href={data.nextDetails.href}>
                {data.nextDetails.title} →
              </Link>
            }
            </div>
          </section>
        </footer>
      </article>
    </div>
  )
}

export default BlogPostLayout
