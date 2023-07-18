import { nanoid } from "nanoid"
import { useRef, useState } from "react"

const DynamicSelection = () => {
    const [fruits,setFruits] = useState([
        {id: nanoid(7) ,value:"🍠"},
        {id: nanoid(7) ,value:"🥭"},
        {id: nanoid(7) ,value:"🥑"}
    ])
    const deleteFruit = id => {
        setFruits(fruits.filter(fruit =>fruit.id !== id))
    }
    const fruitsRef = useRef([])

    const handRef = (element) => {
            if (element){
                fruitsRef.current.push(element)
            }else{
                fruitsRef.current.shift()
            }
            console.log(fruitsRef)
        
    }
  return (
    <div>
        <ul>
            { fruits.map(fruit => (
                <li key={fruit.id}
                onClick={()=>deleteFruit(fruit.id)}
                ref={handRef}
                >
                    {fruit.value}
                </li>
            ))}
        </ul>
        <button onClick={()=>setFruits([...fruits,{id:nanoid(7),value
        :"🍍"}])}>Add fruit</button>
    </div>
  )
}
export default DynamicSelection