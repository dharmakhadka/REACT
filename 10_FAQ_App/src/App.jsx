import { useState } from "react";

const App = () => {
  const faqs = [
    {
      question: "What is React?",
      answer: "It is a JS library to build the user interface.",
    },
    {
      question: "What is JSX?",
      answer: "It is a JS extension used in React.",
    },
    {
      question: "What is a Component?",
      answer: "It is a piece of UI which can be reused in various parts of the interface.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const show = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <li onClick={() => show(index)} key={index}>
          {faq.question}
          {index === openIndex && <p>{faq.answer}</p>}
        </li>
      ))}
    </div>
  );
};

export default App;
