import React from "react";

interface GameOverProps {
  pontuacao: number;
  respostaCorreta: string | null;
  setStart: (valor: string) => void;
}

const GameOver: React.FC<GameOverProps> = ({ pontuacao, setStart, respostaCorreta }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-green-600">Fim de Jogo</h2>
      <p className="text-lg mt-4 font-bold mb-2">Sua pontuação final foi: {pontuacao}</p>
      { pontuacao < 20 &&
      <p className="text-red-600"><span className="font-bold">A resposta correta é:</span> { respostaCorreta }</p>
      }

{ pontuacao >= 20 &&
      <p className="text-green-600 text-3xl">Parabéns você sabe de tudo!</p>
      }

      <button
        onClick={() => setStart("inicio")}
        className="mt-6 py-2 px-6 bg-green-600 text-white rounded hover:bg-green-700 transition transform hover:scale-105"
      >
        Voltar ao Início
      </button>
    </div>
  );
};

export default GameOver;
