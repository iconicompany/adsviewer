import React from 'react';
import { createSchemaBridge, CustomAutoField } from '@ilb/uniformscomponents';
import { AutoForm } from 'uniforms-semantic';

function Auto({ response, request, schema, router, onSubmit, handleChange }) {
  const {
    carmanufacturer,
    carmodel,
    year,
    body,
    transmission,
    persons,
    horse,
    volume,
    region
  } = response;

  const transports = {
    carmanufacturer,
    carmodel,
    year,
    body,
    transmission,
    persons,
    horse,
    volume,
    region
  };

  function onChange(query) {
    console.log('onChangeModel', query);
    router.push({ pathname: router.pathname, query: { case: router.query.case, ...query } });
  }

  return (
    <React.Fragment>
      {/*<Form onSubmit={onSubmit} onChange={handleChange} size="large" textAlign="center">*/}
      {/*  <FormAuto options={transports} req={request} />*/}
      {/*  <Button animated type="submit" fluid>*/}
      {/*    <Button.Content visible>Поиск</Button.Content>*/}
      {/*    <Button.Content hidden>*/}
      {/*      <Icon name="arrow right" />*/}
      {/*    </Button.Content>*/}
      {/*  </Button>*/}
      {/*</Form>*/}
      <AutoForm
        schema={createSchemaBridge(schema)}
        onSubmit={onSubmit}
        onChangeModel={onChange}
        autoField={CustomAutoField}
      />
    </React.Fragment>
  );
}

export default Auto;
