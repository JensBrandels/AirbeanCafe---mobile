import { useState, useEffect } from "react";

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
        <li key={menuItem.id}>
          <div className="menuData-Container">
            <img src="LÄGG TILL ICON" alt="" />
            <div>
              <h3>{menuItem.title}</h3>
            </div>
          </div>
        </li>
      );
    });
  };

  return <div>{displayMenu()}</div>;
};

export default menu;
