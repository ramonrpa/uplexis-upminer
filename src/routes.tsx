import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '~/pages/Home';
import AppInfo from './pages/AppInfo';
import Carousel from './components/Carousel';
import { useAppSelector } from './store/hooks';
import Banner from './components/Banner';
import { useEffect } from 'react';
import { getBanners } from './services/applications.service';

const Routes = () => {
  const banners = useAppSelector((state) => state.banners);

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <BrowserRouter>
      <Carousel
        values={banners.map((item, index) => (
          <Banner key={index} {...item} />
        ))}
      />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/appInfo" component={AppInfo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
