import { SHIMMER_RES_CARDS_COUNT } from '../config';

// const CardShimmer = () => {
//   return (
//     <div className="shimmer-card">
//       <div className="shimmer-img stroke animate"></div>
//       <div className="shimmer-title stroke animate"></div>
//       <div className="shimmer-tags stroke animate "></div>
//       <div className="shimmer-details stroke animate "></div>
//     </div>
//   );
// }

// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       {Array.from({length:SHIMMER_RES_CARDS_COUNT}).map((element, index) => {
//         return <CardShimmer key ={index} />
//       }) }
//     </div>   
//   )
// }

// export default Shimmer;


const CardShimmer = () => {
  return (
    <div className="border border-gray-300 shadow-md p-4 rounded-md mb-4">
      <div className="h-40 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
      <div className="h-6 w-2/3 bg-gray-200 rounded mb-2 animate-pulse"></div>
      <div className="h-4 w-1/3 bg-gray-200 rounded mb-2 animate-pulse"></div>
      <div className="h-4 w-5/6 bg-gray-200 rounded mb-2 animate-pulse"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-col space-y-4">
      {Array.from({ length: SHIMMER_RES_CARDS_COUNT }).map((_, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;