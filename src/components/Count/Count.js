import React,{useState} from 'react'
import CountUI from './CountUI/CountUI'

export default function Count() {
    
    const [count,setCount] = useState(0)



const decrement = () => {
    setCount(count-1)
}

const incriment = () =>{
    setCount(count+1)
}


    return (
        <div className='count'>
            <CountUI
            count={count}
            decrement={decrement}
            incriment={incriment}
            />
        </div>
    )
}




