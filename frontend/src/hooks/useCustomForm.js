import { useState } from "react";

// const useForm = (callback) => {
//   const [formValues, setFormValues] = useState({});

//   const handleChange = (event) => {
//     event.persist();
//     setFormValues({...formValues, [event.target.name]: event.target.value });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     callback();
//   }

//   return {formValues, handleChange, handleSubmit}
// }

// export default useForm;

// ***This is the orginial starter code****

const useCustomForm = (initialValues = {}, onSubmit) => {
  const [formData, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    e.persist();
    if (e.target.name === "isStudent") {
      setFormValues({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormValues({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const reset = () => {
    setFormValues(initialValues);
  };

  return [formData, handleInputChange, handleSubmit, reset];
};

export default useCustomForm;
