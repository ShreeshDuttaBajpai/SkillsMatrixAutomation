import React from 'react';

export const ButtonComponent = props => {
  return (
    <>
      <button className={props.cname} type="submit" onClick={props.run ? props.run : (() => {props.setOpenForm(!props.openForm)})}>
        {' '}
        {props.value}{' '}
      </button>
    </>
  );
};
