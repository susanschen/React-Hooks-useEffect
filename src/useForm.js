import { useState } from "react";

/* Custom Hooks
return an array of 2 items
1. the state
2. the function to set the state
 */
export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};