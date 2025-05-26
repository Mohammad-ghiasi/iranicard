import { ReactNode } from "react";

export default function HeaderProvider({ children }: {children: ReactNode}) {
  return (
    <div className="w-full">
      <header className="max-w-[1220px] mx-auto py-[16px] px-3 xl:px-0">
        {children}
      </header>
    </div>
  );
}
