import { useState } from "react";

const QuizForm = () => {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  if (status === "success") {
    return <h1>That's right</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  };
  const handleTextAreaChange = (e) => {
    setAnswer(e.target.value);
  };
  return (
    <>
      <h2>Who is the owner of this computer</h2>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
};

// const submitForm = async (answer) => {
//   try {
//     const shouldError = answer !== "ilix";
//     console.log(shouldError);
//   } catch (error) {
//     console.log("Wrong answer");
//   }
// };

async function submitForm(answer) {
  try {
    // 1. Direct promise resolution or rejection for clarity:
    const shouldError = answer.toLowerCase() !== "lima";
    await new Promise((resolve, reject) => {
      shouldError ? reject() : resolve();
    });

    // 2. Early exit for error, avoiding unnecessary delay:
    if (shouldError)
      throw new Error("Good guess but a wrong answer. Try again!");

    // 3. Simulate network request with minimal delay:
    await new Promise((resolve) => setTimeout(resolve, 10)); // Brief delay for demonstration

    console.log("Form submission successful!"); // Or handle success logic here
  } catch (error) {
    console.error("Form submission error:", error.message);
    // Handle UI updates, retries, or other actions
  }
}

export default QuizForm;
