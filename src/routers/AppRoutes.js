import Home from '../components/main/Home'
import AdminPage from '../components/main/Admin'
import ShoppingCartContainer from '../containers/ShoppingCartContainer'
import Inventory from '../components/admin/inventory/Inventory'
import ProductForm from '../components/admin/inventory/ProductForm'
import withNavbar from '../components/shop/navbar/withNavbar'
import withSignInHandler from '../containers/withSignInHandler'
import AdminSignIn from '../components/auth/AdminSignIn'
import AdminSignUp from '../components/auth/AdminSignUp'
import StoreSignIn from '../components/auth/StoreSignIn'
import StoreSignUp from '../components/auth/StoreSignUp'

//temp
import Placeholder from '../components/extra/Placeholder'
import Test from '../components/tests/Test'

const HomePage = withNavbar(Home)
const ShoppingCartPage = withNavbar(ShoppingCartContainer)
const StoreSignInPage = withSignInHandler(StoreSignIn)
const AdminSignInPage = withSignInHandler(AdminSignIn)

export {
	HomePage,
	ShoppingCartPage,
	AdminPage,
	Inventory,
	ProductForm,
	StoreSignInPage,
	AdminSignInPage,
	AdminSignUp,
	StoreSignIn,
	StoreSignUp,
	Placeholder,
	Test
}
