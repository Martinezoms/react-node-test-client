import React from 'react';
import { FiEdit, FiDelete } from 'react-icons/fi';
import { Accordion } from '../../atoms';
import './Card.scss';

const Card = ({ setOpenConfirmation }) => {
  return (
    <div className="card__container">
      <div className="icons">
        <FiEdit title="Edit" />
        <FiDelete title="Delete" onClick={() => setOpenConfirmation(true)} />
      </div>
      <h3>Manufacturing</h3>
      <Accordion />
      <Accordion />
    </div>
  );
};

export default Card;
