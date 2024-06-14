import React from 'react'

function Form({inputFields, handleInputChange}) {
  return (
    <form onChange={handleInputChange}>
      {inputFields.map((fields, index)=>(
        <fieldset key={index}>
          <label htmlFor={fields.id}>{fields.id}</label>
          <input type={fields.type} id={fields.id} />
        </fieldset>
      ))}
    </form>
  )
}

export default Form