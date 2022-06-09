import React, { useState, useEffect, useRef } from 'react';

function Forms(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='list-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='list-input edit'
          />
          <button onClick={handleSubmit} className='list-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Bread'
            value={input}
            onChange={handleChange}
            name='text'
            className='list-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='list-button'>
            Add item
          </button>
        </>
      )}
    </form>
  );
}

export default Forms;