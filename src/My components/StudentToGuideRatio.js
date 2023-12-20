import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import './StudentToGuideRatio.css';
import TopicRecImage from '../Assets/topic-recommendation.jpeg';
import TotalStudents from '../Assets/totalstudent.png';
import TotalGuides from '../Assets/totalguide.svg';
import TotalPublications from '../Assets/totalpublications.svg';
import AyushLogo from '../Assets/ministryofayushlogo.jpg';

function Dashboard() {
  const [data] = useState({
    labels: ["Students", "Guides"],
    datasets: [
      {
        label: "Student-Guide Ratio",
        data: [100, 20],
        backgroundColor: ["#4285F4", "#FFC107"],
        hoverBackgroundColor: ["#387BE0", "#F9B700"],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  });

  const chartRef = useRef(null);
 useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("studentGuideChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: data,
      options: { responsive: true },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="dashboard">
      <div className="ayush-logo">
        <h2>Dashboard</h2>
        <img src={AyushLogo}/>
      </div>
      <div className="statistics">
        <div className="stat">
          <div className="rounded-rectangle">
          <img src={TotalStudents} />
            <h3>100</h3>
            <p>Total Students</p>
          </div>
        </div>
        <div className="stat">
          <div className="rounded-rectangle">
          <img src={TotalGuides } />
            <h3>20</h3>
            <p>Total Guides</p>
          </div>
        </div>
        <div className="stat">
          <div className="rounded-rectangle">
          <img src={TotalPublications} />
            <h3>50</h3>
            <p>Total Publications</p>
          </div>
        </div>
      </div>
      
      <div className="dash">
        <div className="topic-rec">
          <img src={TopicRecImage} />
          <h4>Topic Recommendation Tool</h4>
          <button>Try it out!!</button>
        </div>
        <div className="chart-container">
        <canvas id="studentGuideChart"></canvas>
        <h4>Student To Guide Ratio</h4>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
