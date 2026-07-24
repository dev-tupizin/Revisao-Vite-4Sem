import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/MeiaBoca/MeiaBoca';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

export default router;
