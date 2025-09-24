import { useState, useEffect } from 'react';
import './Modal.css';

export default function Modal({ status, onClose, children }) {

  return (
      <div className={status ? "customModal" : "customModal hide"}>
        <div className="customModal-header">
          <button onClick={onClose}>X</button>
        </div>
        {children}
      </div>
  );
}
