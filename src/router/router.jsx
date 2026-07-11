import { createBrowserRouter } from 'react-router-dom';

import MeiaBoca from '../pages/MeiaBoca/MeiaBoca';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MeiaBoca />,
    },
]);

export default router;
