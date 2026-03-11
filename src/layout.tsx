import { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
   return (
      <div className="flex flex-col gap-4 w-full p-4 mx-auto items-center">
         {props.children}
      </div>
   );
};
