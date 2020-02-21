import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  light: state
});

const addAction= { type: 'ADD' };
const minusAction= { type: 'MINUS' };
const addTen= { type: 'ADD-TEN' };
const minusTen= { type: "MINUS-TEN" };
const reset= { type: "RESET" };

const CounterComponent = ({ light, dispatch }) => (
    <div>
        <p>{light}</p>
        <button onClick={ ()=> dispatch(addAction)}>+</button>
        <button onClick={ ()=> dispatch(minusAction)}>-</button>
        <button onClick={ ()=> dispatch(reset)}>reset</button>
        <button onClick={ ()=> dispatch(addTen)}>+ 10</button>
        <button onClick={ ()=> dispatch(minusTen)}>- 10</button>
    </div>);

export default connect(mapStateToProps)(CounterComponent);