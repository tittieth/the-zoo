import { Link } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { formatDateTime, handleImageError } from '../helpers';

interface IProps {
  animal: IAnimal | undefined;
  feedAnimal: () => void;
  handleImgClick: () => void;
}

export const AnimalCard = (props: IProps) => {
  return (
    <>
      <div className="button-wrapper">
        <Link to="/animals">
          <img
            src="/public/arrow-left.png"
            height={70}
            alt="arrow back"
            className="arrow"
          ></img>
        </Link>
      </div>
      <div className="animal-presentation-wrapper">
        <div className="wrapper">
          <div className="animal-info">
            <h1>{props.animal?.name}</h1>
            <p>
              Född: {props.animal?.yearOfBirth}
              <br />
              Matad: {props.animal ? formatDateTime(props.animal.lastFed) : ''}
              <br />
              Status: {props.animal?.hungerLevel}
            </p>
          </div>
          <div>
            <img
              onClick={props.handleImgClick}
              src={props.animal?.imageUrl}
              width={150}
              height={150}
              className="sml-img"
              onError={handleImageError}
              loading="lazy"
            ></img>
          </div>
        </div>
        <div className="animal-desc">
          <p>{props.animal?.longDescription}</p>
          <button
            className="feed-btn"
            onClick={props.feedAnimal}
            disabled={props.animal?.isFed}
          >
            {props.animal?.isFed ? 'Fått mat' : 'Mata mig!'}
          </button>
        </div>
      </div>
    </>
  );
};
