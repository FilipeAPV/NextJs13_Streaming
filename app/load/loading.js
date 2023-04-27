import { DelayedComponentSkeleton } from "@/ui/DelayedComponent";

function Loading() {
    return(
        <div className="mt-10">
            <DelayedComponentSkeleton />    
        </div>
    );
}

export default Loading;