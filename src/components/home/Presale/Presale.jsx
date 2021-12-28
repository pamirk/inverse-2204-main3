import { useState, Fragment } from "react";
import { Modal } from "components/design";
const PresaleButton = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <button
                className="cursor-pointer bg-gray-500/50 w-48 h-12 text-white uppercase border-2 border-yellow-400 rounded-lg"
                onClick={() => setOpen(true)}
            >
                Presale
            </button>
            <Modal
                open={open}
                title="Presale"
                cancelText="Cancel"
                successText="Ok"
                onClose={() => setOpen(false)}
                onSuccess={() => setOpen(false)}
            >
                <div className="w-full flex justify-center">
                    <h4 className="text-2xl rounded-lg text-center p-3 bg-white/10 text-yellow-400 font-quantico">
                        0x0000000000
                    </h4>
                </div>
                <div className="w-max-w mt-3 p-3">
                    <form action="" className="w-full">
                        <div className="flex flex-col md:flex-row">
                            <input
                                id="idk-1"
                                type="text"
                                className="bg-transparent bg-white/10 rounded-lg text-yellow-400 placeholder-yellow-400/30 p-2"
                                placeholder="000x"
                            />
                            <label
                                htmlFor="idk-1"
                                className="flex mt-2 md:mt-0 md:flex-1 items-center md:justify-around"
                            >
                                <p className="p-1 md:p-2 text-yellow-400 text-lg md:text-xl">
                                    BNB
                                </p>
                                <p className="text-white/50 mx-1">x</p>
                                <p className="rounded-lg p-1 md:p-2 text-yellow-400 bg-white/10  text-lg md:text-xl">
                                    0.056
                                </p>
                            </label>
                        </div>
                        <div className="mt-4 flex justify-start">
                            <input
                                id="idk-2"
                                type="text"
                                className="bg-transparent bg-white/10 rounded-lg text-yellow-400 placeholder-yellow-400/30 p-2"
                                placeholder="000x"
                            />
                            <label htmlFor="idk-2" className="flex">
                                <p className="p-1 md:p-2 text-yellow-400 text-lg md:text-xl">
                                    Tokens
                                </p>
                            </label>
                        </div>
                    </form>
                </div>
            </Modal>
        </Fragment>
    );
};

export default PresaleButton;