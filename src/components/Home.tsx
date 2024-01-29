import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Home() {
  useEffect(() => {
    gsap.fromTo('.background-img', { y: '100%' }, { y: '0%', duration: 2 });
  }, []);

  return (
    <>
      <div className="firstpage-wrapper">
        <div className="start-wrapper">
          <h1>The Zoo</h1>
          <Link to="/animals" className="start-btn">
            Start
          </Link>
        </div>
        <div className="background-img-wrapper">
          <div className="background-img"></div>
        </div>
      </div>
    </>
  );
}
