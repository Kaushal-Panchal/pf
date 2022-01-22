import React from "react";
import SkillBar from "./SkillBar";

const Skills = () => {
    return (
        <div className=" p-1">
            <div
                style={{
                    borderImage:
                        "linear-gradient(to top, rgb(254, 202, 202), rgba(0, 0, 0, 0)) 1 100%",
                }}
                className=" border-l-2 border-r-2 mx-5 "
            >
                <div className="p-5 text-white md:p-14">
                    <div className="flex  sm:flex-row flex-col">
                        <div className="w-1/5  self-center">
                            <div className="text-2xl border-b-2 border-pink-200  text-center mt-5 font-nunito transform sm:-rotate-90 text-pink-400">
                                Skills
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex sm:flex-row flex-col justify-around gap-x-11">
                                <SkillBar name={"React JS"} percent={90} />
                                <SkillBar
                                    name={" HTML CSS  JavaScript"}
                                    percent={95}
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col justify-around gap-x-11">
                                <SkillBar name={"Java"} percent={75} />
                                <SkillBar
                                    name={"Data Structures & Algorithms"}
                                    percent={90}
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col justify-around gap-x-11">
                                <SkillBar name={"Full Stack"} percent={83} />
                                <SkillBar name={"Node JS"} percent={75} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
