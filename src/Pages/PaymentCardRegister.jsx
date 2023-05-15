import CardDataVisualization from "../components/card-data-visualization/CardDataVisualization";
import CardRegistrationForm from "../components/form-register-card/CardRegistrationForm";
import "./PaymentCardRegister.css";

import { useState, useEffect } from "react";

import { CardDataProvider } from "../context/cardDataContext";
import OfflineMessage from "../components/offline-message/OfflineMessage";

function PaymentCardRegister() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
      window.location.reload();
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOnline]);

  return isOnline == false ? (
    <main>
      <OfflineMessage />
      <footer className="footer">sad</footer>
    </main>
  ) : (
    <main>
      <div className="content">
        <CardDataProvider>
          <CardDataVisualization />
          <CardRegistrationForm />
        </CardDataProvider>
      </div>
      <footer className="footer">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/DanielGLisboa" target="_blank">Daniel Guerra Lisboa</a>.</footer>
    </main>
  );
}

export default PaymentCardRegister;
