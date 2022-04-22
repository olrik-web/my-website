import NavBar from "../components/navBar/NavBar";

function Whoops404() {
    return (
        <div>
            <NavBar />
            <section className="page">
                <article>
                    <p>Whoops... This page does not exist.</p>
                </article>
            </section>
        </div>
    );
}
export default Whoops404;