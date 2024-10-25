import React, { useState } from 'react';
import { Clock, Camera, MapPin, Award, AlertTriangle } from 'lucide-react';

const MarshallingDemo = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [currentUser, setCurrentUser] = useState('');
  const [tasks, setTasks] = useState({
    'Pre-Trip': [
      { id: 1, task: 'Vehicle Inspection', done: false, photo: false, location: false, urgent: true },
      { id: 2, task: 'Safety Check', done: false, photo: true, location: true, urgent: false },
    ],
    'Active': [
      { id: 3, task: 'Van Position Check', done: false, photo: true, location: true, urgent: true },
      { id: 4, task: 'Route Assignment', done: false, photo: false, location: true, urgent: false },
    ],
    'Post-Trip': [
      { id: 5, task: 'Final Inspection', done: false, photo: true, location: true, urgent: false },
      { id: 6, task: 'Paperwork Submit', done: false, photo: true, location: false, urgent: true },
    ]
  });
  const [performance] = useState(85);
  const [alerts] = useState(2);

  // Rest of your component code...
  // (The full component code you provided would go here)

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {currentScreen === 'login' ? <LoginScreen /> : <MainScreen />}
    </div>
  );
};

export default MarshallingDemo;
