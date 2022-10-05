export default function CounterFunctionComponent() {
    let [counter, setCount] = useState(0);
    const increase = () => {
        setCount((preState) => preState + 1);
    };
    return (
        <div>
            <button onClick={() => increase()}>+</button>
            <p>{counter}</p>
        </div>
    )
}