import React from "react";

import "./styles/app.scss";

import ProfilePage from "./pages/Profile/Profile";

const App: React.FC = () => {
    return (
        <div className="app">
            <ProfilePage />
        </div>
    );
};

export default App;
