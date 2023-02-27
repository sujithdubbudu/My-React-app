import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:
    [
        {id:1, value:0},
        {id:2, value:0}
    ]
    } 

    handleReset = ()=>
    {
        const counters =  this.state.counters.map(x => 
            {
                 x.value = 0;
                 return x;
             } );
        this.setState({counters});
       
    }


    handleDelete = (id)=>
    {
        const counters =  this.state.counters.filter(x => x.id !== id);
        this.setState({counters : counters});
        console.log("Event clicked",id);
    }

    handleDecrement = (id)=>
    {
        const counters =  this.state.counters.map(x=>  {
             
            if(x.id === id){
                x.value--;
            }
               
            return x;
         } );
        this.setState({counters : counters});

    }

    handleIncrement = (counter)=>
    {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] ={...counter};
        counters[index].value++;
        this.setState({ counters });

    }
    render() { 
        return (
        <div> 
         <button className="btn btn-success btn-sm m-2" onClick={ this.handleReset}>Reset</button>
           { 
                this.state.counters.map(counter =>
                <Counter 
              
                onReset ={this.handleReset}
                onDelete = {this.handleDelete} 
                value={counter.value} 
                counter={counter}
                onIncrement = {this.handleIncrement} 
                onDecrement = {this.handleDecrement} 
                
                selected/>
                 )
            }
        </div>
        
        );
    }
}
 
export default Counters ;