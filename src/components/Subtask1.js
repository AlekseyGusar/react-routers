import React from 'react';

export default function Subtask1({ match }) {
  return (
    <div>Subtask1, parameter: {match.params.id}</div>
  );
}
