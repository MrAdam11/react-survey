import { useState } from "react";

import AnswersList from "./AnswersList";
import AnswersItem from "./AnswersItem";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [originForm, setoriginForm] = useState({
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: "",
  });

  const firstQuestion = ["1", "2", "3", "4"];

  const secondQuestion = [
    { value: "swimming", label: "Swimming" },
    { value: "bathing", label: "Bathing" },
    { value: "chatting", label: "Chatting" },
    { value: "noTime", label: "I don't like to spend time with it" },
  ];

  const newonChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log(name, type, value, checked);
    if (name !== undefined) {
      if (type === "checkbox") {
        if (checked) {
          setoriginForm({
            ...originForm,
            spendTime: [...originForm.spendTime, value],
          });
        } else {
          setoriginForm({
            ...originForm,
            spendTime: originForm.spendTime.filter((item) => item !== value),
          });
        }
      } else {
        setoriginForm({ ...originForm, [name]: value });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      "originForm" + originForm.color,
      originForm.spendTime,
      originForm.review,
      originForm.username,
      originForm.email
    );
  };
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {firstQuestion.map((option) => (
                <li key={option}>
                  <input
                    id={`color-${option}`}
                    type="radio"
                    name="color"
                    value={option}
                    onChange={newonChange}
                    checked={originForm.color === option}
                  />
                  <label htmlFor={`color-${option}`}>{option}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              {secondQuestion.map((option) => (
                <li key={option.value}>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value={option.value}
                      onChange={newonChange}
                    />
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={newonChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={originForm.username}
              onChange={newonChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={originForm.email}
              onChange={newonChange}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
