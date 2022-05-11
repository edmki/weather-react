import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import CityCardList from './components/CityCardList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
	const [colorMode, setColorMode] = useState("dark");

	const theme = createTheme({
		palette: {
			mode: colorMode,
			...(colorMode === "light" && {
				background: {
					default: "#efefef"
				}
			}),
		},
	});

	return (
		<ThemeProvider theme={theme} >
			<div className={`App ${colorMode}`}>
				<CssBaseline />
				<Header onColorModeChange={setColorMode} />
				<CityCardList />
			</div>
		</ThemeProvider>
	);
}

export default App;