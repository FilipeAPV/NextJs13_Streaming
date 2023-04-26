async function DelayedComponent() {
    const response = await fetch("http://localhost:3000/api");
    const { message } = await response.json();

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default DelayedComponent;