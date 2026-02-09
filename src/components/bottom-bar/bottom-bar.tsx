import { RoutePath } from '../../const';
import { TPurpose } from '../../types/earplags';
import { useNavigate } from 'react-router-dom';
import { MouseEventHandler } from 'react';

type TPropsBottomBar = {
  selectedPurpose: TPurpose | null;
}

function BottomBar({selectedPurpose}: TPropsBottomBar) {
  const navigate = useNavigate();

  const handleClickBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    navigate(RoutePath.Constructor);
  };

  return(
    <div className={`bottom-bar ${selectedPurpose ? 'is-active' : ''}`}>
      <div className="bottom-bar-content">
        <h2 className="bottom-bar__title">
          {selectedPurpose ? `Беруши ${selectedPurpose.title}` : 'Назначение берушей' }
        </h2>
        <button onClick={handleClickBtn} className="bottom-bar__btn" type="button">Далее</button>
      </div>
    </div>
  );
}

export default BottomBar;
