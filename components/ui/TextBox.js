import React, { DOM } from 'react';

const Span = (props) => (
  DOM.span(
    {
      style: { border: '1px solid red' }
    },
    props.children
  )
);

const TextBox = ({ text }) => (
  React.createElement(
    Span,
    {}
    , text
  )
);

export default TextBox;
