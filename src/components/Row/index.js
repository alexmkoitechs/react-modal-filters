import { Field } from "react-final-form";

const Row = ({ label, name, type }) => {
  return (
    <div>
      <label>{label}</label>
      <Field name={name} component="input" type={type} />
    </div>
  );
};

export default Row;
