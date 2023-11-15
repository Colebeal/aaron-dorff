import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RootLayout from './routes/RootLayout.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Photo from './routes/Profiles/Photo.jsx'
import Moto from './routes/Profiles/Moto.jsx'
import Craft from './routes/Profiles/Craft.jsx'
import Talent from './routes/Profiles/Talent.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <App /> },
			{ path: '/photo', element: <Photo /> },
			{ path: '/moto', element: <Moto /> },
			{ path: '/craft', element: <Craft /> },
			{ path: '/talent', element: <Talent /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
