import React from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import User from "../../server/model/userSchema";

const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  fname: {
      type: String,
      required: true
  },
  lname: {
      type: String,
      required: true
  },
  username: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  phone: {
      type: Number,
      required: true
  },
  password: {
      type: String,
     required:true
 },
  cpassword: {
      type: String,
     required:true
 },
})



class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ users: data });
        console.log("Data has been recieved");
        console.log(data);
      })
      .catch(() => {
        alert("Error retriving data");
      });
    };
    displayLogPost = (users) => {
      if (!users.lenght) return null;
    };
    
    
    render() {
      
      const User = mongoose.model('USER', userSchema);
      
      const handleAccept =() =>{
      console.log("you clicked it")
    }
const handleDecline = 
  User.deleteOne({username: 'hashim123'})
  .then(d => {
      console.log("Removed succesfully")
  })
  .catch(error => {
      console.log(error);
  });




    const { users } = this.state;
    return (
      <div className="das">
        {users.map((user, index) => (
          <div key={index}>
            <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={handleAccept}>Accept</button>
                    <button onClick={handleDecline}>Decline</button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
