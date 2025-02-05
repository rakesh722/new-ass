
import React, { useState } from 'react';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import Dashboard from './components/Dashboard';
import RichTextEditor from './components/RichTextEditor';

function App() {
  const [currentComponent, setCurrentComponent] = useState('counter');

  return (
    <div>
      {/* Navigation Without Routing */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px' }}>
        <button onClick={() => setCurrentComponent('counter')}>Counter</button>
        <button onClick={() => setCurrentComponent('userForm')}>User Form</button>
        <button onClick={() => setCurrentComponent('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentComponent('editor')}>Editor</button>
      </nav>

      {/* Conditional Rendering Based on State */}
      {currentComponent === 'counter' && <Counter />}
      {currentComponent === 'userForm' && <UserDataForm />}
      {currentComponent === 'dashboard' && <Dashboard />}
      {currentComponent === 'editor' && <RichTextEditor />}
    </div>
  );
}

export default App;

