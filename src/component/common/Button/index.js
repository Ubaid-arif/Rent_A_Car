import DefaultButton from "./DefaultButton";
import SecondaryButton from "./SecondaryButton";


const Button = ({ type, ...rest }) => {
  return type == "Secondary" ? (
   <SecondaryButton  {...rest}/>
  ) : (
    <DefaultButton {...rest} />
  );
};

export default Button;
