export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 backdrop-blur-md z-50">
      <div className="flex flex-col items-center">
        {/* Loader Animation */}
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute w-16 h-16 border-4 border-gray-300 rounded-full animate-spin"></div>
          <div className="absolute w-16 h-16 border-t-4 border-gray-500 rounded-full animate-spin"></div>
        </div>
        {/* Loading Text */}
        <p className="mt-4 text-gray-700 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
};
