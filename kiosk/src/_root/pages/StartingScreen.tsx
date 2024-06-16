import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";
import LanguageItem from "../../components/LanguageItem";

const StartingScreen = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <div className="fixed bottom-0 ">
        <LanguageItem />
      </div>
      <div>
        <Button
          label={t("title")}
          type="button"
          onclick={() => navigate("/choice")}
        />
      </div>
    </div>
  );
};

export default StartingScreen;
