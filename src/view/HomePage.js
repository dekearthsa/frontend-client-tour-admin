import ComponentTitleHome from "../component/ComponentHome/ComponentTitleHome"
// import ComponentRecommand from "../component/ComponentHome/ComponentRecommand"
import ComponentPopularFeature from "../component/ComponentHome/ComponentPopularFeature"
import ComponentNavbarTour from "../component/ComponentHome/ComponentNavbarTour"
import ComponentChooseBrand from "../component/ComponentHome/ComponentChooseBrand"
import ComponentTopRate from "../component/ComponentHome/ComponentTopRate"
// import ComponentBottonBar from "../component/ComponentHome/ComponentBottonBar"
// import ComponentTest from "../component/ComponentTest/ComponentTest"
// import MultiImageStream from "../component/ComponentTest/MultiImageStream"
// import ComponentTestUploadContent from "../component/ComponentTest/ComponentTestUploadContent"
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar'
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';

const HomePage = () => {

    return(
        <>  
            <div className="text-white absolute  pt-5 mt-5 font-bold w-[100%] z-10">
                <ComponentHomeNavbar/>
            </div>  
            <ComponentTitleHome/>
            <ComponentPopularFeature/>
            <ComponentNavbarTour/>
            <div className="bg-gray-100">
                <ComponentChooseBrand />
            </div>
            <ComponentTopRate/>
            <ComponentBottonBar/>
            {/* <ComponentTest/> */}
        </>
    )
}

export default HomePage