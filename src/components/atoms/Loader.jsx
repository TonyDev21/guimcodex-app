const Loader = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-white text-lg font-semibold">Cargando...</span>
        </div>
      </div>
    );
  };
  
  export default Loader;