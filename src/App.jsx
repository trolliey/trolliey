import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
import ManageAds from './admin/ManageAds';
import ManageStores from './admin/ManageStores';
import ManageUsers from './admin/ManageUsers';
import ManageProducts from './admin/ManageProducts';
import AdminSettings from './admin/AdminSettings';
import AdminLogin from './admin/AdminLogin';
import AdminRoute from './hocs/AdminRoute';
import AboutStore from './pages/Single_Store/AboutStore';
import StoreReviews from './pages/Single_Store/StoreReviews';
import Categories from './pages/categories/Categories';
import EditProduct from './dashboard/EditProduct/EditProduct';
import Payment from './pages/Payment/Payment';
import ManageCategories from './admin/ManageCategories';
import Compare from './pages/Compare/Compare';
import ComingSoon from './pages/coming_soon/ComingSoon';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ComingSoon} />
        <Route path='/product/description/:id' component={ProductDescription} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/payment' component={Payment} />

        {/* // user dashboard routes */}
        <Route exact path='/dashboard/history' component={History} />
        <Route exact path='/dashboard/balances' component={Balances} />
        <Route exact path='/dashboard/cards' component={Cards} />
        <Route exact path='/dashboard/receipts' component={Receipts} />
        <Route exact path='/dashboard/settings' component={StoreInfo} />
        <Route exact path='/dashboard/usersettings' component={UserSettings} />
        <Route exact path='/dashboard/addproduct' component={AddProduct} />
        <Route exact path='/dashboard/inventory' component={Inventory} />
        <Route exact path='/dashboard/edit-product/:id' component={EditProduct} />
        <Route exact path='/dashboard' component={Dashboard} />

        {/* //store page */}
        <Route path='/stores/single/about/:id' component={AboutStore} />
        <Route path='/stores/single/reviews/:id' component={StoreReviews} />
        <Route path='/stores/single/:id' component={SingleStore} />

        {/* //admin dashboard */}
        <AdminRoute path='/admin/home' component={Admin} />
        <AdminRoute path='/admin/ads' component={ManageAds} />
        <AdminRoute path='/admin/stores' component={ManageStores} />
        <AdminRoute path='/admin/users' component={ManageUsers} />
        <AdminRoute path='/admin/products' component={ManageProducts} />
        <AdminRoute path='/admin/settings' component={AdminSettings} />
        <AdminRoute path='/admin/categories' component={ManageCategories} />
        <Route exact path='/admin' component={AdminLogin} />

        <Route path='/compare' component={Compare} />
        <Route path='/categories' component={Categories} />
        <Route path='/explore' component={Explore} />
        <Route path='/about' component={About} />
        <Route exact path='/explore' component={Home} />
        <Route exact path='/jobs' component={Jobs} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
