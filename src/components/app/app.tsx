import bannerInfo, { RoutePath } from '../../const';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PurposePage from '../../pages/purposePage/purposePage';
import ConstructorPage from '../../pages/constructorPage/constructorPage';
import CheckoutPage from '../../pages/checkoutPage/checkoutPage';
import { TPurposes } from '../../types/earplags';

type TPropsApp = {
  purposes: TPurposes;
}

function App({purposes}: TPropsApp) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={RoutePath.Purpose } replace/>} />
        <Route path={RoutePath.Purpose} element={<PurposePage purposes={purposes} title={bannerInfo.title} imageUrl={bannerInfo.imageUrl}/>} />
        <Route path={RoutePath.Constructor} element={<ConstructorPage/>} />
        <Route path={RoutePath.Constructor} element={< CheckoutPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
