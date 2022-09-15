import axios from "axios";
import { getCookie } from "./helpers";

const albumUrl = "https://photoslibrary.googleapis.com/v1/albums";
const uploadBytesUrl = "https://photoslibrary.googleapis.com/v1/uploads";
const createMediaUrl = "https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate/";
const shareAlbumUrl = albumId => `https://photoslibrary.googleapis.com/v1/albums/${albumId}:share`;
const addToAlbumUrl = albumId => `https://photoslibrary.googleapis.com/v1/albums/${albumId}:batchAddMediaItems`;
const getAlbumContentsUrl = 'https://photoslibrary.googleapis.com/v1/mediaItems:search';

const ACCESS_TOKEN = "accessToken";

const album = {
    "isWriteable": true,
    "shareInfo": {
      "sharedAlbumOptions": {
        "isCollaborative": true,
        "isCommentable": true
      },
      "isJoinable": true
    }
};

const sharedAlbumOptions = {
    isCollaborative: true,
    isCommentable: true,
};

const setHeaders = () => {
	const accessToken = getAccessToken();

	return {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        },
    };
};

const setMediaHeaders = (fileName, fileType) => {
	const accessToken = getAccessToken();

    return {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-type": "application/octet-stream",
            "X-Goog-Upload-Content-Type": fileType,
            "X-Goog-Upload-Protocol": "raw",
            "X-Goog-Upload-File-Name": fileName,
        },
    };
};

const getAccessToken = () => getCookie(ACCESS_TOKEN);

export const getAlbums = () => {
	return axios.get(
        albumUrl + '?pageSize=50',
        setHeaders(),
    );
};

export const getAlbumContents = albumId => {
    return axios.post(
        getAlbumContentsUrl,
        {
            albumId
        },
        setHeaders(),
    );
};

export const createAlbum = title => {
    return axios.post(
        albumUrl,
        {
            album: {
                title,
                ...album,
            },
        },
        setHeaders(),
    );
};

export const shareAlbum = albumId => {
    return axios.post(
        shareAlbumUrl(albumId),
        {
            sharedAlbumOptions
        },
        setHeaders(),
    );
};

export const uploadBytes = file => {
    return axios.post(
        uploadBytesUrl,
        file,
        setMediaHeaders(file.name, file.type)
    );
};

export const uploadMedia = (medias, albumId, description) => {
    const newMediaItems = medias.map(media => {
        return {
            description,
            simpleMediaItem: {
                fileName: media.file.name,
                uploadToken: media.uploadToken,
            },
        };
    });

    return axios.post(
        createMediaUrl,
        {
            albumId,
            newMediaItems,
        },
        setHeaders()
    );
};