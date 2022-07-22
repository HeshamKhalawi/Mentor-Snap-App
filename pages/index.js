import Logo from "../components/Header/Logo"
import Navigation from "../components/Header/Navigation"
import Sign from "../components/Header/sign"
export default function Home() {
  return (
    <div className="min-w-full min-h-screen">
      <div className="flex flex-row justify-between">
        <div>
          <Logo />
          <Navigation/>
        </div>
        <div>
          <Sign />
        </div>
      </div>
    </div>
  )
}
