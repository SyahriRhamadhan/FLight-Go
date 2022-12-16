import { Navbars, Profile } from "../../components"
import { Helmet } from 'react-helmet';
import Heroimage from '../../assets/images/background.png'
const ProfilePage = () => {

    return (
        <div style={{ backgroundImage: `url(${Heroimage}`, height: '100vh' }}>
            <Helmet>
                <title>ProfilePage</title>
            </Helmet>
            <div>
                <Navbars />
                <Profile />
            </div>
        </div>
    )
}
export default ProfilePage