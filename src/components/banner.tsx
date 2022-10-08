import * as React from "react";

import { useCallback, useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

const Image = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img {...props}/>;
}

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

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname: string, cvalue: string | boolean, exdays = 30) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const cookiesEnum = {
  APP_BANNER: 'APP_BANNER',
}

export const GetTheAppBanner = ({
  hideBannerInitialValue,
}: {
  hideBannerInitialValue?: boolean;
}) => {

  const [hideBanner, setHideBanner] = useState(() => {
    if (isBoolean(hideBannerInitialValue)) return hideBannerInitialValue;
    return getCookie(cookiesEnum.APP_BANNER);
  });

  const closeAppBanner = useCallback(() => {
    setCookie(cookiesEnum.APP_BANNER, true);
    setHideBanner(true);
  }, []);

  if (hideBanner) {
    return <></>;
  }

  return (
    <Flex
      height="59px"
      alignItems="center"
      px={4}
      borderBottom="1px"
      borderColor="grey.inactiveText"
    >
      <Box py={"4px"} onClick={closeAppBanner}>
        <Image src={closeIcon} width="18px" height="18px" />
      </Box>
      <Box px={4} height={"35px"}>
        <Image src={ariveLogo} width="35px" height="35px" />
      </Box>
      <Flex
        height="33.5px"
        justifyContent={"space-between"}
        flexDirection={"column"}
        flex={1}
      >
        <Arive size={"sm"} />

        <Flex>
          <Image src={appRating} width="70px" height="10px" />
          <Text
            fontWeight={500}
            ml={1}
            fontSize={9}
            data-testid="reviews"
          >
            200+ reviews
          </Text>
        </Flex>
      </Flex>
      {/* Add the redirect URL */}
      <a href={""} data-testid="redirect-link">
        <Flex
          width={"88px"}
          height="27px"
          border="1px"
          borderColor="black"
          borderRadius="7px"
          alignItems="center"
          justifyContent={"center"}
        >
          <Text
            fontSize={12}
            fontWeight={500}
            data-testid="get-app-text-button"
          >
            Get the App
          </Text>
        </Flex>
      </a>
    </Flex>
  );
};

