import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Counter() {
    const count = useSelector((state) => state.counter.count)  //gets count value from counterSlice.js //count=0
    const dispatch = useDispatch()

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
                </Container>

            </div>
        </div>
    )
}

export default Counter