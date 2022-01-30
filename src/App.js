import React, { Suspense } from "react";
//import Header from "./components/Header";

const Header = React.lazy(()=>import("./components/Header"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
      </Suspense>
    </div>
  );
}

export default App;
