import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingCoinPrice = () => {
    // return Array(6).fill({}).map(()=>{
    //     return(
    //         <div className="col-4 text-center p-5">
    //             <Skeleton className="mb-4"  height={200} width={200}/>
    //             <Skeleton className="mb-2" height={30} count={2}/>
    //         </div>
    //     )
    // })
return(<>
<div>khfghdchg</div>
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={60} />
<Skeleton variant="rounded" width={210} height={60} /></>)
}
 
export default LoadingCoinPrice;