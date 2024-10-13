import { BrowserRouter, Routes, Route } from 'react-router-dom';

function About() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
export default About
