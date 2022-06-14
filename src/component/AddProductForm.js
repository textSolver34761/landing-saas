import React, { useState } from "react";
import InputField from "./InputField";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddProductForm = () => {
  const [inputValue, setInputValue] = useState({ name: "", price: "" });
  const { name, price } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  return (
     <Form>
       <InputField
         type="text"
         value={name}
         placeholder="Product Name"
         label="Name"
         name="name"
         onChange={handleChange}
       />
       <InputField
         type="number"
         value={price}
         placeholder="Add Price"
         label="Price"
         name="price"
         onChange={handleChange}
       />
       <Button color="primary">Add</Button>{" "}
       <Button color="secondary">Cancel</Button>
     </Form>
  );
};

export default AddProductForm;