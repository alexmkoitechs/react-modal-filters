import { Form, Field } from "react-final-form";
import { parseFuncRadio } from "../../helpers";
import { roomsItems, mainFormItems, radioButtonsItems } from '../../constants';

import Row from "../Row";
import Button from "../Button";
import RadioButton from "../RadioButton";

import * as Styled from "./styled";

const FilterForm = ({ applyFilters }) => {
  return (
    <Styled.FormContainer>
      <Form
        onSubmit={applyFilters}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            {/* rows with text, numbers, checkboxes */}
            {mainFormItems.map((item) => (
              <Row
                key={item.name}
                name={item.name}
                type={item.type}
                label={item.label}
              />
            ))}
            {/* rooms */}
            <div>
              <label>Rooms</label>
                <div>
                  {roomsItems.map(room => (
                    <label key={room.toString()}>
                      <Field
                        value={room}
                        name="rooms"
                        type="checkbox"
                        component="input"
                      />
                      {room}
                    </label>
                  ))}
              </div>
            </div>
            {/* rent */}
            {radioButtonsItems.map(item => (
              <RadioButton
                key={item.name}
                name={item.name}
                items={item.items}
                rowLabel={item.label}
                parseFunc={parseFuncRadio}
              />
            ))}
            
            <Styled.ButtonsSection>
              <Button
                label="Apply"
                type="submit"
                color="#007FFF"
                hoverColor="#0066b2"
              />
              <Button
                label="Reset"
                type="button"
                color="#FF3800"
                onClick={form.reset}
                hoverColor="#E23D28"
                disabled={submitting || pristine}
              />
            </Styled.ButtonsSection>
          </form>
        )}
      />
    </Styled.FormContainer>
  );
};

export default FilterForm;
