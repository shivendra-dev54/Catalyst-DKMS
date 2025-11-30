import { useNavigate } from 'react-router';


const Homepage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRequestAccessClick = () => {
    navigate('/request-access');
  };

  return (
    <div className="h-screen w-full bg-neutral-950 flex flex-col-reverse select-none">

      {/* Outer container */}
      <div className="text-neutral-300 w-full flex justify-between p-10">

        {/* Left Side: Title and Description */}
        <div className="flex flex-col space-y-2 pl-28">
          <p className="text-[12rem] font-bold leading-none">
            DKMS
          </p>
          <p className="text-gray-300 pt-20 pb-12 text-3xl font-light">
            DKMS is a document knowledge<br/>management system.
          </p>
        </div>


        <div className="flex flex-col space-y-6 justify-center pb-20 pr-64">

          <button className="w-100 h-20 text-black font-semibold flex items-center justify-between space-x-2 transition duration-200 hover:opacity-80 bg-main text-2xl" onClick={handleLoginClick}>
            <span className='pl-6'>Login</span>
            <span className="text-2xl pr-6">→</span>
          </button>

          <button className="w-100 h-20 text-white text-xl font-semibold transition duration-200 bg-gray-43 hover:opacity-80" onClick={handleRequestAccessClick} >
            Request for Access
          </button>

        </div>
      </div>
    </div>
  );
}

export default Homepage;