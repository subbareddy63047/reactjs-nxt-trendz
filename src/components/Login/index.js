import { Redirect } from "react-router-dom"

import { Component } from "react"
import Cookies from "js-cookie"

import "./index.css"


class Login extends Component{
    state={username:'',password:"",errMsg:"",showErrMsg:false}

    enterUserName=(event)=>{
        this.setState(prevState=>({...prevState,username:event.target.value}))
    }

    enterPassword=(event)=>{
        this.setState(prevState=>({...prevState,password:event.target.value}))
    }

    onSuccessSubmitForm=(jwtToken)=>{
        Cookies.set("jwt_token",jwtToken,{expires:20})
        const {history}=this.props
        history.push("/")
    }

    onFailureSubmitForm=(errMsg)=>{
        this.setState(prevState=>({...prevState,errMsg,showErrMsg:true}))
    }

    submitUserDetails=async(event)=>{
        event.preventDefault()
        const {username,password}=this.state
        const userDetails={username,password}
        const options={
            method:"post",
            body:JSON.stringify(userDetails)
        }
        const response=await fetch("https://apis.ccbp.in/login",options)
        const data=await response.json()
        if(response.ok){
           this.onSuccessSubmitForm(data.jwt_token)
        }else{
            this.onFailureSubmitForm(data.error_msg)
        }

    }

    render(){
        const {username,password,errMsg,showErrMsg}=this.state
        const jwtToken=Cookies.get("jwt_token")
        if(jwtToken !==undefined){
            return <Redirect to="/"/>
        }
        return <div className="login-container">
            <div className="login-container__inner-container">
                <div className="inner-container__logo-container">
                    <div className="form-logo-container sm-device">
                        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"/>
                    </div>
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="website login" className="login-logo"/>
                </div>
                <div className="inner-container__form-container">
                    <div className="form-logo-container lg-device">
                        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"/>
                    </div>
                    <form className="form-container" onSubmit={this.submitUserDetails}>
                        <div className="username-container">
                            <label htmlFor="username" className="username-label">USERNAME</label>
                            <input id="username" placeholder="Enter your name" className="name-input-ele" value={username} onChange={this.enterUserName}/>
                        </div>
                        <div className="username-container">
                            <label htmlFor="password" className="username-label">PASSWORD</label>
                            <input type="password" id="password" placeholder="Enter your password" className="name-input-ele" value={password} onChange={this.enterPassword}/>
                        </div>
                        <button type="submit" className="submit-btn">Login</button>
                        {showErrMsg &&<p className="error-msg">*{errMsg}</p>}
                    </form>
                </div>
            </div>
        </div>
    }


}
export default Login