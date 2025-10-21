const App = () => {
  const faqs = [
    {
      question: "What is React ?",
      answer: "It is a JS library to build the user interface.",
    },
    {
      question: "What is JSX ?",
      answer: "It is a JS extension used in the react.",
    },
    {
      question: "What is Component ?",
      answer: "It is a piece of a UI which can be reused in various parts or in user interface."
    }
  ];

  

  return(
    <div>
      {faqs.map((faq,index) => (
        <li key={index}>{faq.question}</li>
      ))}
    </div>
  );

}

export default App;
