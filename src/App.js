import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Calendar from './My components/Calendar';
import Dashboard from './My components/Dashboard';
import ProjectDetails from './My components/ProjectDetails';
import StudentToGuideRatio from './My components/StudentToGuideRatio';
import ConnectWithGuide from './My components/ConnectWithGuide';
import MeetingWithGuide from './My components/MeetingWithGuide';
import SubmitProjectRepo from './My components/SubmitProjectRepo';
import TopicRecommendationComponent from './My components/TopicRecommendationComponent';
import TaskManagerComponent from './My components/TaskManagerComponent';
import LeaderboardComponent from './My components/LeaderboardComponent';
import DashboardIcon from './Assets/dashboard.svg';
import PieChartICon from './Assets/pie-chart.svg';
import ChatIcon from './Assets/chat.svg';
import MeetIcon from './Assets/meeting.svg';
import SubmitProjectIcon from './Assets/submit-project.svg';
import TopicIcon from './Assets/light-bulb.svg';
import TaskIcon from './Assets/task.svg';
import LeaaderboardIcon from './Assets/leaderboard.svg';
import toggleButtonImage from './Assets/menu.svg';
import Footer from './My components/footer';
import RightNav from './My components/RightSideNav';
import HomeIcon from './Assets/home.svg';
import ProjectDetailsImage from './Assets/project-details.svg';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const storedShowSidebar = localStorage.getItem('showSidebar');
    if (storedShowSidebar !== null) {
      setShowSidebar(storedShowSidebar === 'true');
    }
  }, []);

  const toggleSidebar = () => {
    const updatedShowSidebar = !showSidebar;
    setShowSidebar(updatedShowSidebar);
    localStorage.setItem('showSidebar', updatedShowSidebar.toString());
  };

  return (
    <Router>
      <div className={`app-container ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className="sidebar">
            <ul>
            <li>
              <NavLink to="/dashboard">
                <div className='link'>
                  <div className='icon'>
                    <img src={HomeIcon} />
                  </div>
                  Home
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/connect-with-guide">
                <div className='link'>
                  <div className='icon'>
                    <img src={ChatIcon} />
                  </div>
                  Connect with Guide
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/meeting-with-guide">
                <div className='link'>
                  <div className='icon'>
                    <img src={MeetIcon} />
                  </div>
                  Meeting with guide
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ProjectDetails">
                <div className='link'>
                  <div className='icon'>
                    <img src={ProjectDetailsImage} />
                  </div>
                  Project Details
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/topic-recommendation">
                <div className='link'>
                  <div className='icon'>
                    <img src={TopicIcon} />
                  </div>
                  Topic Recommendation
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/task-manager">
                <div className='link'>
                  <div className='icon'>
                    <img src={TaskIcon} />
                  </div>
                  Task Manager
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">
                <div className='link'>
                  <div className='icon'>
                    <img src={LeaaderboardIcon} />
                  </div>
                  Leaderboard
                </div>
              </NavLink>
            </li>
          </ul>
          </div>

        <div className={`toggle-button ${showSidebar ? 'open' : ''}`} onClick={toggleSidebar}>
          <img className="toggle-icon" src={toggleButtonImage} alt="Toggle Sidebar" />
        </div>
        <div className="content">
          <div className='dashboard'>
          <StudentToGuideRatio />
          </div>
          {/* <div className='leaderboard'>
          <LeaderboardComponent />
        </div> */}
        </div>
          <div className='right-side'>
            <RightNav/>
          </div>
      </div>
      <LeaderboardComponent />
      <div>
        <Footer/>
        </div>
    </Router>
  );
};

export default App;