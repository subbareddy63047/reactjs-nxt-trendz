import { withRouter } from "react-router-dom"

import "./index.css"
import Cookies from "js-cookie"

const Header=(props)=>{
    const logout=()=>{
        const {history}=props
        Cookies.remove("jwt_token")
       history.replace("/login")
    }
    return (<>
    <div className="header-container">
        <div className="header-container__logo-container">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"/>
        </div>
        <nav className="header-container__nav-container">
        <p>Home</p>
        <p>Products</p>
        <p>Cart</p>
        <button type="button" className="logout-btn" onClick={logout}>Logout</button>
        </nav>
        <button type="button" className="logout-sm-btn" onClick={logout}>
         <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png" alt="nav logout" className="logout-sm"/>
        </button>
    </div>
    <div className="header-container__sm-nav-container">
        <button type="button"><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png" alt="nav home"/></button>
        <button type="button"><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png" alt="nav products"/></button>
        <button type="button"><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png" alt="nav cart"/></button>
    </div>
    </>)
}
export default withRouter(Header)