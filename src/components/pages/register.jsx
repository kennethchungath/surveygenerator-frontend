// import React from "react";
// import axios from 'axios';
// // import "./style.scss";

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
//     return valid;
// }

// export class Register extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             username: null,
//             emailID: null,
//             password: null,
//             confirmpassword: null,
//             formErrors: {
//                 username: "",
//                 emailID: "",
//                 confirmpassword: "",
//                 password: ""
//             }
//         };
//     }

//     handleSubmit = e => {
//         e.preventDefault(); //Stops anything from propogating up
//         if(formValid(this.state))
//         {
//             console.log(`
//             --Entering--
//             Username: ${this.state.username}
//             Email ID: ${this.state.emailID}
//             Confirm Password: ${this.state.confirmpassword}
//             Password: ${this.state.password}
//             `);
//             const apiurl = "http://localhost:8080/registration"+"?username="+this.state.username+"&email="+this.state.emailID+"&password="+this.state.password+"&passwordConfirm="+this.state.confirmpassword;
//             axios.post(apiurl).then(response => {
//                 const result = response.data;
//                 console.log(response.data)
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
//         console.log("Hello world");
//         const { formErrors } = this.state;
//         return (
//         <div className="base-container">
//             <div className="header">Register</div>
//             <div className="content">
//                 <div className="form">
//                     <div className="form-group">
//                         <label htmlFor="UserName">UserName</label>
//                         <input type="text" 
//                         name="username" 
//                         className={formErrors.username.length > 0 ? "error" : null} 
//                         placeholder="UserName" 
//                         onChange={this.handleChange}/>
//                         {formErrors.username.length > 0 && (
//                             <span className="errorMsg">{formErrors.username}</span>
//                         )}
//                     </div>
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
//                     <div className="form-group">
//                         <label htmlFor="ConfirmPassword">Confirm Password</label>
//                         <input type="password" 
//                         name="confirmpassword" 
//                         className={formErrors.confirmpassword.length > 0 ? "error" : null} 
//                         placeholder="ConfirmPassword" 
//                         onChange={this.handleChange}/>
//                         {formErrors.confirmpassword.length > 0 && (
//                             <span className="errorMsg">{formErrors.confirmpassword}</span>
//                         )}
//                     </div>
//                     <button type = "button" className="btn" onClick ={this.handleSubmit}>
//                     Submit
//                     </button>
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }

import React, { Component } from "react";
import axios from 'axios';

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
    return valid;
}

export default class SignUp extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username: null,
            emailID: null,
            password: null,
            confirmpassword: null,
            formErrors: {
                username: "",
                emailID: "",
                confirmpassword: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault(); //Stops anything from propogating up
        if(formValid(this.state))
        {
            console.log(`
            --Entering--
            Username: ${this.state.username}
            Email ID: ${this.state.emailID}
            Confirm Password: ${this.state.confirmpassword}
            Password: ${this.state.password}
            `);
            const apiurl = "http://localhost:8080/registration"+"?username="+this.state.username+"&email="+this.state.emailID+"&password="+this.state.password+"&passwordConfirm="+this.state.confirmpassword;
            axios.post(apiurl).then(response => {
                const result = response.data;
                console.log(response.data)
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
        const { formErrors } = this.state;
        return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" /*className={formErrors.username.length > 0 ? "error" : null}*/  className="form-control" placeholder="First name" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="emailID" className="form-control" placeholder="Enter email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmpassword" className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick ={this.handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/sign-in">Sign in</a>
                </p>
            </form>
        </div>
        </div>
        );
    }
}