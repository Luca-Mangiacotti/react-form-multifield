import { useState } from "react";
const initialList = [
  {
    id: 1,
    author: "Turing",
    content: "bella ragazzi",
    category: "FrontEnd",
  },
  {
    id: 2,
    author: "Einstein",
    content: "tutto bene?",
    category: "BackEnd",
  },
  {
    id: 3,
    author: "Newton",
    content: "scrivi codice bene",
    category: "UI/UX",
  },
];

export default function App() {
  const [formData, setFormData] = useState("");
  const [authorList, setAuthorList] = useState(initialList);

  return (
    <>
      <h1>Lista dei programmatori </h1>
      <ul>
        {authorList.map((currentAuthor) => (
          <li key={currentAuthor.id}>
            <strong>{currentAuthor.author}</strong>:{currentAuthor.content} (
            {currentAuthor.category})
          </li>
        ))}
      </ul>
    </>
  );
}
