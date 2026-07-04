// import Section from "../components/common/Section";
// import Heading from "../components/common/Heading";
// import Button from "../components/common/Button";
// import Navbar from "../components/Navbar/Navbar";

// function Home() {
//     return (
//         <>
//             <Navbar />
//             <main className="pt-32">

//                 <Section>
//                     <Heading
//                         title="Welcome to Dway Digital"
//                         subtitle="Crafting modern websites that help businesses grow online."
//                     />

//                     <div className="flex justify-center">
//                         <Button>Let's Build Together</Button>
//                     </div>
//                 </Section>
//             </main>

//         </>
//     );
// }

// export default Home;



// // import Navbar from "../components/Navbar/Navbar";

// // function Home() {
// //     return (
// //         <>
// //             <Navbar />
// //             <h1 className="text-white text-5xl">
// //                 Home Working 🚀
// //             </h1>
// //         </>
// //     );
// // }

// // export default Home;


// import Section from "../components/common/Section";
// import Heading from "../components/common/Heading";
// import Button from "../components/common/Button";
// import Navbar from "../components/Navbar/Navbar";

// function Home() {
//     return (
//         <>
//             <Navbar />

//             <main className="pt-32">
//                 <Section>
//                     <Heading
//                         title="Build Powerful Digital Solutions for Your Business"
//                         subtitle="Dway Digital designs and develops modern websites, mobile apps, desktop applications, and custom software that help businesses grow faster and smarter."
//                     />

//                     <div className="mt-8 flex flex-wrap justify-center gap-4">
//                         <Button>Start Your Project</Button>
//                         <Button>View Our Services</Button>
//                     </div>
//                 </Section>

//                 <Section>
//                     <Heading
//                         title="Why Choose Dway Digital?"
//                         subtitle="We combine modern technologies, clean development practices, and transparent communication to deliver software that creates real business value."
//                     />

//                     <div className="grid gap-6 md:grid-cols-3 mt-12">
//                         <div>🚀 Modern Technologies</div>
//                         <div>⚡ Fast Delivery</div>
//                         <div>🎯 Business-Focused Solutions</div>
//                         <div>💻 Clean & Scalable Code</div>
//                         <div>🤝 Dedicated Support</div>
//                         <div>🔒 Secure Applications</div>
//                     </div>
//                 </Section>
//             </main>
//         </>
//     );
// }

// export default Home;
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";
import Technologies from "../components/Home/Technologies";
import Services from "../components/Home/Services";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Process from "../components/Home/Process";
import PortfolioPreview from "../components/Home/PortfolioPreview";
import Testimonials from "../components/Home/Testimonials";
import CTA from "../components/Home/CTA";
import Footer from "../components/common/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <main className="pt-32 overflow-hidden bg-[#030712]">
                <Hero />
                <Stats />
                <Technologies />
                <Services />
                <WhyChooseUs />
                <Process />
                <PortfolioPreview />
                <Testimonials />
                <CTA />
                <Footer />
            </main>
        </>
    );
}

export default Home;