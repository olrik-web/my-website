import NavBar from "../components/navBar/NavBar";
import SocialBar from "../components/socials/SocialBar";

function Whoops404() {
  return (
    <div>
      <NavBar />
      <SocialBar />
      <section className="page">
        <article>
          <p>Whoops... This page does not exist.</p>
        </article>
      </section>
    </div>
  );
}
export default Whoops404;
