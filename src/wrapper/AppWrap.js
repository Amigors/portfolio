import React from "react";
import { NavigationDots, SocialMedai } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedai />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">2022 AmiGO</p>
            <p className="p-text">Все права зарезервированны</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
