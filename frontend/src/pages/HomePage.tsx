import { useNavigate } from "react-router-dom";


type Props = {
  
}

const HomePage = ({}: Props) => {
    const navigate = useNavigate();

    return (
        <div className="flex-col min-h-screen">
            <h1>Welcome to the Home Page</h1>
            <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
    );
  
}

export default HomePage;