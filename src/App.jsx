import { lazy, Suspense, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("./pages/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets/" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
