"use client";
import { ChevronDown, ChevronUp } from "lucide-react";

type AccordionItemProps = {
    title: string;
    content: string | React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
};

export default function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-gray-200 w-full">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-base-80 hover:bg-primary-20 transition-all"
            >
                <div className="flex items-center gap-x-2"><img src="/images/icons/Vector.svg" alt="Vector" className="w-[23.59] h-[21.75] md:w-[28px] md:h-[25.83px]" /><p className="text-sm *:">{title}</p></div>
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <div
                className={`px-4 text-gray-600 text-sm overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[300px] py-2" : "max-h-0"
                    }`}
            >
                <div className="py-2">{content}</div>
            </div>
        </div>
    );
}
