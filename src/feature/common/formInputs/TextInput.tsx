import React, { FunctionComponent } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Form, Label } from 'semantic-ui-react';

// interface IProps
//   extends FunctionComponent<FieldRenderProps<string, HTMLInputElement>>,
//     FormFieldProps {}

const TextInput: FunctionComponent<FieldRenderProps<string, HTMLElement>> = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} type={type} width={width}>
      <input {...input} placeholder={placeholder} />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextInput;
