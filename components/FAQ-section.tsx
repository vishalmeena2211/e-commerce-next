import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>How does the sizing run?</AccordionTrigger>
                    <AccordionContent>
                        Our t-shirts are designed to have a regular fit. We recommend checking our size chart for accurate measurements. If you re between sizes, we suggest going up a size for a more relaxed fit.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Whats the best way to care for this t-shirt?</AccordionTrigger>
                    <AccordionContent>
                        For best results, machine wash cold with like colors. Tumble dry low or hang to dry. Do not bleach or dry clean. Iron on low heat if needed, but avoid ironing the printed design if applicable.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination. You can view the shipping options and costs at checkout.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}