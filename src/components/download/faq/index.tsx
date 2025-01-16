import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = ({
  questions,
}: {
  questions: {
    question: string;
    answer: string;
  }[];
}) => {
  return (
    <section id="faq" className="mx-auto my-[100px] max-w-screen-2xl">
      <h2 className="text-center text-[40px] font-black sm:text-[62px]">
        Frequently Asked Questions
      </h2>
      <div className="my-5 h-px w-full bg-roam-700" />
      <Accordion
        type="single"
        defaultValue={questions[0].question}
        className="mx-auto flex max-w-screen-2xl flex-col gap-5 pb-[50px]"
      >
        {questions.map((question, index) => (
          <AccordionItem
            value={question.question}
            key={index}
            className="rounded-2xl border-0 bg-roam-700 px-5 py-[25px]"
          >
            <AccordionTrigger
              className="gap-2.5 py-0 text-left text-[20px] font-black hover:no-underline sm:text-[32px]"
              showChevron
            >
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="p-0 pt-[30px] font-medium sm:pb-5 sm:text-[22px] sm:leading-normal">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
