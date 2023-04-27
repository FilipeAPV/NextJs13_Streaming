import DelayedComponent, {
    DelayedComponentSkeleton,
  } from "../../ui/DelayedComponent";
import { Suspense } from "react";

function LoadingPage() {

    return (
        <div className="mt-10 border-2 w-1/2 mx-auto flex gap-4 items-center">            
            <p>Immediately Available Content</p>
            <DelayedComponent delay={1000}/>
            <DelayedComponent delay={3000}/>            
        </div>
    );
}

export default LoadingPage;