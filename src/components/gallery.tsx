import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

interface GalleryProps {
    images: string[],
    alternate?: boolean
}

function Gallery({ images, alternate }: GalleryProps) {

    const [loaded, setLoaded] = useState(() => images.map(() => false));

    const handleImageLoad = (index : number) => {
    setLoaded((prevLoaded) => {
        const newLoaded = [...prevLoaded];
        newLoaded[index] = true;
        return newLoaded;
    });
    };

    return (
    <div className="flex w-full md:w-1/2 flex-wrap grow">
        {images.map((image, index) => (
        <div className={`w-full md:w-1/2 p-1 ${index == 0 && alternate ? 'md:w-full' : ''} grow`} key={index}>
            {!loaded[index] && <Skeleton className='h-40 animate-pulse bg-gradient-to-r from-gray-300 to-gray-200 flex-grow flex'/>}
            <div className={`overflow-hidden h-full w-full ${!loaded[index] ? 'hidden' : ''}`}>
            <a href={image} data-fancybox="gallery">
                <img
                alt={`image-${index}`}
                className="flex-grow flex h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
                src={image}
                onLoad={() => handleImageLoad(index)}
                />
            </a>
            </div>
        </div>
        ))}
    </div>
    );
}
    

export default Gallery;