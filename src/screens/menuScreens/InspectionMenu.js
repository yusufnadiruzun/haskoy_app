import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../components/MenuItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import api from "../../../api";
import { useDispatch } from "react-redux";
import { getUserPermissions } from "../../redux/actionTypes";
const InspectionMenu = () => {
  
  const selector = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const [permissionList, setPermissionList] = useState([]);

  useEffect(() => {
    const getPermission = async () => {
      const { data } = await api.getUserPermissions(selector.usertoken);
      dispatch(getUserPermissions(data)); // Verileri Redux mağazasına doğrudan ekleyin
    };

    getPermission();
  }, []);

  useEffect(() => {
    // Redux store'daki userPermissions güncellendiğinde, bu useEffect içindeki kod çalışacak
    // permissionList'i güncelleyebiliriz, ancak bunu dispatch ile Redux mağazasına yapmak daha iyi bir uygulama olurdu
    setPermissionList(selector.userPermissions);
  }, [selector.userPermissions]);

  return (
    <SafeAreaView className="container">
      {console.log(permissionList.length)}
      {permissionList.map((item) => {
        return item.permission_name === "yoklama" ? (
          <MenuItem key={item} name={"Yoklama Al"}></MenuItem>
        ) : null;
      })}
      <MenuItem></MenuItem>
    </SafeAreaView>
  );
};

export default InspectionMenu;