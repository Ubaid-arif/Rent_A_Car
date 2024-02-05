import React, { useEffect, useState } from "react";
import { createUser, getUserById } from "../../../database/helpers/user";
import SecondaryButton from "../../common/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    checkUserAvailable();
  }, []);

  const handlecreateUser = async () => {
    try {
      const newUser = {
        name: "Ubaid",
        dob: "07 Aug 2001",
        address: "Z House Karachi sindh",
      };

      let user = await createUser(newUser);
      let id = user?.id;
      localStorage.setItem("user_id", id);
      navigate("create");
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  const checkUserAvailable = async () => {
    let userID = localStorage.getItem("user_id");

    if (userID) {
      let getUser = await getUserById(userID);
      setUser(getUser);
    }
  };

  const handleNext = () => {
    navigate("create");
  };

  return (
    <div>
      <h1> User Profile</h1>
      <div className="Container">
        <div className="profileDetail">
          <h3> {user ? "User Details" : "Login page"}</h3>
          <img
            height={200}
            width={200}
            src={require("../../../assets/image/logo.png")}
            alt="car logo"
          />

          {user ? (
            <>
              <p> {`User Name  :  ${user?.name}`} </p>
              <p> {`Address :        ${user?.address}`} </p>

              <SecondaryButton title={"Next"} handleClick={handleNext} />
            </>
          ) : (
            <div>
              <p> Please a craete a User </p>

              <SecondaryButton
                title={"Create user"}
                handleClick={handlecreateUser}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
