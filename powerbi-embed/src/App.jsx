import React from "react";
import PowerBIEmbed from "./PowerBIEmbed.jsx";
import { Trophy, BarChart3, Calendar, Users, Globe, MapPin, Clock, Star } from "lucide-react";
import "./App.css";

const App = () => {
  const embedUrl = import.meta.env.VITE_POWERBI_EMBED_URL;

  return (
    <div className="app-container">
      <header className="header">
        📊 IPL 2024 Live Score & Analysis <BarChart3 />
      </header>

      {/* Power BI Analytics */}
      <section className="section analytics-section full-width">
        <div className="dashboard-container">
          <PowerBIEmbed embedUrl={embedUrl} />
        </div>
      </section>

      {/* Tournament Details Section */}
      <section className="section tournament-info">
        <h2 className="section-title">🏆 IPL 2024 Overview <Globe /></h2>
        <p><Calendar /> Start Date: March 23, 2024</p>
        <p><Calendar /> End Date: May 29, 2024</p>
        <p><Users /> Total Teams: 10</p>
        <p><Trophy /> Current Champions: Chennai Super Kings</p>
        <p><MapPin /> Host Country: India</p>
        <p><Clock /> Total Matches: 74</p>
      </section>


      {/* Leaderboard Section */}
      <section className="section leaderboard-section">
        <h2 className="section-title">🏅 Top Players <Trophy /></h2>
        <ul className="leaderboard">
          <li className="leaderboard-item">🔥 Virat Kohli - 540 Runs</li>
          <li className="leaderboard-item">🚀 Rashid Khan - 17 Wickets</li>
          <li className="leaderboard-item">💪 MS Dhoni - 250 Catches</li>
          <li className="leaderboard-item">🌟 Jos Buttler - 4 Centuries</li>
          <li className="leaderboard-item">⚡ Jasprit Bumrah - Best Economy Rate</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p><BarChart3 /> Data Analysis by Nikhil Deshmukh.</p>
      </footer>
    </div>
  );
};

export default App;
