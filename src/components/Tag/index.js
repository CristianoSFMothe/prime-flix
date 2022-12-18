import React from 'react';
import './tag.css';

export function TAG(props) {
  return (
    <ul>
      <li id='tag-genre' className='tag-genre' key={props.id}>
        {props.name}
      </li>
    </ul>

  )
}
