import { FaTwitter, FaFacebookSquare, FaDribbble } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-[#CB152E] pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-white">Lets keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-white">
                            Find us on any of these platforms, we respond in 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex justify-start items-center">
                            <button className="bg-white text-[#CB152E] shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                                <FaTwitter />
                            </button>
                            <button className="bg-white text-[#CB152E] shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                                <FaFacebookSquare />
                            </button>
                            <button className="bg-white text-[#CB152E] shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                                <FaDribbble />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">EduBrigde Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <span className="text-white font-medium block pb-2 text-sm">Student Portal</span>
                                    </li>
                                    <li>
                                        <span className="text-white font-medium block pb-2 text-sm">Course Management</span>
                                    </li>
                                    <li>
                                        <span className="text-white font-medium block pb-2 text-sm">Library Resources</span>
                                    </li>
                                    <li>
                                        <span className="text-white font-medium block pb-2 text-sm">Contact Administration</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <span className="text-white font-medium block pb-2 text-sm">FAQ</span>
                                    </li>
                                    <li>
                                        <span className="text-white font-medium block pb-2 text-sm">Support</span>
                                    </li>
                                    <li>
                                        <span className="text-white font-medium block pb-2 text-sm">Feedback</span>
                                    </li>
                                    <li>
                                        <span className="text-white font-medium block pb-2 text-sm">Privacy Policy</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-white font-semibold py-1">
                            Copyright © <span id="get-current-year">{new Date().getFullYear()}</span> EduBrigde. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
