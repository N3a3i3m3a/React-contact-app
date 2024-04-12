import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const Contact = () => {
    return (
          <section className='bg-black py-7 px-7 mb-3  flex flex-row gap-32'>
            <div>
             <h3>Name: {Contact.fullName}</h3>
             <h3>Phone:{Contact.phone}</h3>
             <h3>Email: {Contact.email}</h3>
            </div>
            <div className=' flex flex-col gap-3'>
            <div className=''>
              <Link to={'`${contact._id}`'} className=''><FaEye /></Link>
              </div>
              <div className=''>
              <Link to={'`${/update/:contactId}`'} className=''><CiEdit /></Link>
              </div>
              <div className=''>
              <Link to={'/deleteContact'} className=''><MdDelete /></Link>
              </div>
            </div>  
              
         </section> 
                        
    
    )
}

export default Contact