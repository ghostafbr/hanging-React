import image0 from '../assets/img/0.png';
import image1 from '../assets/img/1.png';
import image2 from '../assets/img/2.png';
import image3 from '../assets/img/3.png';
import image4 from '../assets/img/4.png';
import image5 from '../assets/img/5.png';
import image6 from '../assets/img/6.png';
import image7 from '../assets/img/7.png';
import image8 from '../assets/img/8.png';
import image9 from '../assets/img/9.png';

const images: string[] = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
]

interface Props {
    imageNumber: number;
}

export function HangImage({ imageNumber }: Props) {

    if (imageNumber >= 9) {
        imageNumber = 9;
    }

    return (
        <img src={images[imageNumber]}
            alt="hang"
            style={{ width: 250 }}>
        </img>
    ); // JSX Element

}