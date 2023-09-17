import React from 'react';

const FormPageComponent = () => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="style.css" />
        <section className="container text-center hero">
          <h2>Create Product</h2>
          <p>Below is an example form built entirely with Bootstrap’s form controls.Each required form group has a validation state that can be triggered by
          attempting to submit the form without completing it.
          </p>
          <br />
          <br />
        </section>
    </>
  );
};

export default FormPageComponent;
