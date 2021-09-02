import React, {useState } from 'react';




const App= () => {
    const [registration, setregistration] = useState(
        {
            username:"",
            dob:"",
            gender:"",
            mobile:"",
            email:""

        }
    );
    
    const [records, setRecords] = useState([])

    const handleInput =(e)=>{
         const name = e.target.name;
         const value = e.target.value;
         console.log(name , value);

         setregistration({...registration, [name]:value })

    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord = {...registration, id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord])
        console.log(records);

        setregistration({username:"", dob:"", gender:"",mobile:"",email:""})
    }
    return (
<>
       <div className="main">
       <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">FullName</label><br/>
                <input type="text" autoComplete="off"
                value={registration.username}
                onChange={handleInput}
                name="username" id="username"/>
            </div>
            <br/>
            <div>
                <label htmlFor="dob">DOB</label><br/>
                <input type="text" autoComplete="off"
                value={registration.dob}
                onChange={handleInput}
                name="dob" id="dob"/>
            </div>
            <br/>
            <div>
                <label htmlFor="gender">Gender</label><br/>
                <input type="text" autoComplete="off"
                value={registration.gender}
                onChange={handleInput}
                name="gender" id="gender"/>
            </div>
            <br/>
            <div>
                <label htmlFor="moible">Mobile</label><br/>
                <input type="number" autoComplete="off"
                value={registration.mobile}
                onChange={handleInput}
                name="mobile" id="mobile"/>
            </div>
            <br/>
            <div>
                <label htmlFor="email">Email</label><br/>
                <input type="text" autoComplete="off"
                value={registration.email}
                onChange={handleInput}
                name="email" id="email"/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


       </div>
       <div>
           {
               records.map((curel) =>{
                   return(
                       <div>
                        <p> {curel.username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {curel.dob}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {curel.gender}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {curel.mobile}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {curel.email}</p>
                       </div>
                   )
               })
           }
       </div>



</>


        );
    }
    
    export default App;