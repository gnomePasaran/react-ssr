import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ blogs }) => (
  DOM.ul(
    null,
    _.map(
      blogs,
      (group, key) => (
        DOM.li(
          { key },
          React.createElement(BlogItem, { group: group })
        )
      )
    )
  )
);

export default BlogList;
