import { Container } from "components/design";
const Hero = (props) => {
  return (
    <div className="w-full bg-gray-900">
      <Container maxWidth="xl">
        <div className="relative pt-12">
          <div className="w-full md:w-1/2">
            <div className="flex justify-center md:justify-start items-center">
              <h2 className="text-xl md:text-2xl uppercase text-yellow-400">
                Build, survive, earn
              </h2>
              <div className="ml-2 w-24 md:w-32 h-1 bg-yellow-400" />
            </div>
            <h1 className="text-3xl md:text-4xl text-white uppercase text-center md:text-left">
              A next gen game by in-verse co.
            </h1>
          </div>
        </div>
        <div className="relative pt-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
            <div className="grid grid-cols-1 gap-2 ml-0 mb-4 md:ml-4 md:mb-4">
              <button className="bg-gray-500 w-48 h-12 text-white uppercase border-2 border-yellow-400 rounded-lg">
                Play to Earn
              </button>
              <button className="bg-gray-500 w-48 h-12 text-white uppercase border-2 border-yellow-400 rounded-lg">
                Connect Wallet
              </button>
              <button className="bg-gray-500 w-48 h-12 text-white uppercase border-2 border-yellow-400 rounded-lg">
                Leader Board
              </button>
            </div>
            <div className="md:ml-4">
              <h4 className="mb-4 text-4xl text-center text-yellow-400 uppercase font-bold">
                Presale
              </h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-white h-auto w-auto p-2 rounded-lg">
                      <p className="text-4xl">0</p>
                    </div>
                    <div className="bg-white h-auto w-auto p-2 rounded-lg">
                      <p className="text-4xl">8</p>
                    </div>
                  </div>
                  <p className="text-white text-center">Days</p>
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-white h-auto w-auto p-2 rounded-lg">
                      <p className="text-4xl">2</p>
                    </div>
                    <div className="bg-white h-auto w-auto p-2 rounded-lg">
                      <p className="text-4xl">1</p>
                    </div>
                  </div>
                  <p className="text-white text-center">Hours</p>
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-white h-auto w-auto p-2 rounded-lg">
                      <p className="text-4xl">0</p>
                    </div>
                    <div className="bg-white h-auto w-auto p-2 rounded-lg">
                      <p className="text-4xl">3</p>
                    </div>
                  </div>
                  <p className="text-white text-center">Minutes</p>
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-white h-auto w-auto p-2 rounded-lg">
                      <p className="text-4xl">4</p>
                    </div>
                    <div className="bg-white h-auto w-auto p-2 rounded-lg">
                      <p className="text-4xl">7</p>
                    </div>
                  </div>
                  <p className="text-white text-center">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
