import './coffee-header.css';
import HeaderItems from '../coffee-header-items/coffee-header-items';
import HeaderMainItems from '../coffee-header-main-items/coffee-header-main-items';

const Header = () => {
	return (
		<div className="coffee-header">
			<img className="img-bg" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="coffee" />
			<HeaderItems />
			<HeaderMainItems />
		</div>
	);
};

export default Header;