import certificadoImg from '../../../assets/certificado.svg';

const Certificados = () => {
    return (
      <div className="w-11/12 sm:w-3/4 order-1 md:order-2">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-6 text-center">Certificados</h1>
  
        {/* Certificados */}
        <div className="flex flex-col">
          {/* Card 01 */}
          <div className="p-4 w-full">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={certificadoImg}
              />
              <div className="flex-grow sm:pl-8">
                <h3 className="text-secundary-color mb-3 font-bold">
                  Javascript: De Novato a Ninja
                </h3>
                <p className="mb-4">Emitido: 07/10/2024</p>
              </div>
            </div>
          </div>
  
          {/* Card 02 */}
          <div className="p-4 w-full">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={certificadoImg}
              />
              <div className="flex-grow sm:pl-8">
                <h3 className="text-secundary-color mb-3 font-bold">
                  Python: De Novato a Ninja
                </h3>
                <p className="mb-4">Emitido: 07/10/2024</p>
              </div>
            </div>
          </div>
  
          {/* Card 03 */}
          <div className="p-4 w-full">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={certificadoImg}
              />
              <div className="flex-grow sm:pl-8">
                <h3 className="text-secundary-color mb-3 font-bold">
                  Java: De Novato a Ninja
                </h3>
                <p className="mb-4">Emitido: 07/10/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Certificados;
  
