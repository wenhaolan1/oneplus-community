import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
const Section = lazy(() => import('@/pages/Section'))
const Notice = lazy(() => import('@/pages/Notice'))
const Shop = lazy(() => import('@/pages/Shop'))
const Mine = lazy(() => import('@/pages/Mine'))

export default function RoutesConfig() {
  return (
    <Suspense fallback={null}> 
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/section" element={<Section />}></Route>
      <Route path="/notice" element={<Notice />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/mine" element={<Mine />}></Route>
    </Routes>
    </Suspense>
  )
}
