
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/sidebar/Sidebar"
import WelcomeView from '../pages/WelcomeView/WelcomeView';



const UserLayout = () => {
  return (
    <>
    <Navbar />
    <div className="flex">
      <Sidebar/>
      <WelcomeView/>
    </div>
    <Footer />
    </>
  )
}

export default UserLayout;