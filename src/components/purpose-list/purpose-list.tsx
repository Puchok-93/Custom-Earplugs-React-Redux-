import Purpose from '../purpose/purpose';
import { TPurpose, TPurposes } from '../../types/earplags';

type TPropsPurposeList = {
  purposes: TPurposes;
  onSelect: (purpose: TPurpose) => void;
  selectedPurpose: TPurpose | null;
}

function PurposeList({purposes, onSelect, selectedPurpose}: TPropsPurposeList) {

  return (
    <ul className='purpose-list'>
      {
        purposes.map((purpose: TPurpose): JSX.Element => (
          <Purpose
            purpose={purpose}
            key={purpose.id}
            isActive={selectedPurpose?.id === purpose.id}
            onClick={() => onSelect(purpose)}
          />
        ))
      }
    </ul>
  );
}

export default PurposeList;
