import React from 'react';

import BlogList from '../ui/BlogList';

const blogs = [
  {
    img: {
      src: "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
      width: 50, height: 50, alt: 'LZ'
    },
    text: 'Bright light is almost blinding'
  },
  {
    img: {
      src: "https://busites_www.s3.amazonaws.com/acdccom/content/discography/blackice_0.jpg",
      width: 50, height: 50, alt: 'AC/DC'
    },
    text: 'Back in Black, I hit the sack'
  },
  {
    img: {
      src: "http://fontmeme.com/images/Deep-Purple-Logo-600x259.png",
      width: 50, height: 50, alt: 'Deep Purple'
    },
    text: 'Smoke on the water, and fire in the sky'
  }
];


class BlogContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { blogs }
  }

  render() {
    const { blogs } = this.state;
    return React.createElement(BlogList, { blogs })
  }
};

export default BlogContainer;
