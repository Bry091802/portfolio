import { imgPath } from "@/components/helpers/functions-general";
import { FaBriefcase, FaGasPump } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdRestaurant } from "react-icons/io";
import { VscCode } from "react-icons/vsc";

const Work = () => {
  return (
    <section className="bg-dark py-10">
      <h2 className=" items-center flex justify-center gap-5 py-4 text-5xl text-light">
        <FaBriefcase fill="black"/> Work Experience
      </h2>
      <div className="container px-32">
        <div className="flex items-center gap-[60px]">
          <div className="max-w-[800px]">
            <div className="">
              <h3 className="flex items-center gap-5 text-light">
                <IoMdRestaurant fill="yellow" size={30} /> Waiter/Helper
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, cumque tempora. Voluptas laboriosam deserunt neque
                blanditiis, reprehenderit similique excepturi itaque
                perspiciatis? Ad, ipsa mollitia consequuntur quos eius nisi?
                Repellat debitis voluptate culpa libero optio similique
                repellendus? Accusantium provident impedit fugit dolores numquam
                id voluptate laudantium perspiciatis! Sunt dolorem aut explicabo
                similique possimus illum necessitatibus sint voluptates dolorum
                temporibus ipsa, quisquam mollitia beatae non cupiditate
                distinctio labore ipsum dolor illo! Corrupti, modi aliquid,
                mollitia consequuntur porro iure velit, similique labore
                pariatur corporis est ratione omnis laborum dolorem molestiae at
                harum neque!
              </p>
            </div>
            <div className="py-5">
              <h3 className="flex items-center gap-5 text-light">
                <FaGasPump fill="yellow" size={30} /> Gasoline Boy
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                molestias dolorum, voluptatem veritatis suscipit a sint fugiat
                nesciunt cupiditate pariatur perferendis incidunt natus. Hic, in
                possimus odio, esse, vel incidunt vitae quaerat praesentium sunt
                unde inventore. Corrupti porro voluptatem sunt nostrum, dolor
                quisquam voluptate beatae mollitia minima! Quibusdam deserunt,
                voluptates magni iure enim laudantium modi aut illum voluptatum
                iusto dicta sunt, quidem recusandae, accusamus et iste! Nulla
                ducimus corporis ea repudiandae, quibusdam consequuntur dolore,
                praesentium mollitia impedit eligendi error ad officiis placeat
                dolores id. Quia nulla veniam sint, recusandae repellat impedit
                quod illo sapiente harum!
              </p>
            </div>
            <div className="py-5">
              <h3 className="flex items-center gap-5 text-light">
                <VscCode fill="yellow" size={30} /> Web Developer
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti quidem consequuntur voluptas adipisci consectetur
                dolores voluptatibus quisquam impedit eaque. A impedit modi,
                nesciunt quae vero rem minus deleniti. A dolor illo facilis eum
                quibusdam possimus porro eveniet excepturi sed laudantium eaque,
                recusandae ab cupiditate aperiam consequuntur repudiandae
                accusantium praesentium nam veniam doloremque? Dicta tenetur
                iure commodi ad voluptates eos earum provident id, quae
                accusantium numquam nulla quidem sit ipsum modi pariatur,
                aliquam libero labore optio illo impedit rerum accusamus.
                Voluptatem!
              </p>
            </div>
          </div>
          <div>
            <img
              src={`${imgPath}/work1.png`}
              alt=""
              className="rounded-xl w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
