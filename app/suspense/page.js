import React from "react";
import { Suspense } from "react";

import DelayedComponent, {
  DelayedComponentSkeleton,
} from "../../ui/DelayedComponent";

function SuspensePage() {
  return (
    <div className="mt-10 border-2 w-1/2 mx-auto flex gap-4 items-center">
      <p>Immediately Available Content</p>
      <Suspense fallback={<DelayedComponentSkeleton />}>
            <DelayedComponent delay={2000}/>            
      </Suspense>
      <Suspense fallback={<DelayedComponentSkeleton />}>
            <DelayedComponent delay={5000}/>            
      </Suspense>     
    </div>
  );
}

export default SuspensePage;
