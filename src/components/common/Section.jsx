import Container from "./Container";

function Section({ children }) {
    return (
        <section className="py-24">
            <Container>
                {children}
            </Container>
        </section>
    );
}

export default Section;