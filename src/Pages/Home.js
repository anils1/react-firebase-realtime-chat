import Chats from "../components/Chats"
import Search from "../components/Search"
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"


const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}
export default Home