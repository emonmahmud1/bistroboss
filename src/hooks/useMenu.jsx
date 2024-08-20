import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
      // fetch("http://localhost:3000/menu")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setMenuData(data);
      //   });
      axios.get('http://localhost:3000/menu')
      .then((res) => setMenuData(res.data))
   
    }, []);

    return [menuData]
};

export default useMenu;