import React from "react";
import { Form } from "react-bootstrap";

function InputText({size, type, placeholder}) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Control size={size} type={type} placeholder={placeholder} />
      </Form.Group>
    </>
  );
}

export default InputText;
