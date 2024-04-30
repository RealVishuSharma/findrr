
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <div className="flex flex-col w-48  justify-start items-center">
        <div className="h-96 w-48  flex items-center flex-col justify-around">
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

        <div className=" flex items-end justify-center w-48 h-64">
          <Link href="#">
          <p>Refer a Friend</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
