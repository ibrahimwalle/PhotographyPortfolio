
import React from 'react';
import Fancybox from './fancybox';

const PortfolioComponent: React.FC = () => {
    
    const set1 = [
        'https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80',
        'https://images.unsplash.com/photo-1667093060577-02f07eb01585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80',
    ];
    const set2 = [
        'https://images.unsplash.com/photo-1676978647680-0e60a584c5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1675971074488-351394caf6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1655908932015-7650b401e2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1675189729507-b90d7cb6c592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80',
    ];


    return (
        <div className="container mx-auto w-full">
            <h1 className="text-4xl pt-10 pb-8 font-bold text-left">PORTFOLIO</h1>
            <section className="text-neutral-700">
                <div className="container w-full">
                    <Fancybox
                        options={{
                        Carousel: {
                            infinite: false,
                        },
                        }}>
                        <div className="flex w-full md:w-1/2 flex-wrap grow">
                            {set1.map((image, index) => (
                                <div className={`w-full md:w-1/2 p-1 grow`} key={index}>
                                    <div className="overflow-hidden h-full w-full">
                                        <a href={image} data-fancybox="gallery">
                                            <img
                                                alt={`image-${index}`}
                                                className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
                                                src={image}
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex w-full md:w-1/2 flex-wrap grow">
                            {set2.map((image, index) => (
                                <div className={`w-full md:w-1/2 p-1 ${index == 0 ? 'md:w-full' : ''} grow`} key={index}>
                                    <div className="overflow-hidden h-full w-full">
                                        <a href={image} data-fancybox="gallery">
                                            <img
                                                alt={`image-${index}`}
                                                className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
                                                src={image}
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fancybox>
                </div>
            </section>
        </div>
    );
};

export default PortfolioComponent;
//                 <img alt="a branch of a plant floating in a body of water"
//                   class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                   src="https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
//               </a>
//             </div>
//           </div>
//           <div class="w-full md:w-1/2 p-1">
//             <div class="overflow-hidden h-full w-full">
//               <a href="https://images.unsplash.com/photo-1675971074488-351394caf6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
//                 data-fancybox="gallery">
//                 <img alt="a blue sky with a lot of red and orange clouds"
//                   class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                   src="https://images.unsplash.com/photo-1675971074488-351394caf6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
//               </a>
//             </div>
//           </div>
//           <div class="w-full md:w-1/2 p-1">
//             <div class="overflow-hidden h-full w-full">
//               <a href="https://images.unsplash.com/photo-1655908932015-7650b401e2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
//                 data-fancybox="gallery">
//                 <img alt="a view of the ocean from the top of a hill"
//                   class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                   src="https://images.unsplash.com/photo-1655908932015-7650b401e2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
//               </a>
//             </div>
//           </div>
//           <div class="w-full md:w-1/2 p-1">
//             <div class="overflow-hidden h-full w-full">
//               <a href="https://images.unsplash.com/photo-1675189729507-b90d7cb6c592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80"
//                 data-fancybox="gallery">
//                 <img alt="a pheasant flying in the sky with its wings spread"
//                   class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                   src="https://images.unsplash.com/photo-1675189729507-b90d7cb6c592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>