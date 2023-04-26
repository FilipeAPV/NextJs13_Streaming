import DelayedComponent from "../../ui/DelayedComponent";

async function LoadingPage() {

    return (
        <div className="mt-10  border-2 w-1/2 mx-auto flex gap-4">
            <p>Immediately Available Content</p>
            <DelayedComponent />
        </div>
    );
}

export default LoadingPage;