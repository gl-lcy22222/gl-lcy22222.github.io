import config from "../../google/config.json";
import axios from "axios";
import { getCookie, setCookie } from '../../google/helpers';

const params = {};
const { clientId, redirectUri, scopes, test } = config;
const ACCESS_TOKEN = "accessToken";

const parseParams = () => {
    window.location.href
        .split("#")[1]
        .split("&")
        .forEach((m) => {
            const convertToCamelCase = (str) => {
                const arr = str.split("_");

                let result = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    const word = arr[i];
                    result += word[0].toUpperCase() + word.substring(1);
                }

                return result;
            };
            const [key, value] = m.split("=");
            params[convertToCamelCase(key)] = value;
        });
};

export const initializeGooglePhotos = () => {
    if (window.location.href.includes("#")) {
        parseParams();
    }

    if (params.accessToken) {
        setCookie(ACCESS_TOKEN, params.accessToken, 1);
        window.location.replace(redirectUri);
    } else {
        const accessToken = getCookie(ACCESS_TOKEN);
        const googleAccessTokenVerificationUrl = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`;

        axios
            .get(googleAccessTokenVerificationUrl)
            .catch(() => {
                const oauth2Url =
                    "https://accounts.google.com/o/oauth2/v2/auth";
                const responseType = "token";
                const includeGrantedScopes = true;
                const googlePhotosAuthUrl =
                    `${oauth2Url}` +
                    `?scope=${scopes.join(' ')}` +
                    `&include_granted_scopes=${includeGrantedScopes}` +
                    `&response_type=${responseType}` +
                    `&client_id=${clientId}` +
                    `&redirect_uri=${redirectUri}`;

                window.location.replace(googlePhotosAuthUrl);
            });
    }
};
