import React, {Component} from 'react';
import Button from './Button';
import {connect} from 'react-redux';
import {incrementCount, decrementCount} from '../actions/index';

class Counter extends Component{

handleBtnActionIncrement = () => {
  this.props.onIncrementClick(this.props.count)
}

handleBtnActionDecrement = () => {
  this.props.onDecrementClick(this.props.count)
}

render() {
  const {count}=this.props
  return(
    <div style={{'text-align': 'center'}}>
      <h5>Count: {count}</h5>
      <Button action={this.handleBtnActionIncrement} buttonTitle = "+" />
      <Button action={this.handleBtnActionDecrement} buttonTitle = "-" />
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    count: state.CounterReducer.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (count) => {  
      dispatch(incrementCount(count))
    },
    onDecrementClick: (count) => {
      if(count !== 0) 
      dispatch(decrementCount(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)