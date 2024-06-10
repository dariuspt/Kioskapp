import { useNavigate } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo";
import Button from "../../components/Button";

const StartingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <BackgroundVideo />
      <div className="absolute bottom-0">
        <Button
          label="Comanda Aici"
          type="button"
          onclick={() => navigate("/choice")}
        />
      </div>
    </div>
  );
};

export default StartingScreen;
