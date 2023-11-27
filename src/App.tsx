import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfileContainer from './containers/UserProfile';
import HomePage from './containers/Home';
import UserList from './containers/UserList';
function App() {
  return (
    <div className="App">
      {/* <UserProfileContainer />   */}
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-profile/:id" element={<UserProfileContainer />} />
        <Route path="/user-list" element={<UserList />} />
        {/* Other routes go here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
