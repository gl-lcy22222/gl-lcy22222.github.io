import { makeStyles } from "@material-ui/styles";

import DeleteButton from "./DeleteButton";
import InputBox from "./InputBox";
import NumPad from "./NumPad";
import Text from "./Text";
import LockIcon from "../../../components/LockIcon";
import { backgroundImageSource } from "../../../configs/constants";
import LockScreen from "../LockScreen";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${backgroundImageSource})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "-webkit-tap-highlight-color": "transparent",

        position: 'relative',
    },
});

const PasscodeScreen = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <LockScreen/>
            <LockIcon />
            <Text />
            <InputBox />
            <NumPad />
            <DeleteButton />
        </div>
    );
};

export default PasscodeScreen;
