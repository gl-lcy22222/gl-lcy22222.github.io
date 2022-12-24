import axios from 'axios';
import twilioConfigs from '../configurations/prod/twilio';

const phoneNumbers = ['+15109182271', '+14158067237'];

export default (body) => {
    phoneNumbers.forEach((phoneNumber) => {
        const params = new URLSearchParams();

        params.append('Body', body);
        params.append('To', phoneNumber);
        params.append('MessagingServiceSid', twilioConfigs.messagingServiceSid);

        axios({
            method: 'post',
            url: twilioConfigs.hostUrl,
            data: params,
            auth: {
                username: twilioConfigs.accountSid,
                password: twilioConfigs.authToken,
            },
            headers: {
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=utf-8',
            },
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    });
};
