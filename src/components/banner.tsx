//@ts-nocheck
import * as React from "react";

import { useCallback, useState, useEffect } from "react";
import { getCookie, setCookie, cookiesEnum } from "../helpers/cookie";
import { isAndroid, isIOS } from "../helpers/platform";

const isBoolean = (arg: any) => {
  return arg === true || arg === false;
}

function getWindowSize() {
  const {outerHeight, outerWidth} = window;
  return {outerWidth, outerHeight};
}

export const GetTheAppBanner = ({
  hideBannerInitialValue,
  onlyIOS,
  onlyAndroid,
  reviewText = '200+ reviews',
  buttonLabel = 'Get the App',
  closeIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png",
  appRating = "https://webshop.staging.arive.global/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-rating.7dfc63d2.png&w=256&q=75",
  appLogo = "https://www.freeiconspng.com/thumbs/youtube-icon/youtube-icon-transparent-png-16.png",
  companyLogo = "https://seeklogo.com/images/Y/youtube-black-logo-D0F4E88B1D-seeklogo.com.png",
  maxWidth,
  startFrom = 'top',
  onlyOnMobile = false,
  universalLink = '',
  onClosingCallback,
  onMountingCallback,
  onCTACallback,
}: {
  hideBannerInitialValue?: boolean;
  onlyIOS?: boolean,
  onlyAndroid?: boolean,
  reviewText?: string;
  buttonLabel?: string;
  closeIcon?: string;
  appLogo?: string;
  appRating?: string;
  maxWidth?: number;
  companyLogo?: string;
  startFrom?: 'top' | 'bottom';
  onlyOnMobile?: boolean;
  universalLink?: string;
  onClosingCallback?: () => void;
  onMountingCallback?: () => void;
  onCTACallback?: () => void;
}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [hideBanner, setHideBanner] = useState(() => {
    if (isBoolean(hideBannerInitialValue)) return hideBannerInitialValue;
    return getCookie(cookiesEnum.APP_BANNER);
  });

  const closeAppBanner = useCallback(() => {
    setCookie(cookiesEnum.APP_BANNER, true);
    setHideBanner(true);
    onClosingCallback?.();
  }, [onClosingCallback]);

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    onMountingCallback?.();
  }, [onMountingCallback])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const isOutOfTheAllowedWidth = React.useMemo(() => {
    if (maxWidth && windowSize.outerWidth > maxWidth) {
      return true;
    }

    return false;
  }, [maxWidth, windowSize])

  if (isOutOfTheAllowedWidth) {
    return <></>;
  }

  if (onlyAndroid && !isAndroid()) {
    return <></>
  }

  if (onlyIOS && !isIOS()) {
    return <></>
  }

  if (onlyOnMobile) {
    const isDesktop = !(isIOS() || isAndroid());
    
    if(isDesktop) {
      return <></>;
    }
  }

  if (hideBanner) {
    return <></>;
  }

  const mainContainerStyle = {
    position: 'fixed',
    zIndex: 100,
    height: 59,
    backgroundColor: 'white',
    width: '100%',
    top: 'unset',
    bottom: 'unset',
  }

  if (startFrom === 'top') {
    mainContainerStyle['top'] = '0';
  }

  if (startFrom === 'bottom') {
    mainContainerStyle['bottom'] = '0';
  }

  return (
    <div style={mainContainerStyle}>
      <div
        style={{ display: "flex", padding: "0px 16px", height: 59, alignItems: "center", borderBottom: 1, borderColor: "#CACACA" }}
      >
        <div onClick={closeAppBanner} style={{ padding: "0px 16px 0px 0px", height: 18, width: 10, display: "block" }} >
          <img src={closeIcon} width="18px" height="18px" style={{ height: 10, width: 10, display: "block" }} />
        </div>
        <div px={4} style={{ padding: "16px 0px", height: "35px", display: "flex" }}>
          <img src={appLogo} width="35px" height="35px" style={{ borderRadius: 9, height: "35px", display: "block" }} />
        </div>
        <div
          style={{ paddingLeft: "16px", height: "33.5px" }}
        >
          <img style={{ height: 18, objectFit: 'contain' }} src={companyLogo} />

          <div style={{ display: "flex" }}>
            <img src={appRating} style={{ height: 13.5, width: 70 }} width="70px" height="13.5px" />
            <p
              data-testid="reviews"
              style={{ fontSize: 9, marginLeft: 9, fontWeight: 500, margin: 0 }}
            >
              {reviewText}
            </p>
          </div>
        </div>
        {/* Add the redirect URL */}
        <a onClick={onCTACallback} href={universalLink} data-testid="redirect-link" style={{ marginLeft: 'auto', cursor: "unset", textDecoration: 'none', border: "1px solid black", borderRadius: 7, height: 27, justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', alignSelf: 'center' }}>
          <div
            style={{ width: 88, height: 27, border: 1, borderColor: 'black', borderRadius: 7, alignItems: 'center', justifyContent: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', alignSelf: 'center' }}
          >
            <p
              style={{ fontSize: 12, fontWeight: 500, color: 'black', textDecoration: 'none', margin: 0, padding: 0 }}
              data-testid="get-app-text-button"
            >
              {buttonLabel}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

