import { useEffect, useState } from "react"
// import {dogs} from "../data/dogs"
// import dogs from "../data/dogs"
import { dogs as dogsData } from "../data/dogs"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [dogs, setdogs] = useState([])

    useEffect (() => {
        console.log("esto se repite")
    })
    useEffect (() => {
        console.log("esto no")
    }, [])


    useEffect(() => {

      const getDogs = new Promise( (resolve, reject)=>{
          setTimeout( ()=>{
            resolve(dogsData)
            // reject('error en la promesa')
          }, 1000)
          
    }) 

    getDogs.then( (result)=>{
        console.log('Se completó la promesa',result);
        setdogs(result)
   })
    // ,catch(err) => {
    //     console.log('hubo un error', err)
    // })
    //resultado:
    //hubo un error
    //error en la promesa

    console.log('Se terminó el efecto')
    }, [])

    return (
        <div>
            {/* dogs es aun array. no puede renderear cada objeto por si solo */}
            {/* pr eso se agrega map() */}
            {/* se pone dog.name entre llaves porque es parte de un html */}
            {/* {dogs.map(dog => dog.name)} */}
            {/* se le agrega ien dog,i y key={i} */}
            {/* {dogs.map((dog, i) => <li key={i}>{dog.name}</li>)} */}
            {/* {dogs.map(dog => <li key={dog.id}>{dog.name}</li>)} */}
            {/* agregando el id */}
            {dogs.map(dog => <ItemList key={dog.id} dogData={dog}/>)}
        </div>
    )
}
export default ItemListContainer