import { useEffect, useState } from "react"
import { DeleteContact, FetchContactById } from "../apis/contacts";
import { useParams, useNavigate } from 'react-router-dom';

const ContactDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});
  const [message, setMessage] = useState({
    type: '',
    content: ''
  });

  useEffect(() => {
    FetchContactById(params.contactId)
     .then((response) => {
        setContact(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteContact = (event) => {
    event.preventDefault();

    DeleteContact(params.contactId)
     .then((response) => {
        setMessage({
          type:'success',
          content: response
        });
        
        setTimeout(() => {
          // Vanilla JavaScript, it reloads the website
          window.location.replace('/');
          // Using react-router-dom
          // navigate('/');
          
        },2000)
      })
     .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="bg-gray-500 p-4 md:p-8 lg:p-12 ">
      <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Contact Details</h1>
                <p className="mt-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                  ipsa culpa autem, at itaque nostrum!
                </p>
              </div>
    <div className="flex flex-col mt-20 gap-12">
      <div>
        <h1 class="text-white">Name: {contact.fullName}</h1>
      </div>
      <div>
        <p class="text-white">Phone: {contact.phone}</p>
      </div>
      <div>
        <p class="text-white">Email: {contact.email}</p>
      </div>

      <button className="inline-block rounded-lg bg-black w-40 px-5 py-3 text-sm font-medium text-white" onClick={deleteContact} type="button">Delete</button>
      
      {message.type === 'success' && <p className="px-3 py-2 text-green-700 bg-green-200 rounded-sm">{message.content}</p>}
      {message.type === 'error' && <p className="px-3 py-2 text-red-700 bg-red-200 rounded-sm">{message.content}</p>}

    </div>
    </section>
  )
}

export default ContactDetails