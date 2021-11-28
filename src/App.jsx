import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductDescription from './pages/product_description/ProductDescription';
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Dashboard from './dashboard/Dashboard';
import History from './dashboard/History';
import Balances from './dashboard/Balances';
import Cards from './dashboard/Cards';
import Receipts from './dashboard/Receipts';
import Inventory from './dashboard/Inventory';
import StoreInfo from './dashboard/StoreInfo';
import AddProduct from './dashboard/AddProduct/AddProduct';
import About from './pages/About/About';
import Jobs from './pages/Jobs/Jobs';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Explore from './pages/Explore/Explore';
import UserSettings from './dashboard/UserSettings';
import SingleStore from './pages/Single_Store/SingleStore';
import Admin from './admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/product/description/:id' component={ProductDescription} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard/history' component={History} />
        <Route path='/dashboard/balances' component={Balances} />
        <Route path='/dashboard/cards' component={Cards} />
        <Route path='/dashboard/receipts' component={Receipts} />
        <Route path='/dashboard/settings' component={StoreInfo} />
        <Route path='/dashboard/usersettings' component={UserSettings} />
        <Route path='/dashboard/addproduct' component={AddProduct} />
        <Route path='/dashboard/inventory' component={Inventory} />
        <Route path='/stores/single/:id' component={SingleStore} />

        //admin dashboard
        <Route path='/admin/home' component={Admin} />
        <Route path='/admin/ads' component={Admin} />
        <Route path='/admin/stores' component={Admin} />
        <Route path='/admin/users' component={Admin} />
        <Route path='/admin/products' component={Admin} />

        <Route path='/explore' component={Explore} />
        <Route path='/about' component={About} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/explore' component={Home} />
        <Route exact path='/jobs' component={Jobs} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
