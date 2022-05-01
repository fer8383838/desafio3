import { useEffect, useState } from "react"

const Item = () => {

  const [suma, setSuma] = useState(0)
  const [otrasuma, setOtrasuma] = useState(0)

  useEffect( () =>{
    console.log("Hola");
  } , [])

  useEffect( () =>{
    console.log("Hola click");
  })

  useEffect( () =>{
    console.log("Efecto en suma");
    console.log("----------------------------")
  } , [suma])

  useEffect( () =>{
    console.log("Efecto en otrasuma");
    console.log("----------------------------")
  } , [otrasuma])

  const onClickH = () => {
    console.log('click de onclick') 
    setSuma( suma + 1 )
  }

  const otrasumaH = () => {
    console.log('click otrasuma')
    setOtrasuma( otrasuma + 1 )
  }
  
  return (
    <div>
      <button onClick={onClickH} className='btn'>Click Aqui</button>
      {suma}

      <button onClick={otrasumaH} className='btn'>Otra Suma</button>
      {otrasuma}
    </div>
  )
}
export default Item