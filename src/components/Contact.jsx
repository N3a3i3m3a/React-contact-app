import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const Contact = ({contact}) => {
    return (
            <div className='bg-black py-7 px-7 mb-3  flex flex-row gap-32'>
            <div className=''>
             <h3>Name: {contact.fullName}</h3>
             <h3>Phone:{contact.phone}</h3>
             <h3>Email: {contact.email}</h3>
            </div>
            <div className=' flex flex-col gap-3'>
            <div className=''>
              <Link to="/:contactId" className=''><FaEye /></Link>
              </div>
              <div className=''>
              <Link to="/update/:contactId" className=''><CiEdit /></Link>
              </div>
              <div className=''>
              <Link to={'/deleteContact'} className=''><MdDelete /></Link>
              </div>
            </div>  
              
         </div> 
                        
    
    )
}

export default Contact