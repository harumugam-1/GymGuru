import * as Form from '@radix-ui/react-form';

export default const function  () => (
  <Form.Root>
    <Form.Field>
      <Form.Label />
      <Form.Control />
      <Form.Message />
      <Form.ValidityState />
    </Form.Field>

    <Form.Message />
    <Form.ValidityState />

    <Form.Submit />
  </Form.Root>
);
