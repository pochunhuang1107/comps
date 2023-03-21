import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

export default function CounterPage({ initialCount }) {
    const { count, increment } = useCounter(initialCount)
    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>
                Increment
            </Button>
        </div>
    )
}
