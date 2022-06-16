import { LOCKING_SOUND, TAPPING_SOUND } from './redux/constants';

import bt21 from './picSrc/bt21.jpg';

import Brat from './picSrc/Brat.JPG';
import Brat1 from './picSrc/Brat1.JPG';
import Brat2 from './picSrc/Brat2.JPG';

import Cutie3_14P from './picSrc/Cutie3.14.PNG';
import Cutie3_14_1P from './picSrc/Cutie3.14_1.PNG';
import Cutie3_14_2P from './picSrc/Cutie3.14_2.PNG';
import Cutie3_14_3P from './picSrc/Cutie3.14_3.PNG';
import Cutie3_14_4P from './picSrc/Cutie3.14_4.PNG';

import Cutie3_14_1 from './picSrc/Cutie3.14_1.JPG';
import Cutie3_14_2 from './picSrc/Cutie3.14_2.JPG';
import Cutie3_14_3 from './picSrc/Cutie3.14_3.JPG';
import Cutie3_14_4 from './picSrc/Cutie3.14_4.JPG';

import dabinPic from './picSrc/dabinPic.jpg';
import Dabin from './picSrc/Dabin.JPG';
import Dabin1 from './picSrc/Dabin1.JPG';
import Dabin2 from './picSrc/Dabin2.JPG';
import Dabin3 from './picSrc/Dabin3.JPG';
import Dabin4 from './picSrc/Dabin4.JPG';
import Dabin5 from './picSrc/Dabin5.JPG';
import Dabin6 from './picSrc/Dabin6.JPG';
import Dabin8 from './picSrc/Dabin8.JPG';
import Dabin9 from './picSrc/Dabin9.JPG';
import Dabin10 from './picSrc/Dabin10.JPG';

import SleepyBeauty from './picSrc/SleepyBeauty.jpg';
import Sleepyhead from './picSrc/Sleepyhead.JPG';
import Sleepyhead1 from './picSrc/Sleepyhead1.JPG';
import Sleepyhead2 from './picSrc/Sleepyhead2.JPG';
import Sleepyhead3 from './picSrc/Sleepyhead3.JPG';
import Sleepyhead4 from './picSrc/Sleepyhead4.JPG';

import First_Date from './picSrc/First Date.JPG';
import First_Date_1 from './picSrc/First Date1.JPG';
import First_Date_2 from './picSrc/First Date2.PNG';

import Universal from './picSrc/Universal.JPG';
import Universal1 from './picSrc/Universal1.JPG';
import Universal2 from './picSrc/Universal2.JPG';
import Universal3 from './picSrc/Universal3.JPG';
import Universal4 from './picSrc/Universal4.JPG';
import Universal5 from './picSrc/Universal4.JPG';

import SanDiego from './picSrc/SanDiego.JPG';

import DateNights from './picSrc/DateNights.JPG';

import ChristmasLights from './picSrc/Christmas Lights.JPG';
import ChristmasLights2 from './picSrc/Christmas Lights2.JPG';

import Sus from './picSrc/Sus.JPG';

import Graduation_Pic1 from './picSrc/Graduation_Pic1.JPEG';
import Graduation_Pic2 from './picSrc/Graduation_Pic2.JPEG';
import Graduation_Pic3 from './picSrc/Graduation_Pic3.JPEG';
import Graduation_Pic4 from './picSrc/Graduation_Pic4.JPEG';
import Graduation_Pic5 from './picSrc/Graduation_Pic5.JPEG';

const multiple = (arr, times) => Array(times).fill(0).flatMap(() => arr);

export const apps = [
    {
        name: 'First Date',
        collection: [First_Date, First_Date_2, First_Date_1],
    },
    {
        name: 'Brat',
        collection: [Brat1, Brat, Brat2]
    },
    {
        name: 'Sleepy head',
        collection: [SleepyBeauty, Sleepyhead, Sleepyhead1, Sleepyhead2, Sleepyhead3, Sleepyhead4],
    },
    {
        name: 'Cutie 3.14',
        collection: [Cutie3_14_1, Cutie3_14_2, Cutie3_14_3, Cutie3_14_2P, Cutie3_14P, Cutie3_14_1P, Cutie3_14_4, Cutie3_14_3P, Cutie3_14_4P],
    },
    {
        name: 'Dabin',
        collection: [Dabin3, dabinPic, Dabin, Dabin1, Dabin2, Dabin4, Dabin5, Dabin6, Dabin8, Dabin9, Dabin10],
    },

    {
        name: 'Universal',
        collection: [Universal, Universal1, Universal2, Universal3, Universal4, Universal5],
    },
    {
        name: 'San Diego',
        collection: [SanDiego],
    },
    {
        name: 'Date Nights',
        collection: [DateNights],
    },
    {
        name: 'Christmas Lights',
        collection: [ChristmasLights, ChristmasLights2],
    },
    {
        name: 'Sus',
        collection: [Sus],
    },
    {
        name: 'Grad Pix',
        collection: [Graduation_Pic3, Graduation_Pic5, Graduation_Pic2, Graduation_Pic1, Graduation_Pic4],
    },
    // {
    //     name: '',
    //     collection: [],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
]
    .map(d => {
        for (const img of d.collection) {
            new Image().src = img;
        }

        return d;
    });

export const sound = {
    [TAPPING_SOUND]: "https://picturetosound.com/content/6E7D3368222284596F5DFD361B8D41D1B7B87CC0/audio_preview.mp3",
    [LOCKING_SOUND]: "https://picturetosound.com/content/A8CA14EE1B24F5D038E4336EBD519A88A1D329F7/audio_preview.mp3",
};
