import Snowfall from 'react-snowfall'

const SnowfallAnimations = () => {
    return (
        <Snowfall
            snowflakeCount={100}
            style={{ zIndex: 1 }}
        />
    );
};

export default SnowfallAnimations;