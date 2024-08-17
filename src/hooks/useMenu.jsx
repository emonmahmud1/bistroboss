import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
          setMenuData(data);
        });
    }, []);

    return [menuData]
};

export default useMenu;