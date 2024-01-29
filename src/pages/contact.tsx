import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto w-full">
            <div className="grid grid-cols-2 gap-16">
                <section className="col-span-2 md:col-span-1">
                    <div className="max-w-screen-md">
                        <h1 className="text-3xl pt-10 pb-8"><b>CONTACT</b></h1>

                        <form className="space-y-8" action="mailto:ibrahimwalle20@gmail.com">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="example@gmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let me know how I can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows={6}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..." required></textarea>
                            </div>
                            <button type="submit"
                                className="py-3 px-5 text-sm font-medium text-center bg-black dark:bg-white text-white dark:text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
                <div className="col-span-2 md:col-span-1 flex relative">
                    <div
                        className="bg-white dark:bg-neutral-900 p-5 pb-20 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800  hover:rotate-0 transition duration-500 rotate-6 relative h-fit">
                        <img
                            src="https://images.unsplash.com/reserve/yZfr4jmxQyuaE132MWZm_stagnes.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"
                            alt="" className="flex flex-col aspect-square w-full object-cover h-auto max-h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;