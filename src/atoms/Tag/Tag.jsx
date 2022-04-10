import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Tag.scss';

const Tag = () => {
  return (
    <div className="tag__container">
      <p>This is a tag, and I like it</p>
      <AiOutlineClose />
    </div>
  );
};

export default Tag;
