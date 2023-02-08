import { useSelector } from 'react-redux'


export default function ShowCount(props){
    const count = useSelector((store) => store.counter.value)

    return (
        <h1>{count}</h1>
    )
}