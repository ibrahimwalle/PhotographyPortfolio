import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl pt-10 pb-8 text-left"><b>ABOUT ME</b></h1>
            <div className="grid grid-cols-2 gap-14 md:gap-20">
                <div className="col-span-2 md:col-span-1">
                    <div className="bg-white dark:bg-neutral-900 p-5 pb-28 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800 hover:rotate-0 transition duration-500 -rotate-6 relative">
                        <img src='./Avatar.jpg' alt="" className="smooth-edges flex flex-col w-full aspect-square object-cover h-auto" />
                        <div className="absolute bottom-0 left-0 right-0 text-center">
                            <p className="text-gray-800 dark:text-slate-200 pb-7 h-full text-6xl font-nothingyoucoulddo">me</p>
                        </div>
                    </div>
                </div>
                <section className="font-normal text-center text-base md:text-start mx-3 col-span-2 md:col-span-1 my-auto">
                    <div className="block md:hidden">
                        <p className="text-3xl font-serif font-bold mb-1">Hello there,</p>
                        <p className="text-3xl font-serif font-bold mb-6">I'm Ibrahim <span className="animate-wave">👋</span></p>
                    </div>
                    <p className="hidden md:block text-3xl font-serif font-bold mb-6">Hello there, I'm Ibrahim <span className="animate-wave">👋</span></p>
                    <p className="mb-4">
                        I’m a software developer with a love for photography. Since 2017, I’ve been capturing moments from my travels, particularly enjoying the challenge of astro-photography. This hobby allows me to combine patience and precision to create stunning images.
                    </p>
                    <p className="mb-4">
                        In my professional life, I’ve been crafting digital solutions using Python and JavaScript. As a full-stack developer, I work on all aspects of a project, ensuring websites are user-friendly and systems run efficiently. I thrive on innovation and problem-solving to create effective digital solutions.
                    </p>
                    <p>
                        Whether it’s behind the camera or coding, every moment is an opportunity to learn something new and create lasting memories. If you’re interested in collaborating or seeing more of my work, feel free to get in touch!
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
