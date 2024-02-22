//let firstName = "John", let lastName = "Doe", let job = "Software Engineer", 
// let isManager = false, let experience = 5, let email = 
// "john.doe@google.com" let programLangs = ["JavaScript", "Python", "Machine Learning"]
// //
import "./styles.css";
function Homework20() {
    let firstName: string="John";
    let lastName: string="Doe";
    let job:string="Software Engineer";
    let isManager:boolean=false;
    let experience: number=5;
    let email: string="john.doe@google.com";
    let programLangs: string[]=["JavaScript","Python", "Machine learning"];
   
      return (
        <div className="card-container">
        <div className="card">
            <h2>{firstName} {lastName}</h2>
          
            <p> <span>Job: </span>{job}</p>
            <p><span>Experience: </span>{experience} years</p>
            <p><span>Email: </span> {email}</p>
            <p><span>Languages: </span>{programLangs.join(', ')}</p>
            <p><span>Status: </span>{isManager ? 'Manager' : 'Employee'}</p>
        </div>
        </div>
    );
    }
    
    export default Homework20;