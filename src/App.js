import React from "react";
import {useState} from "react";
import {useEffect } from 'react';


function App() {

        const [users, setUsers] = useState([])

        const getUsers= async()=>{
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         setUsers(await response.json());
         //const data = await response.json();
         //console.log(data);

         
     
        }

        useEffect(()=>{
          getUsers();
        }, []);
  return (
   <>



      
     <div className="main">

     <table className="table">
    
           <thead>
             <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Body</th>
                
               
               
             </tr>
             </thead>


             {
                users.map((curr) => {
                 return(
                   
                        
                      <tbody>
                          <tr>
                      <td>{curr.id}</td>
                            <td>{curr.title}</td>
                            <td>{curr.body}</td>
                           
                          

                          </tr>
                      </tbody>
                    
                   
                 )

               })
             }

           
      </table>

       </div>
  


   </>
  );
}

export default App;
