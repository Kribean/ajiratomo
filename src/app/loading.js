export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex justify-center h-screen w-full align-middle">
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
    </div>
  );
}
