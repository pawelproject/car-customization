import { useSelector, useDispatch } from "react-redux";
import { change } from "../state/reducers/settingsSlice";
import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import classes from "./CategoryOptions.module.css";

const CategoryOptions = ({ elementType, data, parentElement = "model" }) => {
  const carSettings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const selectingElement = (element) => {
    dispatch(change({ elementType: elementType, elementData: element }));
  };

  return (
    <div>
      <span>{elementType}</span>
      <Row>
        {data.map((element, i) => {
          const isDisabled =
            elementType !== "model"
              ? !carSettings[parentElement][elementType]
                ? true
                : false
              : false;

          // Removing options which cannot be chosen in that configuration
          const isHidden =
            elementType !== "model"
              ? carSettings[parentElement][elementType] &&
                !carSettings[parentElement][elementType].includes(element.id)
                ? true
                : false
              : false;
          if (isHidden) {
            return;
          }

          // Special styles for color options
          const ifColored =
            elementType === "color"
              ? {
                  backgroundColor: element.name,
                  color: "transparent",
                  borderWidth: "0",
                }
              : {};
          return (
            <Col
              col={4}
              sm={6}
              md={4}
              lg={3}
              xs={6}
              className="d-grid"
              key={element.id}
            >
              <Button
                onClick={() => {
                  selectingElement(element);
                }}
                disabled={isDisabled}
                active={carSettings[elementType] === element}
                variant="outline-dark"
                size="sm"
                style={ifColored}
                className={`${classes["btn-car-element"]} ${
                  carSettings[elementType] === element && classes["btn-active"]
                }`}
              >
                {element.name}
              </Button>
            </Col>
          );
        })}
      </Row>
      <br />
    </div>
  );
};

export default CategoryOptions;
