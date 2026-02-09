import { TPurpose } from '../../types/earplags';
import { useState } from 'react';
import { MouseEventHandler } from 'react';

type TPropsPurpose = {
  purpose: TPurpose;
  isActive: boolean;
  onClick: () => void;
};

function Purpose({ purpose, onClick, isActive }: TPropsPurpose) {
  const [isOpen, setIsOpen] = useState(false);
  const { id, title, description, imageUrl } = purpose;

  const handleOpenDescriptionClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOnMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li
      id={id}
      className={`purpose-item ${isActive ? 'is-selected' : ''}`}
      onClick={onClick}
      onMouseLeave={handleOnMouseLeave}
    >
      <h3 className="purpose-item__title">{title}</h3>

      <div className={`purpose-item-content ${isOpen ? 'is-active' : ''}`}>
        <img
          className="purpose-item-content__img"
          src={imageUrl}
          alt={title}
        />
        <p className="purpose-item-content__text">{description}</p>
      </div>

      <button
        className="purpose-item__btn"
        type="button"
        onClick={handleOpenDescriptionClick}
      >
        <span className="purpose-item__btn-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M7.77419 1V14.5484M14.5484 7.77419H1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <span className="purpose-item__btn-text">
          {isOpen ? 'Скрыть описание' : 'Посмотреть описание'}
        </span>
      </button>
    </li>
  );
}


export default Purpose;
