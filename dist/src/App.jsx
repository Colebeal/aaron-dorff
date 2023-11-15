import Greet from './components/Greet.jsx'
import Profiles from './components/Profiles.jsx'
import { motion as m, AnimatePresence } from 'framer-motion'

function App() {
	return (
		<AnimatePresence>
			<Profiles />
		</AnimatePresence>
	)
}

export default App
