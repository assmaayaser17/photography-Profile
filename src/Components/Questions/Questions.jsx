import Iridescence from "../Iridescence.jsx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/ui/accordion";
import profile from "../../assets/profile.webp";

export default function QuestionsSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden py-20 px-4 md:px-10"
      id="questions"
      style={{ fontFamily: `'Inter', 'Inter Placeholder', sans-serif` }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      {/* Optional: Dark overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        {/* Layout: Accordion + Left Info */}
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left Column */}
          <div className="md:w-1/3 w-full flex flex-col gap-5 items-start">
            {/* Avatar & Label */}
            <div className="flex items-center gap-4 pt-10">
              <div className="w-16 h-16 rounded-md overflow-hidden bg-white">
                <img
                  src={profile} // 🖼️ غيري ده لمسار الصورة بتاعتك
                  alt="Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[18px] font-semibold">
                Ismail Bakass
                <br />
                <span className="text-[15px] text-gray-300 font-medium">
                  Professional Photographer
                </span>
              </p>
            </div>

            {/* Message */}
            <div className="text-sm md:text-base text-gray-200 leading-relaxed">
              <p className="mb-3 font-medium text-[22px]">
                Didn’t find your answer?
              </p>
              <p className="text-gray-300 text-[18px]">
                No worries! If you have any other questions or need more
                information, feel free to reach out directly. I’m always happy
                to help and make sure you feel confident before booking your
                session. Let’s chat!
              </p>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="md:w-2/3 w-full space-y-4">
            <div className="text-center mb-12">
              <h2 className="text-[56px] font-bold mb-4">Have Questions?</h2>
              <p className="text-[18px] font-light">
                We’re here to help. Find answers to common questions or reach
                out for more details.
              </p>
            </div>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold">
                  How far in advance should I book?
                </AccordionTrigger>
                <AccordionContent className="text-[18px] text-gray-200 font-medium">
                  To ensure availability, it’s ideal to book 3-6 months in
                  advance, especially during peak seasons like weddings or
                  holiday events. However, if your date is flexible, feel free
                  to inquire anytime—I’ll do my best to accommodate last-minute
                  requests.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-bold">
                  What’s your turnaround time?
                </AccordionTrigger>
                <AccordionContent className="text-[18px] text-gray-200 font-medium">
                  My typical turnaround time for delivering photos is 4-6 weeks.
                  I carefully edit each image to bring out the best in every
                  shot, which takes time, but I promise it’s worth the wait.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-bold">
                  How long will it take to receive my photos?
                </AccordionTrigger>
                <AccordionContent className="text-[18px] text-gray-200 font-medium">
                  I usually send a sneak peek of select photos within 1-2 weeks
                  after the event so you can relive some of the moments right
                  away. The complete gallery will be delivered within 4-6 weeks,
                  giving me time to fine-tune every detail.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-bold">
                  How much does it cost?
                </AccordionTrigger>
                <AccordionContent className="text-[18px] text-gray-200 font-medium">
                  My pricing depends on the type of event, the length of
                  coverage, and any special requests you may have. I offer a
                  range of packages to suit different budgets, so feel free to
                  reach out, and I’d be happy to provide a custom quote based on
                  your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-bold">
                  How many photos do I get?
                </AccordionTrigger>
                <AccordionContent className="text-[18px] text-gray-200 font-medium">
                  I typically deliver between 50-100 fully edited photos for a
                  standard session, but every package is customizable.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
