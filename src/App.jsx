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
import Help from './pages/help/Help';
import Chat from './pages/Chat/Chat';
import BecomeASellerAd from './pages/BecomeASellerAd/BecomeASellerAd';
import CreateStore from './pages/CreateStore/CreateStore';
import FinaliseStoreRegistry from './pages/CreateStore/FinaliseStoreRegistry';
import Orders from './dashboard/Orders';
import BuyerDashboardHome from './dashboard/BuyerDashboardHome';
import BuyerOrders from './dashboard/BuyerOrders';
import TotalProducts from './dashboard/TotalProducts';
import SubCategories from './pages/sub_categories/SubCategories';
import StoreApplications from './admin/StoreApplications';
import ApplicationReview from './admin/StoreApplications/ApplicationReview';
import VerifyEmail from './pages/Auth/VerifyEmail';
import Reports from './dashboard/Reports';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/payment' component={Payment} />
                <Route path='/verify/:id' component={VerifyEmail} />
                <Route path='/help' component={Help} />
            
                {/* //product description */}
                <Route path='/product/description/:id' component={ProductDescription} />

                {/* // user dashboard routes */}
                <Route exact path='/dashboard/history' component={History} />
                <Route exact path='/dashboard/balances' component={Balances} />
                <Route exact path='/dashboard/cards' component={Cards} />
                <Route exact path='/dashboard/receipts' component={Receipts} />
                <Route exact path='/dashboard/reports' component={Reports} />
                <Route exact path='/dashboard/settings' component={StoreInfo} />
                <Route exact path='/dashboard/orders' component={Orders} />
                <Route exact path='/dashboard/usersettings' component={UserSettings} />
                <Route exact path='/dashboard/addproduct' component={AddProduct} />
                <Route exact path='/dashboard/inventory' component={Inventory} />
                <Route exact path='/dashboard/edit-product/:id' component={EditProduct} />
                <Route exact path='/dashboard' component={Dashboard} />

                {/* //dashboard for buyer */}
                <Route exact path='/dashboard/buyer-home' component={BuyerDashboardHome} />
                <Route exact path='/dashboard/buyer-orders' component={BuyerOrders} />
                <Route exact path='/dashboard/buyer-products' component={TotalProducts} />

                {/* //store page */}
                <Route path='/stores/single/about/:id' component={AboutStore} />
                <Route path='/stores/single/reviews/:id' component={StoreReviews} />
                <Route path='/stores/single/:id' component={SingleStore} />

                {/* //for chat  */}
                <Route path='/chat/:id' component={Chat} />
                <Route path='/chat' component={Chat} />

                {/* //admin dashboard */}
                <AdminRoute path='/admin/home' component={Admin} />
                <AdminRoute path='/admin/ads' component={ManageAds} />
                <AdminRoute path='/admin/stores' component={ManageStores} />
                <AdminRoute path='/admin/users' component={ManageUsers} />
                <AdminRoute path='/admin/products' component={ManageProducts} />
                <AdminRoute path='/admin/settings' component={AdminSettings} />
                <AdminRoute path='/admin/categories' component={ManageCategories} />
                <AdminRoute path='/admin/manage-applications/review-application/:id' component={ApplicationReview} />
                <AdminRoute path='/admin/manage-applications' component={StoreApplications} />
                <Route exact path='/admin' component={AdminLogin} />

                <Route path='/store-created' component={FinaliseStoreRegistry} />
                <Route path='/create-store' component={CreateStore} />
                <Route path='/become-a-seller' component={BecomeASellerAd} />
                <Route path='/compare' component={Compare} />
                <Route exact path='/sub-category/:category' component={SubCategories} />
                <Route exact path='/categories' component={Categories} />
                <Route path='/about' component={About} />
                <Route exact path='/jobs' component={Jobs} />
                <Route exact path='/explore' component={Explore} />
                <Route exact path='/' component={Home} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;