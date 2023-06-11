import { Callout } from 'nextra/components';
import React from 'react';

export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - L2 Guide Hub'
    }
  },
  logo: <span>L2 Guide Hub</span>,
  feedback: {
    content: null,
  },
  editLink: {
    component: () => null,
  },
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