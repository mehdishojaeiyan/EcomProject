import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const MArketLoading = () => {
  return Array(2)
    .fill({})
    .map(() => {
        return(
            <div className="col-4 text-center p-5" style={{display:"flex", width:"100%",justifyContent:"space-around"}}>
                <Skeleton className="mb-4"  height={200} width={200}/>
                <Skeleton className="mb-4"  height={200} width={200}/>
                <Skeleton className="mb-4"  height={200} width={200}/>
                <Skeleton className="mb-4"  height={200} width={200}/>
                <Skeleton className="mb-4"  height={200} width={200}/>
               
                
            </div>
        )
    });
};

export default MArketLoading;

