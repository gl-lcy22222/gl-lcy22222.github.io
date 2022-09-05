import { makeStyles } from "@material-ui/styles";
import { useRef } from "react";
import { connect } from "react-redux";
import { dispatches, states } from '../redux';
import {
    uploadBytes
} from '../../../../google/requests';

const mimeTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/gif",
    "video/mp4",
    "video/mpeg",
]);

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: "100%",
        minHeight: '100%',
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: `all 750ms ease`,
    },
    dropArea: {
        height: "90%",
        width: "90%",
        borderRadius: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",

        border: "1px dashed white",
    },
    file: {
        height: 0,
        width: 0,
    },
    mediaContainer: {
        height: "96%",
        width: "96%",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
    },
    media: {
        height: "20%",
        width: "20%",
        minHeight: "20%",
        minWidth: "20%",
        marginLeft: "4%",
        marginTop: "6%",
        userSelect: "none",
    },
});

const UploadPage = ({
    medias,
    addMedia,
}) => {
    const classes = useStyles();

    const fileUploadRef = useRef();

    return (
        <div className={classes.rootContainer}>
            <input
                className={classes.file}
                type={"file"}
                ref={fileUploadRef}
                multiple="multiple"
                onChange={ref => handleFiles(ref, addMedia)}
            />
            <div
                className={classes.dropArea}
                onClick={() => fileUploadRef.current.click()}
            >
                {!medias.length && <div>Add Item Here</div>}
                {medias.length !== 0 && (
                    <div className={classes.mediaContainer}>
                        {medias.map((media, index) => {
                            const url = URL.createObjectURL(media.file);
                            return (
                                <img
                                    key={index}
                                    src={url}
                                    // onMouseDown={() => handleImageHold(index)}
                                    // onMouseUp={() => clearTimeout(timer)}
                                    className={classes.media}
                                    draggable={false}
                                    alt="uploaded media"
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

const handleFiles = (ref, addMedia) => {
    ref.preventDefault();

    const files = ref.dataTransfer ? ref.dataTransfer.files : ref.target.files;

    Array.from(files).forEach((file) => {
        if (mimeTypes.has(file.type)) {
            uploadBytes(file)
                .then(({ data }) => {
                    addMedia({
                        uploadToken: data,
                        file,
                    });
                })
                .catch((err) => console.log(err, "uploadBytes Error"));
        }
    });

    // setDragging(false);
};

export default connect(states, dispatches)(UploadPage);
