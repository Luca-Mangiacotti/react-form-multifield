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
  const [formData, setFormData] = useState({
    author: "",
    content: "",
    category: "Frontend",
  });
  const [authorList, setAuthorList] = useState(initialList);
  //inserimento funzione per eliminazione di un author dalla lista
  const handleDelete = (authorToDelete) => {
    setAuthorList((currentAuthor) =>
      currentAuthor.filter((author) => author !== authorToDelete)
    );
  };

  //funzioni di controllo per il form
  //funzione per la raccolta dati dai campi input
  const handleFormData = (fieldName, value) => {
    setFormData((currentData) => ({ ...currentData, [fieldName]: value }));
  };
  //funzione per il controllo del submit del form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    //creo una variabile che conterrà tutte le informazioni del nuovo autore da aggiungere alla lista
    //usiamo lenght sull'array per ricavarci il numero di id da attribuire al nuovo autore
    const newAuthor = {
      id: authorList[authorList.length - 1].id + 1,
      author: formData.author,
      content: formData.content,
      category: formData.category,
    };

    console.log(newAuthor);

    setAuthorList((currentList) => [...currentList, newAuthor]);

    setFormData({
      author: "",
      content: "",
      category: "Frontend",
    });
    console.log(authorList);
  };

  return (
    <>
      <h1>Lista dei programmatori </h1>
      <br />
      <ul>
        {authorList.map((currentAuthor) => (
          <li key={currentAuthor.id}>
            <strong>{currentAuthor.author}</strong>:{currentAuthor.content} (
            {currentAuthor.category})
            <button onClick={() => handleDelete(currentAuthor)}>
              &#128465;
            </button>
          </li>
        ))}
      </ul>

      <hr />
      <br />
      <h2>Inserisci nuovo Autore</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          id="author"
          type="text"
          value={formData.author}
          //con l'evento onChange andiamo a richiamare una funzione che a sua volta chiamerà una funzione che si servirà
          //dell' oggetto "event" nel quale andrà a recuperare il valore del campo di input
          onChange={(event) => handleFormData("author", event.target.value)}
          placeholder="Inserisci nome Autore"
        />
        <br />
        <input
          id="content"
          type="text"
          value={formData.content}
          onChange={(event) => handleFormData("content", event.target.value)}
          placeholder="Inserisci contenuto"
        />
        <br />

        <select
          id="category"
          value={formData.category}
          onChange={(event) => handleFormData("category", event.target.value)}
        >
          <option value="FrontEnd">FrontEnd</option>
          <option value="BackEnd">BackEnd</option>
          <option value="UI/UX">UI/UX</option>
        </select>

        <button type="submit"> inserisci autore </button>
      </form>
    </>
  );
}
