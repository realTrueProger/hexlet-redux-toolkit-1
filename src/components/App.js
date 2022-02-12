import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../slices/counterSlice.js';


function App() {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="App">
            Counter: {counter}
            <br/>
            <button onClick={() => dispatch(increment())}>increment</button>
            <br/>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
}

export default App;
