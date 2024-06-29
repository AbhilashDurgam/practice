import { useState } from "react";
import Display from "./Display";

function Cartons(){
    const [Cartons,setCartons]=useState([
    {
        c_name:'Ben 10',
        start_year:' December 27, 2005',
        image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/ben_10-story_647_060915034850.jpg?VersionId=R.QWcxSNmkiMH3MUxC7cDQtbfdaQCIdK?size=1200:675'
    },
    {
        c_name:'Tom & gerry',
        start_year:'1940',
        image:'https://static.euronews.com/articles/stories/07/38/86/86/1440x810_cmsv2_34816e51-346c-525e-9d16-c92108f88346-7388686.jpg'
    },
    {
        c_name:'Doraemon',
        start_year:'April 2, 1979',
        image:'https://lh7-us.googleusercontent.com/59ien3PkhsuT0XtjkMAO3wR0gOe32RDwS-FKkHkf7BFLBy5G1Gfe0_AvjVo_6f61ktY1qTF4wV_ILcLiMnLDDcEt3Tsn87JW1QUUhZZ9sJoDMls2MqTJ4kQh7BpEfF7xnvfVnDSFmEPVEACeNhA_1dk'
    },
    {
        c_name:'Shinchan',
        start_year:'April 13, 1992',
        image:'https://qph.cf2.quoracdn.net/main-qimg-c88afd51814e966679880ed4f9b3d95c.webp'
    }
])
    return(
        <div>
            <Display DisplayAll={Cartons} />
        </div>
    )
}
export default Cartons;