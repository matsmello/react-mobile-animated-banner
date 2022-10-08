import * as React from "react";

import { useCallback, useState } from "react";

const Image = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img {...props}/>
}

const closeIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
const appRating = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
const ariveLogo = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"

import { Box, Flex, Text } from "@chakra-ui/react";
import Arive from "@common/icons/Arive";
import { setCookie, getCookie } from "cookies-next";
import { isBoolean } from "lodash";
import { cookiesEnum } from "src/enums/cookies.enum";


const GetTheAppBanner = ({
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

export default GetTheAppBanner;
