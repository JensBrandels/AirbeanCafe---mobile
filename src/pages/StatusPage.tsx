import { getEta } from "../api/apiFetches";
import { useCartStore } from "../store/CartStore";
import { useEffect, useState } from "react";
import DroneImg from "../assets/droneImg.svg";
import "./statusPage.scss";
import { useNavigate } from "react-router-dom";

const StatusPage = () => {
  const { orderNumber } = useCartStore();
  const [eta, setEta] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menupage");
  };

  useEffect(() => {
    const getCurrentOrderEta = async () => {
      const newEta = await getEta(orderNumber);
      setEta(newEta);
    };
    getCurrentOrderEta();
  }, []);

  return (
    <div className="statusPage-container">
      <div>
        <p className="statusPage-text">
          Ordernummer: <span className="fatFont">{orderNumber}</span>
        </p>
      </div>
      <img src={DroneImg} />
      <h3 className="statusPage-title">Din beställning är på väg!</h3>
      <div>
        <p className="statusPage-text">
          <span className="fatFont">{eta}</span> minuter
        </p>
      </div>
      <button onClick={() => handleClick()} className="statusPage-button">
        Ok, cool!
      </button>
    </div>
  );
};

export default StatusPage;
