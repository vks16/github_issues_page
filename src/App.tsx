import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
const Issue = lazy(() => import("./pages"))
const IssueDetail = lazy(() => import("./pages/issue"))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<div>Loading...</div>}>
              <Issue />
            </Suspense>} />
          <Route path="/issues/:id" element={
            <Suspense fallback={<div>Loading...</div>}>
              <IssueDetail />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<div>Loading...</div>}>
              <NoMatch />
            </Suspense>
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
