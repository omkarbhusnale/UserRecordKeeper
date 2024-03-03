import "./App.css";
import Header from "./components/Header";
import { TextField, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import User from "./components/User";
// import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [form, setForm] = useState({})
  const [userList, setUserList] = useState([])

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

  // const deleteUser = (index) => {
  //   let tempArr = userList
  //   tempArr.splice(index, 1);
  //   setUserList([...tempArr])
  // }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            id="outlined-basic"
            label="Name" variant="outlined" />
          <TextField
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            id="outlined-basic"
            label="Email" variant="outlined"
          />
          <Button variant="contained" onClick={addUser}>
            <AddIcon />
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
                {/* <div className="user" key={index}>
                  <h4>{e.name}</h4>
                  <h4>{e.email}</h4>
                  <Button
                    onClick={() => deleteUser(index)}
                    variant="contained"
                    color="error">
                    <DeleteIcon />
                  </Button>
                </div> */}
              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
