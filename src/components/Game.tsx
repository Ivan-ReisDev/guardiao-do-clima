import React, { useState } from "react";
import GameOver from "./GameOver";
import StartScreen from "./StartScreen";

const Game: React.FC = () => {
  const [start, setStart] = useState<string>("inicio");
  const [pontuacaoAtual, setPontuacaoAtual] = useState<number>(0); 
  const [respostaCorreta, setRescpostaCorreta] = useState<string>("vazio");

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center ">
      {start === "inicio" && (
        <>
          <h1 className="text-5xl font-bold text-green-700 mb-4">Guardião do Clima</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
            Teste seus conhecimentos sobre o clima e aprenda mais sobre o nosso planeta.
          </p>
          <button
            onClick={() => setStart("game")}
            className="bg-green-600 text-white py-2 px-6 rounded shadow-lg hover:bg-green-700 transition transform hover:scale-105"
          >
            Iniciar
          </button>
        </>
      )}

      {start === "game" && (
        <StartScreen 
          setStart={setStart} 
          setScore={setPontuacaoAtual}
          setRescpostaCorreta={setRescpostaCorreta}
        />
      )}

      {start === "gameOver" && <GameOver respostaCorreta={respostaCorreta} setStart={setStart} pontuacao={pontuacaoAtual} />}
    </div>
  );
};

export default Game;
