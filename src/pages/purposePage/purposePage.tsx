import ConstructorNavigation from '../../components/constructor-navigation/constructor-navigation';
import PurposeList from '../../components/purpose-list/purpose-list';
import { TPurposes, TPurpose } from '../../types/earplags';
import Banner from '../../components/banner/banner';
import BottomBar from '../../components/bottom-bar/bottom-bar';
import { useState } from 'react';

type TPropsPurposePage = {
  purposes: TPurposes;
  title: string;
  imageUrl: string;
};

function PurposePage({purposes, title, imageUrl}: TPropsPurposePage) {
  const [selectedPurpose, setSelectedPurpose] = useState<TPurpose | null>(null);

  const handlePurposeSelect = (purpose: TPurpose) => {
    setSelectedPurpose(purpose);
  };

  return (
    <main>
      <div className="wrapper">
        <ConstructorNavigation selectedPurpose={selectedPurpose} />
        <h1 className="constructor-screen-title">Выберитеназначение берушей</h1>
        <div className="purpose">
          <PurposeList onSelect={handlePurposeSelect} purposes={purposes} selectedPurpose={selectedPurpose} />
        </div>
        <Banner title={title} imageUrl={imageUrl} />
      </div>
      <BottomBar selectedPurpose={selectedPurpose} />
    </main>
  );
}

export default PurposePage;
