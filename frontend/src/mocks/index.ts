import { DEFAULT_ANIMATION_CONFIG } from '../constant';
import { AnimationConfig, SlideItem } from '../models';

export const mockAnimationConfig: AnimationConfig = DEFAULT_ANIMATION_CONFIG;

export const mockSlideItems: SlideItem[] = [
  {
    slideId: 1,
    imgUrl: require('../assets/iphone.png'),
    descContents: [
      {
        id: '1',
        text: 'xPhone',
        style: {
          color: 'white',
          fontSize: '40px',
          fontWeight: 'bold',
          lineHeight: '60px',
        }
      },
      {
        id: '2',
        text: 'Lots to love.Less to spend.',
        style: {
          color: 'white',
          fontSize: '30px',
          fontWeight: 'normal',
          lineHeight: '40px',
          marginTop: '15px',
        }
      },
      {
        id: '3',
        text: 'Starting at $399.',
        style: {
          color: 'white',
          fontSize: '30px',
          fontWeight: 'normal',
          lineHeight: '40px',
        }
      },
    ],
  },
  {
    slideId: 2,
    imgUrl: require('../assets/tablet.png'),
    descContents: [
      {
        id: '1',
        text: 'Tablet',
        style: {
          color: 'black',
          fontSize: '40px',
          fontWeight: 'bold',
          lineHeight: '60px',
        }
      },
      {
        id: '2',
        text: 'Just the right amount of everything.',
        style: {
          color: 'black',
          fontSize: '30px',
          fontWeight: 'normal',
          lineHeight: '40px',
          marginTop: '15px',
        }
      },
    ],
  },
  {
    slideId: 3,
    imgUrl: require('../assets/airpods.png'),
    descContents: [
      {
        id: '1',
        text: 'Buy a Tablet or xPhone for college.',
        style: {
          color: 'black',
          fontSize: '40px',
          fontWeight: 'bold',
          lineHeight: '60px',
        }
      },
      {
        id: '2',
        text: 'Get airPods.',
        style: {
          color: 'black',
          fontSize: '40px',
          fontWeight: 'bold',
          lineHeight: '60px',
        }
      },
    ],
  },
];