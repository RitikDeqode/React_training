import './App.css';
import React, {useState} from 'react';
const initial_value ={
  name:'',
  email:'',
  DOB:'',
  gender:'',
  profile_pic:'',
  level_of_edu:'',
  password:'',
  confirm_password:''
}

function App() {
  const [inputvalue, setInputvalue] = useState(initial_value);
  const [userinfo, setUserinfo] = useState([]);
  const onchangeHandler = (e) => {
    setInputvalue({...inputvalue,[e.target.name]:e.target.value});
  }

  const onhandleSubmit = (e) =>{
    setUserinfo([...userinfo,inputvalue]);
    setInputvalue(initial_value);
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        Deqode React Assignement
        </header>
        <form>
          <label>
            Name:
            <input type='text' name='name' value={inputvalue.name} onChange={(e)=> onchangeHandler(e)}/>
          </label><br/>
          <label>
            Email:
            <input type='text' name='email' value={inputvalue.email} onChange={(e)=> onchangeHandler(e)}/>
          </label><br/>
          <label>
            Date of birth:
            <input type='date' name='DOB' value={inputvalue.DOB} onChange={(e)=> onchangeHandler(e)}/>
          </label><br/>
          <label>
            Gender:
            <input type='radio' name='gender' value="MALE" onChange={(e)=> onchangeHandler(e)}/>MALE
            <input type='radio' name='gender' value="FEMALE" onChange={(e)=> onchangeHandler(e)}/>FEMALE
          </label><br/>
          <label>
            Profile Pic:
            <input type='file' name='profile_pic'  onChange={(e)=> setInputvalue({...inputvalue,[e.target.name]:e.target.files[0]})}/>
          </label><br/>
          <label>
            Level of education:
            <select name='level_of_edu' onChange={(e)=> onchangeHandler(e)}>
              <option value='None'>None</option>
              <option value='10th'>10th</option>
              <option value='12th'>12th</option>
              <option value='Diploma'>Diploma</option>
              <option value='Graduation'>Graduation</option>
              <option value='Post Graduation'>Post Graduation</option>
            </select>
          </label><br/>
          <label>
            Password:
            <input type='password' name='password' value={inputvalue.password} onChange={(e)=> onchangeHandler(e)}/>
          </label><br/>
          <label>
            Confirm Passowrd:
            <input type='password' name='confirm_password' value={inputvalue.confirm_password} onChange={(e)=> onchangeHandler(e)}/>
          </label><br/>
          <button onClick={(e) => onhandleSubmit(e)}>Submit</button>
        </form>
    </div>
  );
}

export default App;
