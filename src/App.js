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
  const [teacherInfo, setTeacherInfo] = useState({ teacherName: '', teacherId: '' });


  // Dummy data for the teacher's schedule
  const teacherSchedule = [
    { date: selectedDate, className: 'Math', time: '09:00 AM - 10:30 AM' },
    { date: selectedDate, className: 'Science', time: '11:00 AM - 12:30 PM' },
    { date: selectedDate, className: 'English', time: '02:00 PM - 03:30 PM' },
  ];


  const handleLogin = (event) => {
    event.preventDefault();
    const enteredUsername = event.target.username.value;
    setUsername(enteredUsername);
    setLoggedIn(true);

    const loggedInTeacher = {
      teacherName: enteredUsername,
      teacherId: '123456',
      schedule: teacherSchedule,
    };
  
    setTeacherInfo(loggedInTeacher);
    setSelectedSchedule(teacherSchedule);
  };


  };

  const handleLogout = () => {
    // Perform logout here
    setLoggedIn(false);
    setSelectedDate(null);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <header>
      <nav className="navtop">
      <div className="inside-mav">
        <img src={institutionLogo} alt="InstitutionLogo" title="institution logo"/>
        <h1>Institution Name</h1>
        {loggedIn ? (
        <button onClick={handleLogout}>Logout</button>):null}
      </div>
      </nav>
      </header>

      {loggedIn ? (
        <div>
          <section>
            <h3>Welcome, {teacherInfo.teacherName}!</h3>
            {/* <p>ID: {teacherInfo.teacherId}</p> */}
            <p>ID: 123456</p>
          </section>

          <section>
          <div className="dateselection" >
            <h3>Select a Date</h3>
            <input type="date" onChange={(e) => handleDateSelect(e.target.value)} />
          </div>
          </section>

          <section>
          
            <h2>Schedule</h2>
            {selectedDate ? (
              <table className="center-table" >
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Class Name</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {teacherSchedule.map((schedule) => (
                    <tr key={schedule.date}>
                      <td>{schedule.date}</td>
                      <td>{schedule.className}</td>
                      <td>{schedule.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Please select a date to view the schedule.</p>
            )}
          </section>
          
 
          <footer>
            <a href="https://www.google.com"><FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F', fontSize: '24px'}}/></a>
            <a href="https://www.google.com"><FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2', fontSize: '24px'}}/></a>
            <a href="https://www.google.com"><FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2', fontSize: '24px'}}/></a>
          </footer>

        </div>
      ) : (
        <div>
        
          <section className="center-section">
          <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="Username" name="username"/>
              <input type="password" placeholder="Password" />
              <button  type="submit">Login</button>
            </form>
          </section>


          <footer>
            <a href="https://www.google.com"><FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F', fontSize: '24px'}}/></a>
            <a href="https://www.google.com"><FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2', fontSize: '24px'}}/></a>
            <a href="https://www.google.com"><FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2', fontSize: '24px'}}/></a>
          </footer>


        </div>
      )}
    </div>
  );
};

export default App;
