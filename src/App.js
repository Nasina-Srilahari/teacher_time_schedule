import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import institutionLogo from './assets/institution-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [username, setUsername] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [teacherInfo, setTeacherInfo] = useState({ teacherName: '', teacherId: '', schedule: [] });

  // Dummy data for the teacher's schedule
  const teacherSchedule = [
    { date: '2023-05-30', className: 'Math', time: '09:00 AM - 10:30 AM' },
    { date: '2023-05-31', className: 'Science', time: '11:00 AM - 12:30 PM' },
    { date: '2023-06-01', className: 'English', time: '02:00 PM - 03:30 PM' },
  ];

  const handleLogin = (event) => {
    event.preventDefault();
    const enteredUsername = event.target.username.value;
    setUsername(enteredUsername);
    setLoggedIn(true);

    // Dummy teacher's information (replace with actual authentication logic)
    const loggedInTeacher = {
      teacherName: enteredUsername,
      teacherId: '123456',
      schedule: teacherSchedule,
    };

    setTeacherInfo(loggedInTeacher);
    setSelectedSchedule(teacherSchedule);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedDate(null);
  };

  const handleDateSelect = (date) => {
    const schedule = teacherInfo.schedule.filter((item) => item.date === date);

    setSelectedDate(date);
    setSelectedSchedule(schedule.length > 0 ? schedule : null);
  };

  return (
    <div className="App">
      <header>
        <nav className="navtop">
          <div className="inside-mav">
            <img src={institutionLogo} alt="InstitutionLogo" title="institution logo" />
            <h1>Institution Name</h1>
            {loggedIn ? <button onClick={handleLogout}>Logout</button> : null}
          </div>
        </nav>
      </header>

      {loggedIn ? (
        <div>
          <section>
            <h3>Welcome, {teacherInfo.teacherName}!</h3>
            <p>ID: {teacherInfo.teacherId}</p>
          </section>

          <section>
            <div className="dateselection">
              <h3>Select a Date</h3>
              <DatePicker selected={selectedDate} onChange={(date) => handleDateSelect(date)} />
            </div>
          </section>

          <section>
            <h2>Schedule</h2>
            {selectedSchedule ? (
              <pre>{JSON.stringify(selectedSchedule, null, 2)}</pre>
            ) : (
              <p>No schedule available for the selected date.</p>
            )}
          </section>

          <footer>
            <a href="https://www.google.com">
              <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F', fontSize: '24px' }} />
            </a>
            <a href="https://www.google.com">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2', fontSize: '24px' }} />
            </a>
            <a href="https://www.google.com">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2', fontSize: '24px' }} />
            </a>
          </footer>
        </div>
      ) : (
        <div>
          <section className="center-section">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="Username" name="username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </section>

          <footer>
            <a href="https://www.google.com">
              <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F', fontSize: '24px' }} />
            </a>
            <a href="https://www.google.com">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2', fontSize: '24px' }} />
            </a>
            <a href="https://www.google.com">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2', fontSize: '24px' }} />
            </a>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
