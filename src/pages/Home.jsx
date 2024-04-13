import { useState, useEffect } from "react"
import { FetchContacts } from "../apis/contacts"
import Contact from "../components/Contact";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    FetchContacts()
      .then((response) => {
        setContacts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className="flex justify-center items-center w-full bg-gray-500">
      <section className="bg-gray-500 text-white">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">My contacts</h2>

            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
              iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
              quibusdam, quos fuga minima.
            </p>
          </div>

          
              <Contact />
          
          
        </div>
      </section>
    </div>
  )
}

export default Home