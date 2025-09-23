import Iridescence from '../Iridescence.jsx';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/Components/ui/accordion'; 
import profile from "../../assets/profile.webp"

export default function QuestionsSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20 px-4 md:px-10" id="questions"
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
              <p className="text-2xl font-semibold">Ismail Bakass
<br/>
<span className='text-base text-gray-300 font-medium'>Professional Photographer</span>
</p>
            </div>

            {/* Message */}
            <div className="text-sm md:text-base text-gray-200 leading-relaxed">
              <p className="mb-3 font-medium text-2xl">Didn’t find your answer?</p>
              <p className='text-gray-300'>
                No worries! If you have any other questions or need more information, feel free to reach out directly.
                I’m always happy to help and make sure you feel confident before booking your session. Let’s chat!
              </p>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="md:w-2/3 w-full space-y-4">
           <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg md:text-xl font-light">
            We’re here to help. Find answers to common questions or reach out for more details.
          </p>
        </div>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold">
                  How far in advance should I book?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-200 font-medium">
                  To ensure availability, it’s ideal to book 3–6 months in advance...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl font-bold">
                  What’s your turnaround time?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-200 font-medium">
                  My typical turnaround time for delivering photos is 4–6 weeks...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl font-bold">
                  How long will it take to receive my photos?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-200 font-medium">
                  I usually send a sneak peek within 1–2 weeks after the event...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-2xl font-bold">
                  How much does it cost?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-200 font-medium">
                  My pricing depends on the type of event and length of coverage...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-2xl font-bold">
                  How many photos do I get?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-200 font-medium">
                  I typically deliver between 50–100 fully edited photos for a standard session...
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
