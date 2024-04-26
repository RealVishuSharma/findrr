
import Link from "next/link"

import Header from "../header/header"
// import Home from "../home/page"
// import Profile from "../profile/page"
// import Jobs from "../jobs/page"
// import Discover from "../discover/page"
// import Applied from "../applied/page"

// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false



const page = () => {
  return (
    <>
      <Header/>
      <div className="flex w-full h-screen bg-red-500">
        <div className="flex flex-col w-48 bg-stone-700 justify-start items-center">
        <div className="h-96 w-48 bg-cyan-500  flex items-center flex-col justify-around">
          <Link href="/home">
            <p>Home</p>
          </Link>

          <Link href="/profile">
            <p>Profile</p>
          </Link>

          <Link href="/jobs">
            <p>Jobs</p>
          </Link>

          <Link href="/applied">
            <p>Applied</p>
          </Link>

          <Link href="/discover">
            <p>Discover</p>
          </Link>

        </div>

        <div className=" flex items-end justify-center w-48 h-64 bg-amber-700">
          <Link href="#">
          <p>Refer a Friend</p>
          </Link>
        </div>
      </div>

        <div className="w-3/4 h-screen bg-purple-900">

        </div>

      </div>
    </>
  )
}

export default page
