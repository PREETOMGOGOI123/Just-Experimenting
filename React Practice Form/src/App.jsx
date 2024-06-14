import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [formFields, setFormFields] = useState({
    name: '',
    'contact-no': ''
  });

  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormFields((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  }

  const inputFields = [
    {
      id: 'name',
      type: 'text',
      value: formFields['name']
    },
    {
      id: 'contact-no',
      type: 'number',
      value: formFields['contact-no']
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <Form inputFields={inputFields} handleInputChange={handleInputChange} />
    </div>
  );
}

export default App;
