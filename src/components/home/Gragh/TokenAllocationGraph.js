import React, {Fragment, useState} from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../graph.json";
import {Pie, PieChart, Tooltip} from "recharts";
import  "../../../components/design/App.css";
const Graph = (props) => {
    // const [open, setOpen] = useState(false);
    const defaultOptions = {
        loop: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Fragment>
            {/*   <div style={{backgroundColor: 'black'}}>
                <Lottie options={defaultOptions}
                        height={450}
                        width={450}/>
            </div>*/}

            <div className="token flex aic jc">
                <div className="my-32 w-full flex flex-col md:flex-row items-center space-x-4 md:flex-row block">
                    <div className="w-full md:w-1/2 h-auto">
                        <div>
                            <Lottie options={defaultOptions} height={'100%'} width={'100%'}/>
                        </div>
                    </div>
                    <div className="right flex jc gflex-col">
                        <div className="heading">TOKEN ALLOCATION</div>
                        <div className="contant flex gflex-col">
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

        </Fragment>
    );
};

export default Graph;