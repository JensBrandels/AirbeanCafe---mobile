import { getEta } from "../api/apiFetches";
import { useCartStore } from "../store/CartStore";
import { useEffect, useState } from "react";

const StatusPage = () => {
  const { orderNumber } = useCartStore();
  const [eta, setEta] = useState(0);

  useEffect(() => {
    const getCurrentOrderEta = async () => {
      const newEta = await getEta(orderNumber);
      setEta(newEta);
    };
    getCurrentOrderEta();
  }, []);

  return (
    <div>
      <div>ORDERNUMBER {orderNumber}</div>
      <div>ETA {eta}</div>
    </div>
  );
};

export default StatusPage;
