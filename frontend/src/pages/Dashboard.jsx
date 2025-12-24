import { Appbar } from "../component/Appbar"
import { Users } from "../component/User"
import { Balance } from "../component/Balance"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}