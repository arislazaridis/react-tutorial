import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux-demo/index";

function CakeShop(props) {
  return (
    <div>
      <h1>Number of cakes in store :{props.numOfCakes} </h1>
      <button onClick={props.buyCake}>Buy a cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeShop);
