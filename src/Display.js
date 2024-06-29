function DisplayAll(props){
    const box={
        display : 'flex',
        justifyContent : 'center'
    }
    return(
        <div>
            {
                props.DisplayAll.map((item)=>(
                    <div id="box">
                        <h1 style={{color:'red'}}>Carton name:- {item.c_name}</h1>
                        <h1 style={{color:'blue'}}>started at:- {item.start_year}</h1>
                        <img src={item.image} alt={item.c_name} width='20%'/>
                    </div>
                ))
            }
        </div>
    )   
}


export default DisplayAll;