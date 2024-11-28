import React from "react";

const Main = () => {
    return (
        <main className="w-full h-screen flex flex-col px-96 relative top-32">
            <div className="flex items-center justify-center pt-6 mt-14 mb-12">
                <hr className="h-[3px] w-16 mr-[250px] bg-black"></hr>
                <div>
                    <h1 className="text-[36px] tracking-widest ">Bienvenue</h1>
                </div>
                <hr className="h-[3px] w-16 ml-[250px] bg-black"></hr>
            </div>

            <div className="flex flex-col items-center justify-center pt-6">
                <p className="text-center text-gray-500">
                    Selon une enquête, 60% des personnes interrogées sont déçu
                    de leur mariage...Mauvaise organisation, stresse... BH
                    Internet est présente pour vous accompagner pour le plus
                    beau jour de votre vie. Notre équipe s'occipe de tout afin
                    que vous puissiez profiter pleinement de votre journée et de
                    vos convives sans se soucier d'autre chose.
                </p>
                <p className="text-center mt-6 text-gray-500">
                    Pour vos évènements professionnels ou particuliers nous
                    mettons à votre disposition une équipe expérimentée qui sera
                    anticiper et maitriser chacune des situations
                </p>
            </div>
            <div className="flex flex-col w-full h-full gap-6 mt-12 ">
                <div className="flex flex-1 gap-6">
                    <div className="flex-1 relative">
                        <img
                            className="object-cover w-full h-full"
                            src="1.jpg"
                            alt="logo"
                        />
                        <div className="absolute inset-0 m-4 border-[1px] border-white">
                            <h1 className="text-2xl  text-white tracking-widest uppercase flex h-full items-end justify-start p-4">
                                Clé en main
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img
                            className="object-cover w-full h-full"
                            src="2.webp"
                            alt="logo"
                        />
                        <div className="absolute inset-0 m-4 border-[1px] border-white">
                            {" "}
                            <h1 className="text-2xl  text-white tracking-widest uppercase flex h-full items-end justify-start p-4">
                                A la carte
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img
                            className="object-cover w-full h-full"
                            src="1.jpg"
                            alt="logo"
                        />
                        <div className="absolute inset-0 m-4 border-[1px] border-white">
                            {" "}
                            <h1 className="text-2xl  text-white tracking-widest uppercase flex h-full items-end justify-start p-4">
                                Décoration mariage
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 gap-6">
                    <div className="flex-1 relative">
                        <img
                            className="object-cover w-full h-full"
                            src="2.webp"
                            alt="logo"
                        />
                        <div className="absolute inset-0 m-4 border-[1px] border-white">
                            <h1 className="text-2xl  text-white tracking-widest uppercase flex h-full items-end justify-start p-4">
                                Anniversaire
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img
                            className="object-cover w-full h-full"
                            src="1.jpg"
                            alt="logo"
                        />
                        <div className="absolute inset-0 m-4 border-[1px] border-white">
                            <h1 className="text-2xl  text-white tracking-widest uppercase flex h-full items-end justify-start p-4">
                                Evenement particulier
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img
                            className="object-cover w-full h-full"
                            src="2.webp"
                            alt="logo"
                        />
                        <div className="absolute inset-0 m-4 border-[1px] border-white">
                            <h1 className="text-2xl  text-white tracking-widest uppercase flex h-full items-end justify-start p-4">
                                évènement professionnel
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
