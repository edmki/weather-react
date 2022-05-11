import './Header.css';
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {
	return (
		<header className="Header">
			{/* <div className='Header-menu'><MenuIcon/></div> */}
			<div className='Header-title'>HOJE</div>
			<div className='Header-switch'>
				<LightModeIcon/><Switch onChange={(event) => props.onColorModeChange(event.target.checked ? "dark" : "light")} defaultChecked /><DarkModeIcon/>
			</div>
		</header>
	);
}

export default Header;