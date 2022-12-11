import { Register } from "../../components"
import { Helmet } from 'react-helmet';
import Heroimage from '../../assets/images/background.png'
const RegisterPage =()=>{
    return(
        <div className="justify-content-center d-flex" style={{backgroundImage: `url(${Heroimage}`, height:'100vh'}}>
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div>
                <Register/>
            </div>
        </div>
    )
}
export default RegisterPage