import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <div>Home</div>
        <button><Link to="/animals">Start</Link></button>
    </>
  )
}
