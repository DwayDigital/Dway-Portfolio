import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <main className="pt-32">

                <Section>
                    <Heading
                        title="Welcome to Dway Digital"
                        subtitle="Crafting modern websites that help businesses grow online."
                    />

                    <div className="flex justify-center">
                        <Button>Let's Build Together</Button>
                    </div>
                </Section>
            </main>

        </>
    );
}

export default Home;



// import Navbar from "../components/Navbar/Navbar";

// function Home() {
//     return (
//         <>
//             <Navbar />
//             <h1 className="text-white text-5xl">
//                 Home Working 🚀
//             </h1>
//         </>
//     );
// }

// export default Home;