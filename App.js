import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login';  
import SignupPage from './signup';



function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />

                    <Route path="/" element={
                        <
                        LoginPage
                        />
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
