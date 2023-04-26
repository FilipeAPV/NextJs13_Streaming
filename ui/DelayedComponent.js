async function DelayedComponent() {
  const response = await fetch("http://localhost:3000/api", {
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
    <div>
      <p>Loading...</p>
    </div>
  );
}

export { DelayedComponentSkeleton };
