import { useSelector } from "react-redux";
import { ReactComponent as Carphoto } from "../images/cars/carphoto.svg";
import { Card } from "react-bootstrap";
import classes from "./Summary.module.css";
import CardBodyRow from "../UI/CardBodyRow";

const Summary = () => {
  const car = useSelector((state) => state.settings);

  return (
    <div>
      <Card className={classes["summary-card"]} bg="dark" text="light">
        <Card.Title className="text-end">Summary</Card.Title>

        <Carphoto fill={car.color.name} className={classes["car-photo"]} />
        <Card.Body className={classes["card-body"]}>
          <CardBodyRow catName="model" value={car.model.name} />
          <CardBodyRow catName="engine" value={car.engine.name} />
          <CardBodyRow catName="gearbox" value={car.gearbox.name} />
          <CardBodyRow catName="color" value={car.color.name} />
          <br />
          <CardBodyRow catName="price" value={car.summaryPrice} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Summary;
