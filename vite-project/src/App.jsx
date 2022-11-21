import { BrowserRouter, Routes, Route } from "react-router-dom";
import  AdaLovelace  from "./components/AdaLovelace";
import  BillGates  from "./components/BillGates";
import  JamesGosling  from "./components/JamesGosling";
import  KenThompson  from "./components/KenThompson";
import  NiklausWirth  from "./components/NiklausWirth";
import Principal from "./components/Principal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/AdaLovelace" element={<AdaLovelace />} />
        <Route path="/BillGates" element={<BillGates />} />
        <Route path="/JamesGosling" element={<JamesGosling />} />
        <Route path="/KenThompson" element={<KenThompson />} />
        <Route path="/NiklausWirth" element={<NiklausWirth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
