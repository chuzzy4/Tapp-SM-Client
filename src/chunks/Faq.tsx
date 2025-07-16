import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const TappFaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How does the NFC card work?",
      answer:
        "Our NFC cards use Near Field Communication technology to instantly share your contact information, social media profiles, and business details with just a tap. Simply hold your card near any NFC-enabled smartphone, and your information will be transferred instantly - no app required for the recipient.",
    },
    {
      id: 2,
      question: "Can I customize the design of my NFC card?",
      answer:
        "Absolutely! We offer full customization options including your logo, brand colors, custom graphics, and text. You can choose from various templates or create a completely unique design that reflects your personal or business brand. Our design team can also help you create the perfect card.",
    },
    {
      id: 3,
      question: "Is my personal data secure?",
      answer:
        "Yes, your data security is our top priority. All information is encrypted and stored securely. You have complete control over what information is shared and can update or remove it at any time through your dashboard. We never sell or share your personal data with third parties.",
    },
    {
      id: 4,
      question: "How long does it take to receive my card?",
      answer:
        "Standard delivery takes 5-7 business days for domestic orders and 10-14 business days for international shipping. We also offer express shipping options (2-3 business days) for urgent orders. You'll receive a tracking number once your order ships.",
    },
    {
      id: 5,
      question: "Can I bulk order cards for my team or company?",
      answer:
        "Yes! We offer special bulk pricing for orders of 10 or more cards. Each team member can have their own customized card with individual contact information while maintaining your company branding. Contact our sales team for volume discounts and corporate packages.",
    },
    // {
    //   id: 6,
    //   question: "What information can I share with my NFC card?",
    //   answer:
    //     "You can share contact details, social media profiles, website links, portfolio, calendar booking links, payment information, Wi-Fi credentials, and much more. The information is fully customizable and can be updated anytime without needing a new card.",
    // },
    // {
    //   id: 7,
    //   question: "Do recipients need a special app to receive my information?",
    //   answer:
    //     "No! That's the beauty of NFC technology. Recipients simply need to tap their NFC-enabled smartphone against your card, and the information will appear instantly. Most modern smartphones have NFC capability built-in and activated by default.",
    // },
    // {
    //   id: 8,
    //   question: "Can I track analytics on my card usage?",
    //   answer:
    //     "Yes, your dashboard provides detailed analytics including tap counts, location data, time stamps, and device information. You can see how often your card is being used and track the effectiveness of your networking efforts.",
    // },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20  min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-[#CBE896]">
            FAQ{" "}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about Tapp NFC cards and how they work
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-600"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none"
              >
                <h3
                  className="text-lg md:text-xl font-light text-white transition-colors duration-300 pr-4"
                  style={{ color: openFaq === faq.id ? "#CBE896" : "white" }}
                >
                  {faq.question}
                </h3>
                <div
                  className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: openFaq === faq.id ? "#CBE896" : undefined,
                  }}
                >
                  {openFaq === faq.id ? (
                    <Minus className="w-5 h-5 text-slate-900 transition-colors duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 text-white transition-colors duration-300" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-6"></div>
                  <p className="text-slate-300 md:text-lg text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TappFaqSection;
