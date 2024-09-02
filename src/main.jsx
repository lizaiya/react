import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router.jsx';
import '@/index.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </Suspense>
    </BrowserRouter> */}
  </React.StrictMode>
);
