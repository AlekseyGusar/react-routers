import React from 'react';

export default function Subtask1({match}) {
    console.log(match.params.id)
  return (
    <div>
      Subtask2, parameter:{match.params.id}
    </div>
  );
}
