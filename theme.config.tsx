import { useConfig } from 'nextra-theme-docs';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

export default {
  docsRepositoryBase: 'https://github.com/Takeno/l2-guide-hub/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - L2 Duckpedia'
    }
  },
  head: function useHead() {
    const { title, frontMatter } = useConfig()

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={frontMatter.description || 'Discover comprehensive guides, tips, and strategies for Lineage 2. Level up your gameplay, find the best farming spots, and optimize your character builds. Join our community and unleash your true potential in Lineage 2!'}
        />
        <meta
          name="og:description"
          content={frontMatter.description || 'Discover comprehensive guides, tips, and strategies for Lineage 2. Level up your gameplay, find the best farming spots, and optimize your character builds. Join our community and unleash your true potential in Lineage 2!'}
        />
        <meta
          name="og:title"
          content={title}
        />
        <meta name="apple-mobile-web-app-title" content="L2 Duckpedia" />
      </>
    )
  },
  logo: <span>L2 Duckpedia</span>,
  feedback: {
    content: null,
  },
  // editLink: {
  //   component: () => null,
  // },
  navigation: {
    prev: false,
    next: false,
  },
  // main: ({children}) => (
  //   <>
  //     {children}
  //     <hr />
  //     <p>If you find this website useful, consider to support us!</p>
  //   </>
  // ),
  footer: {
    text: (
      <div style={{textAlign: 'center'}}>
        <p>
          This is a fan website developed by <a href="https://twitter.com/matteomanchi" target="_blank">Takeno</a>. The use of the service is for informational purposes only. You can familiarize yourself with the original version of the game Lineage 2 on the official servers at <a rel="noindex nofollow" href="https://eu.4game.com/lineage2/">4Game Lineage 2</a>.
        </p>
        <Analytics />
      </div>
    )
  },
}