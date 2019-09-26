import React from 'react';

import { Form, Field } from 'react-quick-forms';

const App = () => {
  return (
    <Form defaultValues={{}}>
      <Field type="text">Input Name</Field>
      <Field type="email">Input Name</Field>
      <Field type="password">Input Name</Field>
      <Field type="textarea">Input Name</Field>
      <Field type="checkbox">Input Name</Field>
    </Form>
  );
};

export default App;
