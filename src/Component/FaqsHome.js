import React, { useState } from "react";
import FAQ from "../Component/FAQ";

export default function FaqsHome() {
  const [faqs, setFaqs] = useState([
    {
      question:
        "What services do we provide?",
      answer:  "We provide front-end web development services such as front-end development, web app development, app development, user interface design, and other technical skills. Our process follows a well-defined structure to deliver fully functional solutions.",
      open: false
    },
    {
      question: "What is the no-risk trial period?",
      answer:
        "We make sure that each engagement between you and your developer begins with a trial period of up to two weeks. This means that you have time to confirm the engagement will be successful. If you’re completely satisfied with the results, we’ll bill you for the time and continue the engagement for as long as you’d like. If you’re not completely satisfied, you won’t be billed. From there, we can either part ways, or we can provide you with another expert who may be a better fit and with whom we will begin a second, no-risk trial.",
      open: true
    },
    {
      question: "Can I hire you to develop a website in less than 48 hours?",
      answer:  "Depending on availability and the pace of progress, we could initiate work on your website within 48 hours of signing up.",
      open: false
    }
   
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App bg-[#4AA6E9] w-[90%] rounded-lg mx-auto md:my-5  mt-10 text-3xl text-center py-16 ">
      <h2 className="font-semibold">FAQS</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

