import { makeStyles } from "@material-ui/styles";

import DeleteButton from "./DeleteButton";
import InputBox from "./InputBox";
import NumPad from "./NumPad";
import Text from "./Text";
import LockIcon from "../../../components/LockIcon";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(/images/background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "-webkit-tap-highlight-color": "transparent",
    },
});

const PasscodeScreen = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <LockIcon />
            <Text />
            <InputBox />
            <NumPad />
            <DeleteButton />
        </div>
    );
};

export default PasscodeScreen;
