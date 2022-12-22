import React from 'react';

export const ButtonComponent = props => {
  return (
    <>
      <button disabled={!props.select} className={props.cname} type="submit" onClick={props.run ? props.run : ''}>
        {' '}
        {props.value}{' '}
      </button>
    </>
  );
};
