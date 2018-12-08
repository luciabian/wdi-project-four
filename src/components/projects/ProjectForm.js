import React from 'react';

import FormInput from './FormInput';
import FormButton from './FormButton';

function ProjectForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit}>
      <FormInput name="name" type="text" handleChange={handleChange} />
      <FormInput name="country" type="text" handleChange={handleChange}/>
      <FormInput name="image" type="text" handleChange={handleChange}/>
      <FormInput name="lat" handleChange={handleChange}/>
      <FormInput name="lng" handleChange={handleChange}/>
      <FormButton text="Create"/>
    </form>
  );
}

export default ProjectForm;
