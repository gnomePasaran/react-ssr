import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  React.createElement(
    'div',
    null,
    React.createElement(Image, props.group.img ),
    React.createElement(TextBox, { text: props.group.text })
  )
);

export default BlogItem;
