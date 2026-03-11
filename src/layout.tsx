import { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
   return (
      <div className="flex flex-col gap-4 p-4 max-w-md mx-auto items-center">
         {props.children}
      </div>
   );
};
