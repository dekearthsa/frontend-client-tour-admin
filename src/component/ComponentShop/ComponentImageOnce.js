const ComponentImageOnce = ({image}) => {
    const img = image
    return(
        <div>
            <img className="object-contain w-full h-[100vh]" src={img}/>
        </div>
    )
}

export default ComponentImageOnce