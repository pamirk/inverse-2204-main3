import { useEffect, useState } from "react";
import Layout from "layouts";
import { Container } from "components/design";
import { Presale } from "components/home";
import clsx from "clsx";
import { getTuple } from "utils";
// import PiChart from "../PiChart";
import PureComponent from "../../components/PureComponent";
import { PieChart, Pie, Tooltip } from "recharts";
const social = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];
function Home() {
  const [timer, setTimer] = useState({
    days: [],
    hours: [],
    minutes: [],
    seconds: [],
  });
  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data2 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];
  useEffect(() => {
    const target = new Date("Feb 5, 2022 15:37:25").getTime();
    const x = setInterval(() => {
      const distance = target - Date.now();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimer({
        days: getTuple(days),
        hours: getTuple(hours),
        minutes: getTuple(minutes),
        seconds: getTuple(seconds),
      });
    }, 1000);
    return () => {
      clearInterval(x);
    };
  }, []);
  return (
    <Layout>
      <div className="relative w-full bg-gray-900">
        <section className={clsx("w-full relative bg-img bg-img-1")}>
          <Container maxWidth="xl" className="font-raleway pt-6">
            <div className="hidden md:block md:relative">
              <div className="z-40 absolute bg-yellow-400 w-2 h-12 -left-8 top-12"></div>
              <div className="absolute bg-white w-[1px] h-64 -left-8 top-24 transform translate-x-1"></div>
              <div className="absolute -left-7 top-96 transform -translate-x-1/2">
                <div className="flex flex-col justify-center space-y-4">
                  {social.map((item) => (
                    <a key={item.name} href={item.href} className="text-white">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative pt-12">
              <div className="w-full md:w-1/2">
                <div className="flex justify-center md:justify-start items-center">
                  <div className="md:hidden mx-2 flex-1 md:w-32 h-1 bg-yellow-400" />
                  <h2 className="text-xl md:text-2xl uppercase text-yellow-400">
                    Build, survive, earn
                  </h2>
                  <div className="mx-2 flex-1 md:w-32 h-1 bg-yellow-400" />
                </div>
                <h1 className="font-quantico text-3xl md:text-4xl text-white uppercase text-center md:text-left">
                  A next gen game by in-verse co.
                </h1>
              </div>
            </div>
            <div className="relative pt-6">
              <div className="flex flex-col md:flex-row justify-start md:justify-start items-center">
                <div className="grid grid-cols-1 gap-2 ml-0 mb-4 z-10">
                  <button className="bg-gray-500/50 w-48 h-12 text-white uppercase border border-yellow-400 rounded-lg">
                    WHITE PAPER
                  </button>
                  <Presale />
                  <button className="bg-gray-500/50 w-48 h-12 text-white uppercase border border-yellow-400 rounded-lg">
                    BSC SCAN
                  </button>
                </div>
                <div className="md:ml-4 flex-1 md:absolute md:w-full flex flex-col items-center">
                  <h4 className="font-quantico mb-4 text-4xl text-center text-yellow-400 uppercase font-bold">
                    Presale
                  </h4>
                  <div className="grid grid-cols-4 gap-4 font-quantico">
                    <div className="flex flex-col">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-white h-auto w-auto p-2 rounded-lg">
                          <p className="text-4xl">{timer.days[0]}</p>
                        </div>
                        <div className="bg-white h-auto w-auto p-2 rounded-lg">
                          <p className="text-4xl">{timer.days[1]}</p>
                        </div>
                      </div>
                      <p className="text-white text-center">Days</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-white h-auto w-auto p-2 rounded-lg">
                          <p className="text-4xl">{timer.hours[0]}</p>
                        </div>
                        <div className="bg-white h-auto w-auto p-2 rounded-lg">
                          <p className="text-4xl">{timer.hours[1]}</p>
                        </div>
                      </div>
                      <p className="text-white text-center">Hours</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-white h-auto w-auto p-2 rounded-lg">
                          <p className="text-4xl">{timer.minutes[0]}</p>
                        </div>
                        <div className="bg-white h-auto w-auto p-2 rounded-lg">
                          <p className="text-4xl">{timer.minutes[1]}</p>
                        </div>
                      </div>
                      <p className="text-white text-center">Minutes</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-white h-auto w-auto p-2 rounded-lg">
                          <p className="text-4xl">{timer.seconds[0]}</p>
                        </div>
                        <div className="bg-white h-auto w-auto p-2 rounded-lg">
                          <p className="text-4xl">{timer.seconds[1]}</p>
                        </div>
                      </div>
                      <p className="text-white text-center">Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-8">
              <div className="w-full rounded-lg p-1 mt-8 md:p-4 bg-black flex justify-center items-center">
                {Object.keys(Array.from(Array(8))).map((val, i) => (
                  <img
                    key={i}
                    className="h-8 md:h-24 w-8 md:w-24 object-contain mx-2"
                    src={`images/ad-${i + 1}.png`}
                    alt={`ad-${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section className={clsx("w-full relative bg-img bg-img-2")}>
          <Container maxWidth="xl">
            <div className="w-full py-8 text-center">
              <h1 className="font-quantico font-bold text-4xl md:text-6xl text-yellow-400 uppercase">
                About - Meta Blackout
              </h1>
              <p className="w-full md:w-3/4 md:mx-auto py-8 text-lg text-white">
                Experience a metaverse unlike any other! Explore the wastelands
                of MetaFall to find and attain valuable assets such as land,
                weapons, apparel and customize your character to your liking. In
                this open world with a mix of sci-fi and old style metaverse you
                can Do whoever you want to do, have whatever you want to have,
                become whoever you want to be.
              </p>
              <button className="font-quantico p-4 uppercase bg-yellow-400 rounded-lg shadow-md shadow-yellow-700">
                Game Overview
              </button>
            </div>
          </Container>
        </section>
        <section className={clsx("w-full relative bg-img bg-img-3")}>
          <Container maxWidth="xl">
            <div className="w-full py-12 text-center">
              <h1 className="font-quantico font-bold text-4xl md:text-6xl text-white uppercase">
                Game experiences
              </h1>
              <div className="py-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex flex-col">
                  <img
                    className="h-48 w-auto object-cover rounded-lg"
                    src="/images/scene.jpg"
                    alt=""
                  />
                  <h4 className="mt-2 text-2xl text-white font-medium">
                    Explore
                  </h4>
                  <p className="mt-2 text-white text-base">
                    Experience the Apocalyptic landscape unlike any other.
                    Explore the wretched wastelands to make new discoveries and
                    gain new assets.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    className="h-48 w-auto object-cover rounded-lg"
                    src="/images/exp-2.png"
                    alt=""
                  />
                  <h4 className="mt-2 text-2xl text-white font-medium">
                    Brawl
                  </h4>
                  <p className="mt-2 text-white text-base">
                    Fight your way to the top. Each season split resets the
                    leaderboards which will give each player a chance to redeem
                    their titles.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    className="h-48 w-auto object-cover rounded-lg"
                    src="/images/car.jpg"
                    alt=""
                  />
                  <h4 className="mt-2 text-2xl text-white font-medium">
                    Team up
                  </h4>
                  <p className="mt-2 text-white text-base">
                    Join alliances to team up and explore the wasteland to
                    conquer different worlds with different landscapes.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className={clsx("w-full relative bg-img bg-img-4")}>
          <Container maxWidth="xl">
            <div className="w-full py-12">
              <div class="w-full flex justify-center items-center">
                <div class="flex-1 h-1 bg-yellow-400"></div>
                <p class="mx-4 text-center text-2xl md:text-4xl text-yellow-400 uppercase">
                  Road map
                </p>
                <div class="flex-1 h-1 bg-yellow-400"></div>
              </div>
              {[
                [
                  "Jan",
                  "The design and development team will work on launching the whole OpenWorld metaverse of MetaFall and open up the game as open beta which will mark as a day in history for MetaFall",
                ],
                [
                  "March",
                  "A discord server for MetaFall will be created to provide information about the latest news and releases happening for MetaFall",
                ],
                [
                  "April",
                  "The marketplace will soon be opened for peer to peer trading with secure transactions between users.",
                ],
                [
                  "June",
                  "The first wave of NFT Land Drops will be released after a week of open beta which will include exclusive Land NFTs with custom property attached as a perk with them as well. Any purchase in this drop will grant the early access badge to the user",
                ],
              ].map((t, i) => (
                <div
                  key={i}
                  className={clsx(
                    "my-32 w-full flex flex-col md:flex-row items-center space-x-4",
                    {
                      "md:flex-row-reverse": i % 2,
                      "md:flex-row": !(i % 2),
                    }
                  )}
                >
                  <img
                    src={`/images/rd-${i + 1}.png`}
                    alt=""
                    className="w-full md:w-1/2 h-auto object-cover"
                  />
                  <div className="w-full md:w-1/2 text-center">
                    <h2 className="font-quantico my-4 text-3xl text-yellow-400 uppercase">
                      {t[0]} 2022
                    </h2>
                    <p className="text-white text-base">{t[1]}</p>
                  </div>
                </div>
              ))}
              <div className="text-center pb-8">
                <button className="px-16 py-4 bg-yellow-400 text-xl font-bold uppercase shadow-md shadow-yellow-400 rounded-lg">
                  Now More
                </button>
              </div>
            </div>
            <div className="hidden md:block w-full py-8">
              <div className="text-base text-yellow-400">Comments</div>
              <div className="border-2 border-yellow-400 rounded-lg p-2">
                <div className="my-2 flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <img
                      className="w-12 h-12 object-cover rounded-lg border-2 border-yellow-400"
                      src="/images/cmnt-1.png"
                      alt="Hello"
                    />
                    <div className="ml-8 w-24">
                      <h5 className="font-bold text-sm text-yellow-400">
                        John Doe
                      </h5>
                      <p className="text-sm text-yellow-400 nowrap">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                  <p className="mr-8 text-sm text-yellow-400">
                    Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididuntLorem ipsum dolor sit amet,
                  </p>
                </div>
                <div className="my-2 flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <img
                      className="w-12 h-12 object-cover rounded-lg border-2 border-yellow-400"
                      src="/images/cmnt-2.png"
                      alt="Hello"
                    />
                    <div className="ml-8 w-24">
                      <h5 className="font-bold text-sm text-yellow-400">
                        John Doe
                      </h5>
                      <p className="text-sm text-yellow-400 nowrap">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                  <p className="mr-8 text-sm text-yellow-400">
                    Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididuntLorem ipsum dolor sit amet,
                  </p>
                </div>
                <div className="my-2 flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <img
                      className="w-12 h-12 object-cover rounded-lg border-2 border-yellow-400"
                      src="/images/cmnt-3.png"
                      alt="Hello"
                    />
                    <div className="ml-8 w-24">
                      <h5 className="font-bold text-sm text-yellow-400">
                        John Doe
                      </h5>
                      <p className="text-sm text-yellow-400 nowrap">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                  <p className="mr-8 text-sm text-yellow-400">
                    Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididuntLorem ipsum dolor sit amet,
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <div className="token flex aic jc">
          <div className="block flex">
            <div className="left flex aic jc">
              <div className="chart">
                <PieChart width={450} height={450}>
                  <Pie
                    data={data1}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                  />
                  <Pie
                    data={data2}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#facc15"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
            </div>
            <div className="right flex jc flex-col">
              <div className="heading">TOKEN ALLOCATION</div>
              <div className="contant flex flex-col">
                <div className="item flex">
                  <div className="lbl">Total Supply:</div>
                  <div className="lbl-data">1,000,000,000 MDL</div>
                </div>
                <div className="item flex">
                  <div className="lbl">Seed Sale:</div>
                  <div className="lbl-data">5.1% 51,000,000 MDL</div>
                </div>
                <div className="item flex">
                  <div className="lbl">PCS liquidity:</div>
                  <div className="lbl-data">1.4% 14,000,000 MDL</div>
                </div>
                <div className="item flex">
                  <div className="lbl">TMarketing:</div>
                  <div className="lbl-data">5% 50,000,000</div>
                </div>
                <div className="item flex">
                  <div className="lbl-data">
                    {" "}
                    20% Released at TGE, then 20% at month 1, month 2, month 3
                    and 4
                  </div>
                </div>
                <div className="item flex">
                  <div className="lbl">Team: 5%</div>
                  <div className="lbl-data">
                    50,000,000 MDL Linearly over 36 months
                  </div>
                </div>
                <div className="item flex">
                  <div className="lbl">Burn/Blackhole</div>
                  <div className="lbl-data">83.5% 835,000,000 MDL</div>
                </div>
                <button className="cleanbtn btn">OPEN-SOURCE</button>
              </div>
            </div>
          </div>
        </div>
        <section className={clsx("w-full relative bg-img bg-img-4")}>
          <Container maxWidth="xl">
            {/* <div className="w-full py-12">
              <h1 className="font-quantico font-bold my-8 text-center text-4xl md:text-6xl text-white uppercase">
                Game experiences
              </h1>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  title="experience"
                  src="https://player.vimeo.com/video/495551847?h=3ea87b51fd&loop=1&title=0&byline=0"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div> */}
            <div className="w-full py-8">
              <div className="w-full my-12">
                <p className="font-quantico rounded-lg py-4 px-8 max-w-max mx-auto text-3xl md:text-4xl text-black uppercase bg-yellow-400 shadow-md shadow-yellow-400">
                  Our Team
                </p>
              </div>
              <div className="hidden-scrollbar pb-4 overflow-x-auto whitespace-nowrap">
                <div className="flex h-auto">
                  {/*{Object.keys(Array.from(Array(6))).map((t, i) => (

                  ))}*/}
                  <div className="w-auto md:w-64 mx-2 flex flex-col">
                    <img
                      className="rounded-t-lg h-48 w-auto md:w-64 object-cover"
                      src={`/images/susaan.jpg`}
                      alt="Team"
                    />
                    <div className="rounded-b-lg px-2 py-4 bg-orange-900">
                      <p className="text-sm text-white truncate">susan</p>
                    </div>
                  </div>
                  <div className="w-auto md:w-64 mx-2 flex flex-col">
                    <img
                      className="rounded-t-lg h-48 w-auto md:w-64 object-cover"
                      src={`/images/Kenneth.jpg`}
                      alt="Team"
                    />
                    <div className="rounded-b-lg px-2 py-4 bg-orange-900">
                      <p className="text-sm text-white truncate">Kenneth</p>
                    </div>
                  </div>

                  <div className="w-auto md:w-64 mx-2 flex flex-col">
                    <img
                      className="rounded-t-lg h-48 w-auto md:w-64 object-cover"
                      src={`/images/Shirley.jpg`}
                      alt="Team"
                    />
                    <div className="rounded-b-lg px-2 py-4 bg-orange-900">
                      <p className="text-sm text-white truncate">Shirley</p>
                    </div>
                  </div>

                  <div className="w-auto md:w-64 mx-2 flex flex-col">
                    <img
                      className="rounded-t-lg h-48 w-auto md:w-64 object-cover"
                      src={`/images/Margaret.jpg`}
                      alt="Team"
                    />
                    <div className="rounded-b-lg px-2 py-4 bg-orange-900">
                      <p className="text-sm text-white truncate">Margaret</p>
                    </div>
                  </div>

                  <div className="w-auto md:w-64 mx-2 flex flex-col">
                    <img
                      className="rounded-t-lg h-48 w-auto md:w-64 object-cover"
                      src={`/images/Nicholas.jpg`}
                      alt="Team"
                    />
                    <div className="rounded-b-lg px-2 py-4 bg-orange-900">
                      <p className="text-sm text-white truncate">Nicholas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
