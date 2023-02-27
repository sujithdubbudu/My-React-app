import React,{Component}from 'react';
class Counter extends Component {
  
    render() { 
        return (
            <div>  
                <span>{this.formatCount()}</span>
     <button className="btn btn-success btn-sm m-2" onClick={()=> this.props.onIncrement(this.props.counter)}>Increment</button>
      <button className="btn btn-danger btn-sm m-2" onClick={()=> this.props.onDecrement(this.props.counter.id)}>Decrement</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
            );
    }
  formatCount()
  {
    return this.props.value;
  }
    
}
 
export default Counter;