import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux-demo/index";

function CakeShop(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>Number of cakes in store :{props.numOfCakes} </h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeShop);
