import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <div className="firstpage-wrapper">
          <div>
            <h1>The Zoo</h1>
            <Link to="/animals" className="start-btn">Start</Link>
          </div>
          <div className="circle">
          </div>
        </div>
    </>
  )
}
