import useAuth from "../Hooks/useAuth";


const Google = () => {
    const {googleLogIn}=useAuth()
    
    return (
        <div>
            <button onClick={()=>googleLogIn()} className="btn btn-secondary">Secondary</button>

        </div>
    );
};

export default Google;