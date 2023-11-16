import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './routes/RootLayout.jsx'
// import App from './App.jsx'
// import Photo from './routes/Profiles/Photo.jsx'
// import Moto from './routes/Profiles/Moto.jsx'
// import Craft from './routes/Profiles/Craft.jsx'
// import Talent from './routes/Profiles/Talent.jsx'

import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <RootLayout />,
// 		children: [
// 			{ path: '/', element: <App /> },
// 			{ path: '/photo', element: <Photo /> },
// 			{ path: '/moto', element: <Moto /> },
// 			{ path: '/craft', element: <Craft /> },
// 			{ path: '/talent', element: <Talent /> },
// 		],
// 	},
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<RootLayout />
		</BrowserRouter>
	</React.StrictMode>
)

{
	/* <RouterProvider router={router} /> */
}
