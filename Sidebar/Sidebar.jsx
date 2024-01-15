import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Helpers/AuthContext";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      username: "",
      id: 0,
      role: "",
      status: false,
    });
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo} onClick={(()=> navigate('/'))}>
            <img src="/LOGOCLINIC.png" alt="" />
          </div>
          <ul>

          <li onClick={() => navigate('/forms')}>
    <img src="/forms.png" class="icon"/> Forms
  </li>
            <li onClick={() => navigate('/medicines')}>
    <img src="/meds.png" class="icon"/> Medicines
  </li>


  <li onClick={() => navigate('/')}>
    <img src="/staffcon.png" class="icon"/> Staff
  </li>

      

  <li onClick={() => navigate('/forms')}>
    <img src="/Accounts.png" class="icon"/> Accounts
  </li>
          </ul>
        </div>

        <div className={styles.logoutbtn}>

        <div className={styles.settingbtn}>
        <button className = {styles.logoutbtns} onClick={() => handleLogout()}>
    <img src="/logouticon.png"  class="icon"/> Log Out
  </button>


{/*        
        <button onClick={() => handleLogout()}>
    <img src="/settings.png" alt="Logout" class="icon"/> Settings
  </button> */}
  </div>

      

        </div>

      


      </div>
    </>
  );
};

export default Sidebar;
