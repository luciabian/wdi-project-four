import React from 'react';

import FormInput from './FormInput';
import FormButton from './FormButton';
function ProjectForm({ handleChange, handleSubmit }) {
  return(
    <section>
      <div className="columns">
        <div className="card column is-6 is-offset-3">
          <h2 className="title is-2">ADD A PROJECT</h2>

          <form onSubmit={handleSubmit}>
            <label className="label">NAME</label>
            <FormInput name="name" type="text" handleChange={handleChange} />
            <label className="label">COUNTRY</label>
            <FormInput name="country" type="text" handleChange={handleChange}/>
            <label className="label">IMAGE URL</label>
            <FormInput name="image" type="text" handleChange={handleChange}/>
            <label className="label">COUNTRY’S LATITUDE</label>
            <FormInput name="lat" handleChange={handleChange}/>
            <label className="label">COUNTRY’S LONGITUDE</label>
            <FormInput name="lng" handleChange={handleChange}/>
            <label className="label">COUNTRY INFORMATION</label>
            <FormInput name="countryInfo" handleChange={handleChange}/>
            <label className="label">PROJECT DESCRIPTION</label>
            <FormInput name="description" handleChange={handleChange}/>
            <FormButton text="Create"/>
          </form>

        </div>
      </div>
    </section>

  );
}

export default ProjectForm;
