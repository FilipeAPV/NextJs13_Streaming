async function DelayedComponent({delay}) {

  console.count("DelayedComponent");
  // TypeError: fetch failed at Object.fetch
  // Use 127.0.0.1 instead of localhost
  const response = await fetch(`http://127.0.0.1:3000/api?delay=${delay}`, {
    cache: "no-store",
  });
  const { message } = await response.json();

  

  return (
    <div>
      <p>{message}</p>
    </div>
  );

}

export default DelayedComponent;

function DelayedComponentSkeleton() {
  return (
    <div className="mx-auto flex justify-center items-center animate-pulse">
            <p className="text-lg font-semibold">Loading...</p>
    </div>
  );
}

export { DelayedComponentSkeleton };
