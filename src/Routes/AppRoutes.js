import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { HomeComponent } from '../Pages/HomeComponent';
import { Layout } from './Layout';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomeComponent/>}/>
        </Route>
      </Routes>
  )
}
