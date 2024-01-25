import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberOption,setnumberOption] = useState(false)
  const [cherOption,setCherOption] = useState(false)
  const [password,setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberOption) str +="0123456789"
    if(cherOption) str +="@$%&*-+!"

    for (let i = 1; i<=length; i++){
      let cher = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(cher);
    }
    setPassword(pass)

  },[length,numberOption,cherOption,setPassword])

  const copyPasswordToClipboard = useCallback (() =>{
    passwordRef.current?.select()
window.navigator.clipboard.writeText(password)
alert("Password Copied")
  },[password])

  useEffect( () =>{
passwordGenerator()
  },[length,cherOption,numberOption,passwordGenerator])

  return (
    <>
  
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
         <div className='w-full flex justify-center'>
      <div className=' w-full max-w-lg rounded-lg px-4 m-8  text-black bg-green-800'>
      <h3 className=' text-xl text-center text-white'>Password Generator</h3>
        <div className='flex relative'>
          <input type="text"  ref={passwordRef}  value={password} className=' outline-none text-lg w-full px-3 py-1 mt-1 rounded-lg text-'placeholder= 'Password' readOnly   />
          <button onClick={copyPasswordToClipboard} className='outline-none absolute right-0 rounded-r-lg hover:bg-orange-500  bg-blue-700 text-white px-4 py-2 ml-2' >Copy</button>
        </div>

      <div className=' block text-sm gap-x-4 mt-2 mb-3 justify-center text-white'>
           <div className='flex text-lg gap-x-1 mt-4 '>
            <input type="range" min={8} max={30} value={length} className='cursor-pointer'onChange={(e)=>{setLength(e.target.value)}}/>
            <label >Length : {length}</label>
            </div>

            <div className='flex text-xl gap-x-1 mt-4'>
            <label >Number:</label>
            <input
  type="checkbox"
  defaultChecked={numberOption}
  onChange={() => {
    setnumberOption((prev) => !prev);
  }}
/> </div>
         
 <div className='flex text-xl gap-x-1 mt-4 '>
 <label >Cherectar:</label>
<input
  type="checkbox"
  defaultChecked={cherOption}
  onChange={() => {
    setCherOption((prev) => !prev);
  }}
/>

            </div>
        </div>
      </div>
      </div>
  
    </>
  )
}

export default App
