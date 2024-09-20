import { useNavigate } from "react-router-dom";
import { MyButton } from "../Atoms/MyButton";
import { MyCard } from "../Atoms/MyCard";

const NavBar = ({ clicked, setClicked }) => {
  const navigate = useNavigate();

  return (
    <MyCard
      color="zinc"
      className="px-3 py-3 w-[90%] h-[64px] flex-row gap-3 justify-center items-center scale-[1.2] md:hidden"
    >
      <MyButton
        color="navButton"
        size="base"
        variant={clicked === "Home" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
          navigate("/");
        }}
      >
        Home
      </MyButton>
      <MyButton
        color="navButton"
        size="base"
        variant={clicked === "Works" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
          navigate("/works");
        }}
      >
        Works
      </MyButton>
      <MyButton
        color="navButton"
        size="base"
        variant={clicked === "Services" ? "" : "ghost"}
        onClick={(e) => {
          setClicked(e.currentTarget.textContent);
          navigate("/services");
        }}
      >
        Services
      </MyButton>
    </MyCard>
  );
};

export default NavBar;
