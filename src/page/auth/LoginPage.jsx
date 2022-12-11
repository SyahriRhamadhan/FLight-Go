import { Login } from "../../components"
import { Helmet } from 'react-helmet';
import Heroimage from '../../assets/images/background.png'
const LoginPage =()=>{
    return(
        <div className="justify-content-center d-flex" style={{backgroundImage: `url(${Heroimage}`, height:'100vh'}}>
            <Helmet>
                <title>Login Page</title>
            </Helmet>
            <div>
                <Login/>
            </div>
        </div>
    )
}
export default LoginPage