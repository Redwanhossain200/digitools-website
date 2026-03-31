import { FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = ({ cart, setActiveTab }) => {
  return (
    <nav className="flex justify-between items-center px-6 lg:px-20 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b transition-all duration-300">

      <h1 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-[#4F39F6] via-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent animate-gradient-text shrink-0">
        DigiTools
      </h1>

      <ul className="hidden lg:flex gap-4 xl:gap-6 font-semibold text-gray-600 list-none">
        <li>
          <a href="#products" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#features" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#testimonials" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#faq" className="text-[16px] relative group hover:text-[#7F27FF] transition-colors whitespace-nowrap">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7F27FF] transition-all group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <div className="relative cursor-pointer transition-transform hover:scale-110 mr-2" onClick={() => setActiveTab('cart')}>
          <FaShoppingCart className="text-xl text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-[#7F27FF] text-white text-[10px] px-1.5 rounded-full animate-pulse">
            {cart.length}
          </span>
        </div>

        <button className="hidden sm:block btn bg-[#7F27FF] text-white hover:bg-[#6a20d6] border-none rounded-full px-4 md:px-6 font-semibold transition-all">
          Login
        </button>

        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full hover:shadow-lg border-none px-4 md:px-6 py-2 font-semibold transition-all text-sm md:text-base">
          Get Started
        </button>

        <div className="lg:hidden text-2xl text-gray-700 cursor-pointer ml-2">
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;