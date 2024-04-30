
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <div className="flex flex-col w-48  justify-start items-center">
        <div className="h-96 w-48  flex items-center flex-col justify-around">
          <Link href="/company/post">
            <p>Post a Job</p>
          </Link>

          <Link href="/company/dashboard">
            <p>Dashboard</p>
          </Link>

          <Link href="/company/saved">
            <p>Saved Candidates</p>
          </Link>

          <Link href="/company/profile">
            <p>Profile</p>
          </Link>

          <Link href="/company/pricing">
            <p>Pricing and Plans</p>
          </Link>

        </div>

        <div className=" flex items-end justify-center w-48 h-64">
          <Link href="company/feedback">
          <p>Feedback and Review</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
