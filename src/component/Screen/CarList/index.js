import React from "react";
import { createUser } from "../../../database/helpers/user";
import SecondaryButton from "../../common/Button/SecondaryButton";

const CarList = () => {
  const createUserButton = async () => {
    try {
      const newUser = {
        name: "testUser",
        dob: "07 Aug 2001",
        address: "Z House",
      };
      let user = await createUser(newUser);
      let id = user?.id;
      localStorage.setItem("user_id", id);
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  return (
    <div>
      <SecondaryButton title={"Create a user"} handleClick={createUserButton} />
      Create a User Screen
    </div>
  );
};

export default CarList;
