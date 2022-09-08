import { preloadImages, shuffle } from "../helpers";
import { getAlbumContents, getAlbums } from "./requests";

export const multipleClasses = (...classes) => classes.join(" ");

export const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export const eraseCookie = (name) => {
    document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export const fetchApps = (preload = true) =>
    getAlbums()
        .then(({ data }) => data.albums)
        .then(async (albums) => {
            return await Promise.all(
                shuffle(albums).map(async (album) => {
                    return await getAlbumContents(album.id).then(({ data }) => {
                        if (preload) {
                            const sources = data.mediaItems.map(
                                (item) => item.baseUrl
                            );
                            preloadImages(sources);
                        }

                        return {
                            name: album.title,
                            description: data.mediaItems[0].description,
                            id: album.id,
                            collection: shuffle(data.mediaItems),
                        };
                    });
                })
            );
        })
        .catch((err) => console.log(err, "getAlbums Error"));