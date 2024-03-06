import { useState, useEffect } from "react";
import AddButton from "../../assets/add.png";
import { useCartStore } from "../../store/CartStore";

import "./menu.scss";

type menuItem = {
  desc: string;
  id: string;
  price: number;
  title: string;
};

const menu = () => {
  const [menuData, setMenuData] = useState<menuItem[]>([]);

  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/"
        );
        const data = await response.json();
        setMenuData(data.menu);
        console.log(data.menu);
      } catch (error) {
        console.log("Failed to fetch data :/", error);
      }
    };
    fetchData();
  }, []);

  const displayMenu = () => {
    return menuData.map((menuItem) => {
      return (
        <li key={menuItem.id} className="deleteDots">
          <div className="menuData-Container">
            <button
              onClick={() => addToCart(menuItem.title, menuItem.price)}
              className="menuData-button"
            >
              <img src={AddButton} />
            </button>
            <div className="menuData-textContainer">
              <h3 className="menuData-title">
                <span className="menuData-titleName">{menuItem.title}</span>
                <span className="dots">
                  ...............................................
                </span>
                <p className="menuItem-price">{menuItem.price} kr</p>
              </h3>

              <p className="menuData-pTags">{menuItem.desc}</p>
            </div>
          </div>
        </li>
      );
    });
  };

  return <div className="menuData">{displayMenu()}</div>;
};

export default menu;
