import "./App.css";
import Header from "./components/Header";
import { TextField, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";
import User from "./components/User";
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [form, setForm] = useState({})
  const [state, setState] = useState(2)
  const [userList, setUserList] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idstarts=1001`)
      const res = await get.json()

      setData(res)
      console.log(res)
    }

    getData()
  }, [state])

  const addUser = () => {
    if (!(form.name === "" || form.email === "")) {
      setUserList([...userList, form])
      setForm({ name: "", email: "" })
      // console.log(userList)
    }
    else {
      alert("Insert Values into TextBox First.")
    }
  }

  const handleDown = (e) => {
    if (e.key === "Enter") {
      addUser()
    }
  }

  const deleteUser = (index) => {
    let tempArr = data
    tempArr.splice(index, 1);
    setData([...tempArr])
    setState(tempArr.length)
  }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onKeyDown={(e) => handleDown(e)}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            id="outlined-basic"
            label="Name" variant="outlined" />
          <TextField
            value={form.email}
            onKeyDown={(e) => handleDown(e)}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            id="outlined-basic"
            label="Email" variant="outlined"
          />
          <Button variant="contained" onClick={addUser}>
            <AddIcon /> Add Local Data
          </Button>

          <Button
            onClick={() => setState(state + 2)}
            variant="contained"
            color="error">
            <AddIcon />
            Fetch API Data ({state})
          </Button>
        </Stack>
      </div>



      <div className="userList">
        <div className="user">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((ele, idx) => {
            return (
              <div className="user" key={idx}>
                <h4>{ele.firstName} {ele.lastName}</h4>
                <h4>{ele.email}</h4>
                <Button
                  onClick={() => deleteUser(idx)}
                  variant="contained"
                  color="error">
                  <DeleteIcon />
                </Button>
              </div>
            )
          })
        }
        {
          userList.map((e, index) => {
            return (
              <>
                <User
                  key={index}
                  name={e.name}
                  email={e.email}
                  index={index}
                  userList={userList}
                  setUserList={setUserList}
                />
              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
