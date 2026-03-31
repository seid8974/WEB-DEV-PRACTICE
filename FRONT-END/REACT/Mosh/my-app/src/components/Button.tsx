import React from 'react';

interface Props {
    children: string;
    color: 'primary' | 'secondary' | 'success' | 'danger';
    onClick: ()=> void
}

const Button = ({children,color='primary',onClick}: Props) => {
  return (
    <div>
        <button className={'btn btn-'+ color} onClick={onClick}> {children} </button>
    </div>
  )
}

export default Button