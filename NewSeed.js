
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const New=()=>{

    const [user,setUser]=useState({
      seed_id:null,
      seed_name:"",
      seed_type:"",
      seed_recommended_period:"",
      seed_recommended_season:"",
      seed_price:"",
      seed_quantity:""
    })
    const change=(e)=>{
      const{name,value}=e.target
      setUser((old)=>{  return{
        ...old,
        [name]:(value)
      }
  }
  )}
  
const navigate = useNavigate()
  const seed =async(e) =>{
    e.preventDefault()
    try{
      await axios.post('http://localhost:1234/insert',user)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
console.log(user)
  return (
      <>
      <div><h1>DETIALS ABOUT SEEDS</h1></div>
      
           <tr>
                <label>SEED_ID</label>
                <td><input onChange={change} type='tel' name='seed_id' placeholder='Enter the Seed ID' value={user.change}/></td>
            </tr>
          
          

         
            <tr>
                <label>SEED_NAME</label>
                <td><input onChange={change} type='text' name='seed_name' placeholder='Enter the Seed Name'value={user.change}/></td>
            </tr>
          

            <tr>
                <label>SEED_TYPE</label>
                <td><input onChange={change} type='text' name='seed_type' placeholder='Enter the Seed Type'value={user.change}/></td>
            </tr>

            <tr>
                <label>SEED_RECOMMENDED_PERIOD</label>
                <td><input onChange={change} type='text' name='seed_recommended_period' placeholder='Enter the recommended period'value={user.change}/></td>
            </tr>
         
          

       
            <tr>
                <label>SEED_RECOMMENDED_SEASON</label>
                <td><input onChange={change} type='text' name='seed_recommended_season' placeholder='Enter the recommended season'value={user.change}/></td>
            </tr>
        
          

          
            <tr>
                <label>SEED_PRICE</label>
                <td><input onChange={change} type='text' name='seed_price' placeholder='Enter the seed price'value={user.change}/></td>
            </tr>
          

            <tr>
                <label>SEED_QUANTITY</label>
                <td><input onChange={change} type='text' name='seed_quantity' placeholder='Enter the seed quantity'value={user.change}/></td>
            </tr>
            
          <div>
          <button className='clear' type='reset' name='clear'>CLEAR</button>
          <button type='submit' onClick={seed}>SUBMIT</button>
          </div>
          
    </>
    )
    }
          
          

export default New;