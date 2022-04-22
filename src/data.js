import { LOCKING_SOUND, TAPPING_SOUND } from './redux/constants';

import bt21 from './picSrc/bt21.jpg';
import SleepyBeauty from './picSrc/SleepyBeauty.jpg';
import villager from './picSrc/villager.jpg';

import Brat from './picSrc/Brat.JPG';
import Brat1 from './picSrc/Brat1.JPG';
import Brat2 from './picSrc/Brat2.JPG';

import Cutie3_14P from './picSrc/Cutie3.14.PNG';
import Cutie3_14_1P from './picSrc/Cutie3.14_1.PNG';
import Cutie3_14_2P from './picSrc/Cutie3.14_2.PNG';

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

// import  from './picSrc/'

export const apps = [
    {
        name: 'Brat',
        collection: [Brat1, Brat, Brat2]
    },
    {
        name: 'bt21',
        collection: [bt21],
    },
    {
        name: 'Cutie 3.14',
        collection: [Cutie3_14_1, Cutie3_14_2, Cutie3_14_3, Cutie3_14_4],
    },
    {
        name: 'Cutie 3.14',
        collection: [Cutie3_14P, Cutie3_14_1P, Cutie3_14_2P],
    },
    // {
    //     name: 'Dabin',
    //     collection: [dabinPic, Dabin, Dabin1, Dabin2, Dabin3, Dabin4, Dabin5, Dabin6, Dabin8, Dabin9],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
    // {
    //     name: '',
    //     collection: [],
    // },
];

export const sound = {
    [TAPPING_SOUND]: "https://picturetosound.com/content/6E7D3368222284596F5DFD361B8D41D1B7B87CC0/audio_preview.mp3",
    [LOCKING_SOUND]: "https://picturetosound.com/content/A8CA14EE1B24F5D038E4336EBD519A88A1D329F7/audio_preview.mp3",
};