import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import {
    APP_LEVEL_GAPS,
    APP_SIDE_GAPS,
} from "../../../../../configs/constants";
import { states } from "../../redux";

const useStyles = makeStyles({
    rootContainer: {
        marginTop: `${APP_LEVEL_GAPS}%`,
        marginLeft: `${APP_SIDE_GAPS}%`,
        marginRight: `${APP_SIDE_GAPS}%`,
    },
    app: {
        marginBottom: "10%",
        "&:active": {
            opacity: 0.4,
        },
    },
    image: {
        borderRadius: "25%",
        height: "100%",
        width: "100%",
    },
    appName: {
        width: "100%",
        maxWidth: "100%",
        fontSize: 14,
        color: "white",
        textAlign: "center",
    },
});

const App = ({ name, collection, appSize }) => {
    const classes = useStyles();

    return (
        <div
            className={classes.rootContainer}
            ref={(e) => e && console.log("total: ", e.clientHeight)}
        >
            <div
                className={classes.app}
                style={{
                    height: appSize,
                    width: appSize,
                    minHeight: appSize,
                    minWidth: appSize,
                }}
            >
                {collection && (
                    <img
                        className={classes.image}
                        src={collection?.[0]?.baseUrl}
                        alt=""
                    />
                )}
            </div>
            <div
                className={classes.appName}
                style={{
                    height: appSize / 2,
                    maxWidth: appSize,
                    fontSize: calcFontSize(appSize),
                }}
            >
                {name}
            </div>
        </div>
    );
};

const calcFontSize = (appSize) => {
    const ratio = 4.5;
    return Math.round(appSize / ratio);
};

export default connect(states)(App);
