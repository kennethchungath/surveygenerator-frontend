// import React, {useState} from "react";
// import axios from 'axios';
// import ReactDom from "react-dom";
// import { Register } from "./register";
// import { BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import history from '../../history';
// import "./style.scss";
// import Navigationbar from './../Navbar'
// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   );

// const formValid = ({formErrors, ...rest}) =>
// {
//     let valid = true;
//     //checks if values in formerrors is populated or not if Yes then we found an error
//     Object.values(formErrors).forEach(val =>{
//         val.length > 0 && (valid = false)
//     });
//     Object.values(rest).forEach(val =>{
//         val == null && (valid = false)
//     });
//     console.log(`This is the state of validity:${valid}`);
//     return valid;
// }

// // const [notLoggedIn, setNotLoggedIn] = useState(true);

// export class Login extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             emailID: "John Doe",
//             password: null,
//             formErrors: {
//                 emailID: "",
//                 password: ""
//             },
//             notLoggedIn: true
//         };
//     }

//     // const email = this.state.emailID
//     handleLogin = e => {
//         e.preventDefault(); //Stops anything from propogating up
//         if(formValid(this.state))
//         {
//             console.log(`
//             --Entering--
//             Email ID: ${this.state.emailID}
//             Password: ${this.state.password}
//             `);
//             //Here I will have to make a call to the backend api endpoint
//             const apiurl = "http://localhost:8080/logincreds"+"?username="+this.state.emailID+"&password="+this.state.password;
//             console.log(`${apiurl}`)
//             axios.get(apiurl).then(response => {
//                 // const result = response.data;
//                 // console.log(response.data)
//                 if (response.data === "SUCCESS"){
//                     this.state.notLoggedIn = false
//                 }
//             })
//         }
//         else{
//             console.error('Invalid Information Entered');
//         }
//     };

//     handleChange = e => {
//         e.preventDefault();

//         const{ name, value} = e.target; //name field and value is actual what is typed in

//         let formErrors = this.state.formErrors;

//         switch(name)
//         {
//             case "Email_ID":
//                 formErrors.emailID = emailRegex.test(value) ?
//                 "" : "Invalid Email-ID entered";
//                 break;
//             case "Password":
//                 formErrors.password = value.length < 6 ?
//                 "Minimum 6 characters required" : "";
//                 break;
//             default:
//                     break;
//         }
//         this.setState({ formErrors, [name]: value}, () => console.log(this.state));
//     }

//     render()
//     {
//         const { formErrors } = this.state;
//         return (
//         <div>
//         {this.state.notLoggedIn && <div className="base-container">
//             <div className="header">Login</div>
//             <div className="content">
//                 <div className="form">
//                     <div className="form-group">
//                         <label htmlFor="Email_ID">Email-ID</label>
//                         <input type="text" 
//                         name="emailID" 
//                         className={formErrors.emailID.length > 0 ? "error" : null} 
//                         placeholder="Email_ID" 
//                         onChange={this.handleChange}/>
//                         {formErrors.emailID.length > 0 && (
//                             <span className="errorMsg">{formErrors.emailID}</span>
//                         )}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="Password">Password</label>
//                         <input type="password" 
//                         name="password" 
//                         className={formErrors.password.length > 0 ? "error" : null} 
//                         placeholder="Password" 
//                         onChange={this.handleChange}/>
//                         {formErrors.password.length > 0 && (
//                             <span className="errorMsg">{formErrors.password}</span>
//                         )}
//                     </div>
//                     <button type = "button" className="btn" onClick ={this.handleLogin}>
//                     Login
//                     </button>
//                     <button type = "button" className="btn">
//                     Forgot Password
//                     </button>
//                     {/* <button type = "button" className="btn" onClick={() => <Link to = '/history'></Link>}>
//                     Register
//                     </button> */}
//                     <Link to="/register" >Register</Link>
//                 </div>
//             </div>
//         </div>}
//         {
//             !this.state.notLoggedIn && <Navigationbar email = {this.state.emailID}/>
//         }
//         </div>
//         )
//     }
// }

import React, { Component } from "react";
import axios from 'axios';
import Navigationbar from './../Navbar'

const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
    
    const formValid = ({formErrors, ...rest}) =>
    {
        let valid = true;
        //checks if values in formerrors is populated or not if Yes then we found an error
        Object.values(formErrors).forEach(val =>{
            val.length > 0 && (valid = false)
        });
        Object.values(rest).forEach(val =>{
            val == null && (valid = false)
        });
        console.log(`This is the state of validity:${valid}`);
        return valid;
    }
    
    // const [notLoggedIn, setNotLoggedIn] = useState(true);

export default class Login extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            emailID: "",
            password: null,
            formErrors: {
                emailID: "",
                password: ""
            },
            notLoggedIn: true
        };
    }

    //const email = this.state.emailID
    handleLogin = e => {
        e.preventDefault(); //Stops anything from propogating up
        if(formValid(this.state))
        {
            console.log(`
            --Entering--
            Email ID: ${this.state.emailID}
            Password: ${this.state.password}
            `);
            //Here I will have to make a call to the backend api endpoint
            const apiurl = "http://localhost:8080/logincreds"+"?username="+this.state.emailID+"&password="+this.state.password;
            console.log(`${apiurl}`)
            axios.get(apiurl).then(response => {
                // const result = response.data;
                console.log(response.data)
                if (response.data === "Success"){
                    console.log("ASdasd")
                    // this.state.notLoggedIn = false
                    this.setState({notLoggedIn: false})
                }
            })
        }
        else{
            console.error('Invalid Information Entered');
        }
    };

    handleChange = e => {
        e.preventDefault();

        const{ name, value} = e.target; //name field and value is actual what is typed in

        let formErrors = this.state.formErrors;

        switch(name)
        {
            case "Email_ID":
                formErrors.emailID = emailRegex.test(value) ?
                "" : "Invalid Email-ID entered";
                break;
            case "Password":
                formErrors.password = value.length < 6 ?
                "Minimum 6 characters required" : "";
                break;
            default:
                    break;
        }
        this.setState({ formErrors, [name]: value}, () => console.log(this.state));
    }
    
    render() {
        return (
            <div /*style = {{backgroundColor:"green"}}*/>
            { this.state.notLoggedIn && <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="emailID" className="form-control" placeholder="Enter email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick ={this.handleLogin}>Submit</button>
                <p className="forgot-password text-right">
                    New user? <a href="sign-up">Sign up</a>
                </p>
            </form>
            </div>
            </div>
            }
            {!this.state.notLoggedIn && <Navigationbar email = {this.state.emailID}/>}
            </div>
        );
    }
}