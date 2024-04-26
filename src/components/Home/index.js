import { Redirect } from "react-router-dom"
import Header from "../Header"
import "./index.css"
import Cookies from "js-cookie"

const Home=()=>{
    const jwtToken=Cookies.get("jwt_token")
    if(jwtToken===undefined){
        return <Redirect to="/login"/>
    }
    return(<div className="home-container">
        <div className="home-container__header-container"><Header/></div>
        <div className="home-container__inner-container">
            <div className="inner-container__content-container">
                <h1 className="content-container__heading">Cloths That Get You <br/>Noticed</h1>
                <div className="inner-container__img-container sm-device">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="clothes that get you noticed"/>
            </div>
                <p className="content-container__description">Fashion is part of the daily air  and it does not quite help that
                it changes all the time. Clothes have always been a marker of the era and we are in a revoluation.Your fashion makes you been seen 
                and hard that way you are.So,celebrate the seasons new and exciting fashion in your own way.
                </p>
                <button type="button" className="shopnow-btn">Shop Now</button>
            </div>
            <div className="inner-container__img-container lg-device">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="clothes that get you noticed"/>
            </div>
        </div>
    </div>)
}

export default Home
