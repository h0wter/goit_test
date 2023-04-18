import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoadingLabel } from "./components/LoadingLabel/LoadingLabel.styled";
import "./App.css";

const HomePage = lazy(() => import("./pages/Home/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets/Tweets"));

function App() {
  return (
    <Suspense fallback={<LoadingLabel>Loading...</LoadingLabel>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets/" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
