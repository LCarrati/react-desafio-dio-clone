import { useState, useEffect } from "react";

const Teste = () => {
  const [name, setName] = useState("Leo");

  const handleNameChange = () => {
    setName((atual) => (atual === "Leo" ? "Jose" : "Leo"));
  };

  const alerta = () => {
    alert("renderizei");
  };

  useEffect(() => {
    alerta();

    return () => {
      alert("desmontei"); //executa quando o componente deixa de ser renderizado na página, dar F5 para testar
    };
  }, [name]);

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleNameChange}>Alterar</button>
    </div>
  );
};

export { Teste };
