"use client";

import { useState } from "react";
import AccordionItem from "../ui/Accordion";
import { faqs, faq } from "@/types/faqType";

export default function Accordions({ data }: { data: faqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // cook data for map extract needble items
  const accordionItems = data.flatMap((item: faq) => {
    if (!item.question || item.question.length === 0) return [];
    return item.question.map((q) => ({
      id: q.id,
      title: q.question,
      content: q.answer,
      parentId: item.id,
    }));
  });

  return (
    <div className="w-full mx-auto mt-10 shadow-md rounded-xl overflow-hidden my-20 bg-primary-40 hidden lg:block">
      <div className="flex flex-row items-center justify-between px-6">
        <div className="">
          <div className="flex flex-col gap-y-5 items-start">
            <p className="text-lg lg:text-xl">سوالات متداول مربوط به وب ۳</p>
            <p className="text-sm text-base-80">اگر نیاز به پشتیبانی دارید با کارشناسان ما تماس بگیرید</p>
            <button className="text-primary-20 bg-primary-100 text-sm py-2 px-4 rounded-md">پیام به پشتیبانی</button>
          </div>
        </div>
        <div className="">
          {/* map and render 5 items from FAQ data */}
          {accordionItems.slice(0, 5).map(({ id, title, content }) => (
            <AccordionItem
              key={id}
              title={title}
              content={content}
              isOpen={openIndex === id}
              onToggle={() => setOpenIndex(openIndex === id ? null : id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
