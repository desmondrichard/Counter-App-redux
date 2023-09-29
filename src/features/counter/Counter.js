import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,reset,incrementByAmount } from './counterSlice';
import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Counter() {
    const count = useSelector((state) => state.counter.count)  //gets count value from counterSlice.js //count=0
    const dispatch = useDispatch();
    // using use state:
    const [incrementAmount,setIncrementAmount]=useState(0);
    // checking userinput is a number else replace other D.T's by Zero using pipe symbol:
    const addValue=Number(incrementAmount)||0;
    const resetAll=()=>{
        setIncrementAmount(0);//to pass 0 inside fn and to display 0 in o/p
        dispatch(reset());//to make state as 0
    }


    return (
        <div>
           
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm="4">
                        <p>{count}</p>  {/*to Display 0 in o/p */}
                        </Col>
                        <Col sm="12"></Col>
                        <Col sm="4">
                        <button onClick={() => dispatch(increment())}>+</button> {/*count=count+1 */}
                        </Col>
                        <Col sm="4">
                        <button onClick={() => dispatch(decrement())}>-</button>  {/*count=count-1 */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="text" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)} />                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
                        </Col>
                        <Col>
                            <button onClick={resetAll}>Reset</button>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Counter