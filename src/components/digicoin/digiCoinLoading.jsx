import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DigiCoinLoading = () => {
  // return Array(6).fill({}).map(()=>{
  //     return(
  //         <div className="col-4 text-center p-5">
  //             <Skeleton className="mb-4"  height={200} width={200}/>
  //             <Skeleton className="mb-2" height={30} count={2}/>
  //         </div>
  //     )
  // })
  return (
    <>
      <div className="p-5" style={{ width: "100%" }}>
        <Skeleton height={60} />
        <Skeleton  height={60} />
        <Skeleton  height={60} />
        <Skeleton  height={60} />
        <Skeleton  height={60} />
        <Skeleton  height={60} />
        <Skeleton  height={60} />
        <Skeleton  height={60} />
        <Skeleton  height={60} />
      </div>
    </>
  );
};

export default DigiCoinLoading;
