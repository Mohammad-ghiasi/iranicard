import { ReactNode } from "react";

export default function BodyProvider({ children }: {children: ReactNode}) {
  return (
    <div className="w-full">
      <section className="max-w-[1220px] mx-auto py-[16px] px-3 lg:px-5">
        {children}
      </section>
    </div>
  );
}
