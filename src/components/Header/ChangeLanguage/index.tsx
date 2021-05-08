import React from "react";
import {LanguageStyle} from "./style";
import languageLogo from "../ChangeLanguage/icons/Language.svg"
function ChangeLanguage(){
    return (
       <LanguageStyle>
           <img src={languageLogo} alt=""/>
           <div className={"text"}>EN</div>
       </LanguageStyle>
    )
}
export default ChangeLanguage;