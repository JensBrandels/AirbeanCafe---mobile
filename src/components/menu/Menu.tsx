import { useState, useEffect } from "react";
import AddButton from "../../assets/add.png";

import "./menu.scss";

type menuItem = {
  desc: string;
  id: string;
  price: number;
  title: string;
};

const menu = () => {
  const [menuData, setMenuData] = useState<menuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/"
        );
        const data = await response.json();
        const SixItemsFromData = data.menu.slice(0, 6);
        setMenuData(SixItemsFromData);
        console.log(SixItemsFromData);
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
            <img src={AddButton} alt="" className="buttonPosition" />
            <div>
              <h3 className="menuData-titleAndPrice">{menuItem.title}</h3>
              <p className="menuData-pTags">{menuItem.desc}</p>
            </div>
            <p className="menuData-titleAndPrice">{menuItem.price} kr</p>
          </div>
        </li>
      );
    });
  };

  return <div className="menuData">{displayMenu()}</div>;
};

export default menu;
