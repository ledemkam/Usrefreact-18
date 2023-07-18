
import { useRef } from "react"

const Container = () => {

    //comment selectionner un tablau d element avec useRef


    const inputRef = useRef([])

    const addinputRef = (el) => {
        if(el && !inputRef.current.includes(el)) {
            inputRef.current.push(el)
        }
        console.log(inputRef)
    }

  return (
    <div>
        <input ref={addinputRef} type="text" />
        <input ref={addinputRef}type="text" />
        <input ref={addinputRef} type="text" />
    </div>
  )
}
export default Container