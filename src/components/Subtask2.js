import React from 'react';
import queryString from 'query-string';

export default function subtask2({ location }) {
    const optionalParameters = queryString.parse(location.search);
    const paramItems = Object.keys(optionalParameters).map((key, index, array) => {
        let coma = ',';
        if (index===array.length -1){
            coma = '';
        };
        return `${array[index]}=${optionalParameters[key]}${coma} `
    });
  return (
    <div>
          Subtask2, query parameters: {paramItems}
    </div>
  )
}
