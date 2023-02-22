/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Token Gated Website with polkadot.js',
      link: {
        type: 'generated-index',
      },
      items: [
        'tutorials/tokengated-polkadotjs/intro',
        'tutorials/tokengated-polkadotjs/frontend',
        'tutorials/tokengated-polkadotjs/backend'
      ],
    },
  ],

  authorsSidebar: [
    {
      type: 'category',
      label: 'Authors How To',
      items: [    
        'authors/authors',
        'authors/contribution-steps',
        'authors/contribution-guide',
        'authors/contribution-cheatsheet',
        {
          type: 'category',
          label: 'Tutorial Template',
          link: {
            type: 'doc',
            id: 'tutorial-template/intro',
          },
          items: [ 'tutorial-template/part1', 'tutorial-template/part2', 'tutorial-template/further-reading' ]
        }
      ]
    }
  ],
};

module.exports = sidebars;
