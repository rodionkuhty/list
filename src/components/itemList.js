import React, { Component, Fragment, createRef } from "react";

import cars from "../cars";
import Item from "./item";

const CarForm = createRef();

class ItemList extends Component {
  state = {
    cars: cars,
    filterd: []
  };

  getCarsByNameHandler = () => {
    const { cars } = this.state;
    let typedCarName = CarForm.current.value;
    console.log(typedCarName);
    const chooseCarName = cars.filter(car => {
      return car.name.indexOf(typedCarName.toLowerCase()) > -1;
    });
    console.log(chooseCarName);
    this.setState({
      filterd: chooseCarName
    });
  };

  render() {
    const { cars, filterd } = this.state;

    const allCars = cars.map(({ id, name, price, year, description, pic }) => {
      return (
        <div key={id}>
          <Item
            name={name}
            price={price}
            year={year}
            description={description}
            pic={pic}
          />
        </div>
      );
    });

    return (
      <Fragment>
        <h1>Buy cars</h1>
        <div>
          <form action="get">
            <input
              type="text"
              name="item"
              id="item"
              ref={CarForm}
              onChange={this.getCarsByNameHandler}
            />
            <button type="submit">Click</button>
          </form>
        </div>
        <hr />
        {allCars}
      </Fragment>
    );
  }
}

export default ItemList;
