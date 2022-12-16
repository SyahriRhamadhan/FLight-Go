import { Navbars, EditProfile } from "../../components"
import { Helmet } from 'react-helmet';
import Heroimage from '../../assets/images/background.png'
const EditProfilePage = () => {

    return (
        <div style={{ backgroundImage: `url(${Heroimage}`, height: '100vh' }}>
            <Helmet>
                <title>Edit Profile Page</title>
            </Helmet>
            <div>
                <Navbars />
                <EditProfile/>
            </div>
        </div>
    )
}
export default EditProfilePage