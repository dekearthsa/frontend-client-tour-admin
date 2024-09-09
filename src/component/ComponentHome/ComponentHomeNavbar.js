import { useNavigate } from 'react-router-dom';

const ComponentHomeNavbar = () => {
    const navigate = useNavigate();
    
    const haddleAboutPage = () => {
        navigate("/about")
    }

    const haddleShopPage = () => {
        navigate("/shop")
    }

    const haddleContactPage = () => {
        navigate("/contact")
    }

    const haddleHomePage = () => {
        navigate("/")
    }

    return(   
        <div className="flex justify-between items-center px-4  md:px-10 lg:px-20">
            <div>
                <button onClick={haddleHomePage} className="text-lg font-bold hover:scale-125 duration-500">
                    LOGO
                </button>
            </div>
            <div className="flex space-x-4 md:space-x-8 lg:space-x-16">
                <button onClick={haddleShopPage} className="text-sm md:text-base lg:text-lg hover:scale-125 duration-500">
                    Tour
                </button>
                <button onClick={haddleContactPage} className="text-sm md:text-base lg:text-lg hover:scale-125 duration-500">
                    Contract
                </button>  
                <button onClick={haddleAboutPage} className="text-sm md:text-base lg:text-lg hover:scale-125 duration-500">
                    About
                </button>
            </div>
        </div>
    )
}

export default ComponentHomeNavbar
