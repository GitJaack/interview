import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Hero from "./component/hero/Hero";
import Main from "./component/main/Main";
import Information from "./component/information/Information";
const page = () => {
    return (
        <main>
            <Header />
            <Nav />
            <Hero />
            <Main />
            <Information />
        </main>
    );
};

export default page;
