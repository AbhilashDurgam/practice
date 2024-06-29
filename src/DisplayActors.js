function DisplayActors(props){
    // console.log(props)
    return(
    <div>
         {
            props.actorInformation.map((item)=>(
                <div>
                    <p>{item.actorname}</p>
                    <p>{item.actordod}</p>
                    <p>{item.actormovie}</p>
                    <img src={item.actorimage} alt={item.actorname} width='20%'/>

                </div>
            ))
         }
    </div>
    )
}
export default DisplayActors;