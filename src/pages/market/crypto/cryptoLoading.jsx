import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const CryptoLoading = () => {

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
    


export default CryptoLoading;

