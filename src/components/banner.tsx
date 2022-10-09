//@ts-nocheck
import * as React from "react";

import { useCallback, useState } from "react";
import { getCookie, setCookie, cookiesEnum } from "../helpers/cookie";
import { isAndroid, isIOS } from "../helpers/platform";

const closeIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
const appRating = "https://webshop.staging.arive.global/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-rating.7dfc63d2.png&w=256&q=75"
const ariveLogo = "https://webshop.staging.arive.global/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farive-logo.89536ebb.png&w=96&q=75"

type Props = {
  color?: string;
  size?: "lg" | "sm";
};

const Arive = ({
  color = "#000000",
  size = "lg",
  ...props
}: Props) =>
  size === "lg" ? (
    <svg
      width="81"
      height="18"
      viewBox="0 0 81 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.4546 5.47685C35.4546 2.03226 33.2099 0 29.0237 0H20.981V18H24.4778V10.8393H27.1554L31.3566 18.0017H35.4812L30.8171 10.6805C33.7411 10.1391 35.4562 8.21271 35.4562 5.47856L35.4546 5.47685ZM24.4778 7.71404V3.30455H28.9621C30.8171 3.30455 31.8578 3.98596 31.8578 5.47685C31.8578 6.96774 30.8687 7.71404 28.9621 7.71404H24.4778ZM81.0017 14.7091V18H67.8885V0H80.9017V3.2926H71.3854V7.27856H80.4622V10.5694H71.3854V14.7091H81.0017ZM39.9805 0H43.4773V18H39.9805V0ZM60.765 0H64.4L57.806 18H53.5565L46.9625 0H50.6858L55.7129 14.3624L60.765 0ZM6.83215 0L0 18H3.64836L5.12536 13.9372H12.7118L14.1922 18H17.9288L11.095 0H6.83381H6.83215ZM6.32427 10.6463L8.92525 3.54877L11.5112 10.6463H6.32427Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg
      width="59"
      height="13"
      viewBox="0 0 59 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.8244 3.95513C25.8244 1.4676 24.1895 0 21.1403 0H15.2821V12.9988H17.8292V7.82763H19.7795L22.8395 13H25.8438L22.4466 7.71293C24.5764 7.32198 25.8256 5.93084 25.8256 3.95636L25.8244 3.95513ZM17.8292 5.57072V2.3864H21.0954C22.4466 2.3864 23.2046 2.87847 23.2046 3.95513C23.2046 5.03178 22.4842 5.57072 21.0954 5.57072H17.8292ZM59 10.6222V12.9988H49.4487V0H58.9272V2.37776H51.9957V5.25624H58.607V7.63277H51.9957V10.6222H59ZM29.121 0H31.668V12.9988H29.121V0ZM44.26 0H46.9077L42.1047 12.9988H39.0095L34.2065 0H36.9185L40.5802 10.3719L44.26 0ZM4.9764 0L0 12.9988H2.6574L3.73321 10.0648H9.25904L10.3373 12.9988H13.059L8.08134 0H4.97761H4.9764ZM4.60648 7.68826L6.50098 2.56276L8.38456 7.68826H4.60648Z"
        fill={color}
      />
    </svg>
  );

const isBoolean = (arg: any) => {
  return arg === true || arg === false;
}

export const GetTheAppBanner = ({
  hideBannerInitialValue,
  onlyIOS,
  onlyAndroid,
}: {
  hideBannerInitialValue?: boolean;
  onlyIOS?: boolean,
  onlyAndroid?: boolean,
}) => {

  const [hideBanner, setHideBanner] = useState(() => {
    if (isBoolean(hideBannerInitialValue)) return hideBannerInitialValue;
    return getCookie(cookiesEnum.APP_BANNER);
  });

  const closeAppBanner = useCallback(() => {
    setCookie(cookiesEnum.APP_BANNER, true);
    setHideBanner(true);
  }, []);

  if (onlyAndroid && !isAndroid()) {
      return <></>
  }

  if (onlyIOS && !isIOS()) {
    return <></>
}

  if (hideBanner) {
    return <></>;
  }

  return (
    <div
      style={{display: "flex", padding: "0px 16px", height: 59, alignItems: "center", borderBottom: 1, borderColor: "#CACACA"}}
    >
      <div onClick={closeAppBanner} style={{padding: "0px 16px 0px 0px", height: 18, width: 18, display: "block"}} >
        <img src={closeIcon} width="18px" height="18px"  style={{height: 10, width: 10, display: "block"}} />
      </div>
      <div px={4} style={{padding: "16px 0px", height: "35px", display: "flex"}}>
        <img src={ariveLogo} width="35px" height="35px" style={{height: "35px", display: "block"}}/>
      </div>
      <div
        style={{paddingLeft: "16px", height: "33.5px"}}
      >
        <Arive size={"sm"} />

        <div style={{display: "flex"}}>
          <img src={appRating} style={{height: 13.5 , width: 70}} width="70px" height="13.5px" />
          <p
            data-testid="reviews"
            style={{fontSize: 9, marginLeft: 6, fontWeight: 500, margin: 0}}
          >
            200+ reviews
          </p>
        </div>
      </div>
      {/* Add the redirect URL */}
      <a href={""} data-testid="redirect-link" style={{marginLeft: 'auto', cursor: "unset", textDecoration: 'none', border: "1px solid black", borderRadius: 7, height: 27, justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', alignSelf: 'center'}}>
        <div
          style={{width: 88, height: 27, border: 1, borderColor: 'black', borderRadius: 7, alignItems: 'center', justifyContent: 'center',  justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', alignSelf: 'center'}}
        >
          <p
            style={{fontSize: 12, fontWeight: 500, color: 'black', textDecoration: 'none', margin: 0, padding: 0}}
            data-testid="get-app-text-button"
          >
            Get the App
          </p>
        </div>
      </a>
    </div>
  );
};

