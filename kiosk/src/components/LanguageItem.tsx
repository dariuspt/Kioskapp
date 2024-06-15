import useLanguageSwitcher from "../hooks/useLanguageSwitcher";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

import { useTranslation } from "react-i18next";

import unitedkingdom from "../assets/flags/en.svg";
import romania1 from "../assets/flags/ro.svg";

const flags = {
  en: unitedkingdom,
  ro: romania1,
};

const LanguageItem = () => {
  const { t } = useTranslation();
  const languages = [
    { code: "en", label: t("english"), flag: flags.en },
    { code: "ro", label: t("romanian"), flag: flags.ro },
  ];
  const { switchLanguage } = useLanguageSwitcher();
  return (
    <ToggleGroup type="single">
      {languages.map((language) => (
        <ToggleGroupItem
          key={language.code}
          onClick={() => switchLanguage(language.code)}
          value={language.code}
          className="mb-10 "
        >
          <img
            src={language.flag}
            alt={language.label}
            className="justify-around w-20 h-20"
          />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
export default LanguageItem;
