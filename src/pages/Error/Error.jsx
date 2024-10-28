import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <motion.div 
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/v30JLYr/Group-192-2.png"
          alt="Error graphic for large screens"
        />
        <img
          className="hidden md:block lg:hidden"
          src="https://i.ibb.co/c1ggfn2/Group-193.png"
          alt="Error graphic for medium screens"
        />
        <img
          className="md:hidden"
          src="https://i.ibb.co/8gTVH2Y/Group-198.png"
          alt="Error graphic for small screens"
        />
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white">
          Looks like you’ve found the doorway to the great nothing
        </h1>
        <p className="py-4 text-base text-gray-800 dark:text-white">
          The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.
        </p>
        <p className="py-2 text-base text-gray-800 dark:text-white">
          Sorry about that! Please visit our homepage to get where you need to go.
        </p>
        <motion.button
          className="w-full lg:w-auto my-4 rounded-md px-1 sm:px-16 py-5 bg-[#CB152E] text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#CB152E] focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={"/"}>Go back to Homepage</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Error;
