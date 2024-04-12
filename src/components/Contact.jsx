import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; 
const Contact = ({ contact }) => {
    return (
          <section className='bg-black py-7 px-7 mb-3  flex flex-row gap-32'>
            <div>
             <h3>Name: {contact.fullName}</h3> 
             <h3>Phone:{contact.phone}</h3>
             <h3>Email: {contact.email}</h3>
            </div>
            <div className=' flex flex-col gap-3'>
              <div className=''>
                <Link to={`/contact/${contact._id}`} className=''><FaEye /></Link> {/* Corrected template literal */}
              </div>
              <div className=''>
                <Link to={`/update/${contact._id}`} className=''><FaEdit /></Link> {/* Corrected template literal and using FaEdit */}
              </div>
              <div className=''>
                <Link to={`/deleteContact/${contact._id}`} className=''><FaTrash /></Link> {/* Corrected template literal and using FaTrash */}
              </div>
            </div>  
              
         </section> 
                        
    
    )
}

export default Contact;
