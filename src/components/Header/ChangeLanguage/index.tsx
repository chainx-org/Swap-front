import React from "react";
import {LanguageStyle} from "./style";
import languageLogo from "../ChangeLanguage/icons/Language.svg"
import { useTranslation } from "react-i18next";
function ChangeLanguage(){
    const { t, i18n } = useTranslation();
    return (
       <LanguageStyle onClick={()=> i18n.changeLanguage((i18n.language = i18n.language === "zh" ? "en":"zh")) }>
           <img src={languageLogo} alt=""/>
           {
               i18n.language === "zh" ? <div className={"text"} >EN</div>
                   : <div className={"text"}>ZH</div>
           }
       </LanguageStyle>
    )
}
export default ChangeLanguage;