import useAuth from "../Hooks/useAuth";


const GitHub = () => {
    const {githubLogIn}=useAuth()
    return (
        <div>
            <button className="btn btn-secondary" onClick={()=>githubLogIn()}>GitHub</button>
        </div>
    );
};

export default GitHub;