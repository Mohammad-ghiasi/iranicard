import BodyProvider from "../providers/BodyProvider";
import Accordions from "./Accordions";

// ssr fetch data
export default async function FAQ() {
    const res = await fetch(
        'https://panel.irxe.com/api/faqs?populate=*',
        {
            next: { revalidate: 990 },
        }
    );
    if (!res.ok) throw new Error('Failed to fetch coins');
    const { data } = await res.json();
    return (
        <BodyProvider>
            <Accordions data={data} />
        </BodyProvider>
    );
}
