import React, { Component } from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 300px;
  height: 450px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  float: left;
  margin-right: 20px;
  margin-left: 20px;
`;

class Item extends Component {
  state = {
    showDesc: false
  };

  showDescriptionHandler = () => {
    this.setState(() => {
      return {
        showDesc: !this.state.showDesc
      };
    });
  };

  render() {
    const { name, price, year, pic } = this.props;
    const { showDesc } = this.state;
    return (
      <StyledItem>
        <h3>{name}</h3>
        <img src={pic} alt="cars" />
        <p>
          {year} and {price}
        </p>
        <button onClick={this.showDescriptionHandler}>Show Me More</button>
        {showDesc ? (
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              iusto praesentium id iste cumque dolor, repellendus itaque illum.
              Quod quis delectus consequatur! Ratione ex sapiente hic quam
              dolor, assumenda eaque.
            </p>
            <button>Buy</button> - <button>Add to wish List</button>
          </div>
        ) : null}
      </StyledItem>
    );
  }
}

export default Item;
