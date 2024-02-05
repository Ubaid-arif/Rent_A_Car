import React, { useEffect, useState } from "react";
import { getUserById } from "../../../database/helpers/user";
import InputFeild from "../../common/InputFeild";
import SecondaryButton from "../../common/Button/SecondaryButton";
import { createCar } from "../../../database/helpers/car";

const CreateCar = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    handlePriceValidation();
  }, [price]);

  useEffect(() => {
    getUserFromDB();
  }, []);

  const onChange = (label, val) => {
    if (label == "name") setName(val);
    else if (label == "price") setprice(val);
  };

  const getUserFromDB = async () => {
    let userID = localStorage.getItem("user_id");

    if (userID) {
      let getUser = await getUserById(userID);
      setUser(getUser);
    }
  };

  function handlePriceValidation() {
    if (isNaN(Number(price))) {
      setErrors({
        price: "Only accept numbers",
      });
    } else {
      setErrors({
        price: "",
      });
    }
  }

  const handleCreateCar = async () => {
    let paramsforCar = {
      name: name,
      price: price,
      user: user?._raw.user,
      image: "",
    };

    console.log(paramsforCar);
    let car = await createCar(paramsforCar);
    console.log("car", car);
  };

  return (
    <>
      <h1> Register Car </h1>

      <div className="Container">
        <div className="">
          <h2> Welcome {user?.name}</h2>
          <h2> create a Car for Rent </h2>
          <InputFeild
            placeholder={"Enter Car Name"}
            onChange={onChange}
            label={"name"}
            value={name}
          />
          <br />
          <InputFeild
            placeholder={"Enter Car price"}
            onChange={onChange}
            label={"price"}
            value={price}
            error={errors.price}
          />
          <br />
          <SecondaryButton
            title={"Register Car"}
            handleClick={handleCreateCar}
            disabled={errors.price}
          />
        </div>
      </div>
    </>
  );
};

export default CreateCar;
