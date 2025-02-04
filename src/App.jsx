import { useState } from "react";
const initialList = [
  {
    id: 1,
    author: "Turing",
    content: "esperto nel campo",
    category: "FrontEnd",
    available: true,
  },
  {
    id: 2,
    author: "Einstein",
    content: "insicuro ma con potenziale",
    category: "BackEnd",
    available: true,
  },
  {
    id: 3,
    author: "Newton",
    content: "copia dai suoi colleghi",
    category: "UI/UX",
    available: true,
  },
];

export default function App() {
  const [formData, setFormData] = useState({
    author: "",
    content: "",
    category: "Frontend",
    available: false,
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
      available: formData.available,
    };

    console.log(newAuthor);

    setAuthorList((currentList) => [...currentList, newAuthor]);

    setFormData({
      author: "",
      content: "",
      category: "Frontend",
      available: false,
    });
    console.log(authorList);
  };

  return (
    <section className="container">
      <div className="listContainer">
        <h1>Lista dei programmatori </h1>
        <ul>
          {authorList.map((currentAuthor) => (
            <li key={currentAuthor.id}>
              <span>
                <strong>{currentAuthor.author}</strong>:{currentAuthor.content}(
                {currentAuthor.category})
                {currentAuthor.available ? (
                  <u> Disponibile </u>
                ) : (
                  <u className="notAvaible"> Non Disponibile </u>
                )}
              </span>
              <button onClick={() => handleDelete(currentAuthor)}>
                &#128465;
              </button>
            </li>
          ))}
        </ul>
      </div>

      <br />

      <div className="formContainer">
        <h1>Inserisci nuovo Programmatore</h1>
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
            placeholder="Inserisci dettagli"
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

          {/* quando vogliamo utilizzare lo stato di una checkbox accediamo al suo contenuto tramite: event.target.checked 
              che restituirà un valore booleano*/}
          <label htmlFor="public">Pubblicato </label>
          <input
            id="public"
            type="checkbox"
            value={formData.available}
            onChange={(event) =>
              handleFormData("available", event.target.checked)
            }
          ></input>
          <br />

          <button className="subBtn" type="submit">
            inserisci autore
          </button>
        </form>
      </div>
    </section>
  );
}
