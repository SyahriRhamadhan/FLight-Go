import { NavbarsAdmin, ListOrder } from "../../components"
import { Helmet } from 'react-helmet';
const Dashboard = () => {

    return (
        <div>
            <Helmet>
                <title>Dashboard Page</title>
            </Helmet>
            <div>
                <NavbarsAdmin />
                <ListOrder />
            </div>
        </div>
    )
}
export default Dashboard