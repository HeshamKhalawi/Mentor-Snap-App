import Logo from "../components/Header/Logo"
import Navigation from "../components/Header/Navigation"
import Login from "../components/Header/Login"
import Register from "../components/Header/Register"
export default function Home() {
  return (
    <div className="min-w-full min-h-screen">
      <div className="flex flex-row justify-between pt-[23px] ml-6 mr-6">
        <Logo/>
        <Navigation/>
        <div className="flex flex-row relative bottom-[5px]">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  )
}
