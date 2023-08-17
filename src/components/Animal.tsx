import { Link } from "react-router-dom";

export default function Animal() {
  return (
    <>
      <div>Animal</div>
      <button><Link to="/animals"><img src="/public/icons8-left-64 (1).png" alt="arrow back" className="arrow"></img></Link></button>
    </>
  )
}
