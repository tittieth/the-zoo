import { handleImageError } from '../helpers';

interface IModalProps {
  imageSrc: string;
  onClose: () => void;
}

export const ModalImage = (props: IModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img
          src={props.imageSrc}
          alt="Larger image of the animal"
          onError={handleImageError}
        />
        <button onClick={props.onClose}>
          <img width="50" height="50" src="/the-zoo/icons8-x-100.png" alt="x" />
        </button>
      </div>
    </div>
  );
};
