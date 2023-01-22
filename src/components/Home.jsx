import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>


      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            laboriosam eveniet obcaecati consequatur optio corrupti, error
            facere officiis odit enim debitis recusandae ad quibusdam
            praesentium necessitatibus dignissimos, perferendis velit libero
            fugit ipsam, quis commodi explicabo? Rerum harum cum dolorem
            similique numquam beatae facilis libero, modi neque quo corporis
            nobis ipsam. Nobis quis fugiat aut maxime consequuntur provident
            vero ipsam fugit numquam. Hic distinctio labore laudantium sint
            voluptates perferendis, illo quidem provident ex veniam blanditiis
            excepturi! Aspernatur tempore repudiandae facere molestiae, iusto
            delectus. Fuga vitae labore, dignissimos, laboriosam facere veniam
            sit libero suscipit voluptas sunt hic et quaerat soluta omnis ipsa,
            perspiciatis facilis. Quo, excepturi inventore incidunt labore dicta
            voluptatum adipisci qui beatae blanditiis, saepe quibusdam
            repellendus, architecto impedit vitae consequuntur laboriosam!
            Delectus debitis minus esse ut laborum repellat mollitia nesciunt
            reprehenderit natus incidunt earum assumenda quis nulla voluptatem
            eveniet quaerat,
          </p>
        </div>
      </div>
      <div className="home4" id = "brands"> 
        <div>
          <h1>Brands</h1>

          <article>
            <div 
             style={{
              animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div 
             style={{
              animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div 
             style={{
              animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>

            <div 
             style={{
              animationDelay: "1s",
              }}
            >
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
