import { useConfig } from 'nextra-theme-docs';
import React from 'react';

export default {
  docsRepositoryBase: 'https://github.com/Takeno/l2-guide-hub/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - L2 Guide Hub'
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
        <meta name="apple-mobile-web-app-title" content="L2 Guide Hub" />
      </>
    )
  },
  logo: <span>L2 Guide Hub</span>,
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
      <span>
        Developed by{' '}
        <a href="https://twitter.com/matteomanchi" target="_blank">
          Takeno
        </a>
      </span>
    )
  },
}