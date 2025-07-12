import Routes from './Routes';
import getOS from './utils/getOS.util';

const App = () => {
	getOS();

	return <Routes />;
};

export default App;
