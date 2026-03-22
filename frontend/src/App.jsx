import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicLayout from "./components/layout/PublicLayout";
import Home from "./pages/Home";
import ServicePage from "./pages/Services";
import ServiceRequestForm from "./components/forms/ServiceRequestForm";
import About from "./pages/About";
import Contact from "./pages/Contact";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public layout wrapper */}
        <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage/>}/>
        <Route path="/request-service" element={<ServiceRequestForm />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;