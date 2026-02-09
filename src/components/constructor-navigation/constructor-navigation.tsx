import { TPurpose } from '../../types/earplags';

type TPropsBottomBar = {
  selectedPurpose: TPurpose | null;
}

function ConstructorNavigation({selectedPurpose}: TPropsBottomBar) {
  const activeClass = selectedPurpose ? 'active' : '';

  return (
    <div className="constructor-navigation">
      <button className="constructor-navigation__step active" type="button">
        <span className="constructor-navigation__step-count">1</span>
        <span className="constructor-navigation__step-title">Назначение</span>
      </button>
      <button className={`constructor-navigation__step ${activeClass}`} type="button">
        <span className="constructor-navigation__step-count">2</span>
        <span className="constructor-navigation__step-title">Параметры</span>
      </button>
      <button className="constructor-navigation__step" type="button">
        <span className="constructor-navigation__step-count">3</span>
        <span className="constructor-navigation__step-title">Слепки</span>
      </button>
    </div>
  );
}

export default ConstructorNavigation;
