import React from "react";

const Hero = () => {
    return (
        <section className="relative h-[65vh] top-40">
            <img
                className="w-full h-full object-cover"
                src="heroImg.jpg"
                alt="hero"
            />
            <div
                className="absolute top-0 left-0 w-full h-full 
            flex"
            >
                <div className="flex w-[50%] justify-end items-center pr-10">
                    <div className="flex items-center justify-center">
                        <h1
                            className="font-extralight text-4xl
                            tracking-widest
                            text-white
                        text-center bg-black/80 py-2 px-8"
                        >
                            bh internet, à votre <br></br> disposition pour
                            <br></br>
                            l'organisation de votre <br></br> soirée
                        </h1>
                    </div>
                </div>

                <div className="w-[50%]">
                    <div className="w-[500px] mt-20 bg-black/80 p-5 pb-14">
                        <form className="flex flex-col gap-4">
                            <div className="flex justify-center items-center">
                                <p className="text-xl text-white text-center w-[300px]">
                                    Estimez gratuitement votre budget pour votre
                                    évènement
                                </p>
                            </div>

                            <div className="flex justify-between w-full gap-4">
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="entreprise"
                                        className="text-white"
                                    >
                                        Entreprise
                                    </label>
                                    <input
                                        id="entreprise"
                                        type="text"
                                        placeholder="Entreprise"
                                        className="p-2 rounded border border-gray-300"
                                    />

                                    <label
                                        htmlFor="nom"
                                        className="text-white"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        id="nom"
                                        type="text"
                                        placeholder="Nom"
                                        className="p-2 rounded border border-gray-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="email"
                                        className="text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="text@exemple.fr"
                                        className="p-2 rounded border border-gray-300"
                                    />
                                    <label
                                        htmlFor="tel"
                                        className="text-white"
                                    >
                                        Téléphone
                                    </label>
                                    <input
                                        id="tel"
                                        type="tel"
                                        placeholder="Tél"
                                        className="p-2 rounded border border-gray-300"
                                    />
                                </div>
                            </div>

                            <label
                                htmlFor="typeProduit"
                                className="text-white"
                            >
                                Type de produit
                            </label>
                            <select
                                className="p-2 rounded border border-gray-300"
                                id="typeProduit"
                            >
                                <option>----</option>
                                {/* Ajoutez d'autres options ici */}
                            </select>
                            <button
                                type="submit"
                                className="bg-red-600 text-white p-2 hover:opacity-80 w-[120px] mx-auto mt-5"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
