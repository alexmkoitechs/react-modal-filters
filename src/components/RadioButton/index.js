import { Field } from "react-final-form";

const RadioButton = ({ rowLabel, name, parseFunc, items }) => {
  return (
    <div>
      <label>{rowLabel}</label>
      <div>
        {items?.map((label) => {
          return (
            <label key={label.title}>
              <Field
                name={name}
                type="radio"
                component="input"
                parse={parseFunc}
                value={label.value}
              />
              {label.title}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButton;
