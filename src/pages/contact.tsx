import React from 'react';

const ContactPage: React.FC = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "af29e1ff-c86b-4fd9-baa2-9be69a1c045b");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset(); // Reset the form
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <div className="container mx-auto w-full">
            <div className="grid grid-cols-2 gap-16">
                <section className="col-span-2 md:col-span-1">
                    <div className="max-w-screen-md">
                        <h1 className="text-3xl pt-10 pb-8"><b>CONTACT</b></h1>

                        <form className="space-y-8" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" name="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="example@gmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="Name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input type="text" id="name" name="name"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="John White" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows={6} name="message"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..." required></textarea>
                            </div>
                            <button type="submit"
                                className="py-3 px-5 text-sm font-medium text-center bg-black dark:bg-white text-white dark:text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Send message
                            </button>
                        </form>
                        {result && <div className="font-semibold">{result}</div>}
                    </div>
                </section>
                <div className="col-span-2 md:col-span-1 flex relative items-center">
                    <div
                        className="bg-white dark:bg-neutral-900 p-5 pb-20 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800  hover:rotate-0 transition duration-500 rotate-6 relative h-fit">
                        <img
                            src="https://ucarecdn.com/779fc471-2e58-490d-a81d-0b63b626e29a/-/preview/"
                            alt="" className="flex flex-col w-fit object-cover h-auto max-h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;