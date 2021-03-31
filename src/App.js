import React , {useState,useEffect} from "react";
import './App.css';
const Child = () =>{

    useEffect( () => {
    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) 
        .then(data => {

            saveUserData(data)
        
        })
        .catch(err=> console.log(err));

    } , [])

    const [ allUserData , saveUserData ] = useState([]) 

    return(
        <div>
         
            {/* <Header object={object} /> */}
            <h2 style={{textAlign:'center',justifyContent:'center'}}>API DATA</h2>

            <table>
                
            <th>Name</th>
                   <th>Email</th>
                    <th>Username</th>
                <tbody>
                    {
                        allUserData.map( (value,index)=>{
                            return(
                                <tr>
                                <td>
                                {value.name}
                                </td> 
                                <td>
                                {value.email}
                                </td> 
                                <td>
                                {value.username}
                                </td> 
                                 </tr>
                            )

                        } )
                    }
                    
                </tbody>

            </table>

        </div>
    )
}

export default Child;