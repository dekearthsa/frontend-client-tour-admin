const ComponentPopupLoadingCreateUpdate = () => {
    return(
        <>
            <div className="z-[999] fixed h-[100vh] w-[100%] bg-gray-500 opacity-[.5]">
                <div className="text-[50px] font-bold  text-white flex justify-center translate-y-[350px]">
                    <span className="loader-loading mr-5"></span>
                    <span>Loading...</span>
                </div>
            </div>
        </>
    )
}

export default  ComponentPopupLoadingCreateUpdate