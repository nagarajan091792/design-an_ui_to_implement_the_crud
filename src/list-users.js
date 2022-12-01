import axios from "axios";
import './App.css';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Users () {
    const [users,setUsers] = useState([]);
    const [isloading,setloading] = useState(false)
    useEffect(()=>{
        fetchData()
    },[])

    let  fetchData = async () => {
        try {
            setloading(true)
          const users =  await axios.get("https://63873d31e399d2e473f90617.mockapi.io/User")
          console.log(users)
          setUsers(users.data)
          setloading(false)
        } catch (error) {
          alert ("error")  
        }
    }
    const deleteUser = async (id) => {
        let ask = window.confirm("Do you want to delete!!");
        if (ask){
            try {
                await axios.delete (`https://63873d31e399d2e473f90617.mockapi.io/User/${id}`)
                fetchData();
           
            alert("Deleted")
        }
        catch(error){

        }
        }
    }

    return (
        <div class="container-fluid mb-10" >

        
        <div class="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
            <h1 class="h3 mb-0 text-gray-800">Users List</h1>
            <Link to={"/create-user"} href="#" class="d-none d-lg-inline-block btn btn-lg btn-primary shadow-sm"><i
                    class="fas fa-user-plus fa-lg text-white-90"></i> Create User</Link>
        </div>
        <div> 
       
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h5 class="m-0 font-weight-bold text-primary">Users Table</h5>
            </div>
            {
                isloading ? <span>Loading.....</span> : <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th>Dob</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th>Dob</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                       
                          
                            
                           {users.map((user)=>{
                            return <tr>
                              <td>{user.id}</td>  
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.country}</td>
                            <td>{user.state}</td>
                            <td>{user.city}</td>
                            <td>{user.phone}</td>
                            <td>{user.dob}</td>
                            <td>{user.gender}</td>
                            <td>< Link to={`/view-user/${user.id}`} className="btn btn-primary mr-2 mb-2">View</Link>
                            < Link to={`/edit-user/${user.id}`} className="btn btn-info mr-2 mb-2">Edit</Link>
                            < button onClick={ () => deleteUser(user.id)} className="btn btn-danger mb-2">Delete</button></td>
                        </tr>
                           })}
                            
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </div>

    </div></div>

    )
}
export default Users