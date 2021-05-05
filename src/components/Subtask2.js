import React from 'react';
import queryString from 'query-string';

export default function subtask2({ location, match }) {
    const optionalParameters = queryString.parse(location.search);
    const paramItems = Object.keys(optionalParameters).map((key) => <span key={key}>{key}={optionalParameters[key]}</span>);
  return (
    <div>
          Subtask2, query parameters: {paramItems}
    </div>
  )
}