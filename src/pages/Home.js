import { motion } from "framer-motion";
import NavBar from "../components/navBar/NavBar";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

function Home() {
    return (
      <div>
        <NavBar />
        <section className="page">
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
            className=""
          >
            <div className="container">
              <h2>HELLO</h2>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Cras facilisis urna ornare ex volutpat, et convallis erat
                elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                hendrerit laoreet augue nec molestie. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </motion.main>
        </section>
      </div>
    );
}

export default Home;
