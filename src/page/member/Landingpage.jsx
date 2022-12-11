import { Navbars, Hero } from "../../components"
import { Helmet } from 'react-helmet';
import Heroimage from '../../assets/images/background.png'
const Landingpage =()=>{
    return(
        <div style={{backgroundImage: `url(${Heroimage}`,height:'100vh'}}>
            <Helmet>
                <title>LandingPage</title>
            </Helmet>
            <div>
                <Navbars/>
                <Hero/>
            </div>
        </div>
    )
}
export default Landingpage