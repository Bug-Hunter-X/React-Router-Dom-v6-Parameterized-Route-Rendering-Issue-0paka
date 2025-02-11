```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <h1>Home</h1>;}

function About() { return <h1>About</h1>;}

function User() { 
  const location = useLocation();
  console.log('Location:', location);
  return <h1>User</h1>;
}

```