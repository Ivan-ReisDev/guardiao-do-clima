import React, { useState } from "react";

type Pergunta = {
  pergunta: string;
  respostaCorreta: string;
  opcoesDeResposta: string[];
  explicacao: string;
};

const perguntas: Pergunta[] = [
  {
    "pergunta": "O que é o efeito estufa?",
    "respostaCorreta": "A retenção de calor na atmosfera terrestre por gases como o dióxido de carbono.",
    "opcoesDeResposta": [
      "O aquecimento causado pelo buraco na camada de ozônio.",
      "A retenção de calor na atmosfera terrestre por gases como o dióxido de carbono.",
      "A redução da camada de gases que protege a Terra.",
      "O aumento da temperatura dos oceanos."
    ],
    "explicacao": "O efeito estufa ocorre quando gases na atmosfera, como o CO₂, retêm calor, mantendo a Terra aquecida."
  },
  {
    "pergunta": "Qual é a principal causa do aquecimento global?",
    "respostaCorreta": "A emissão de gases do efeito estufa por atividades humanas.",
    "opcoesDeResposta": [
      "A variação natural da temperatura da Terra.",
      "A emissão de gases do efeito estufa por atividades humanas.",
      "A destruição da camada de ozônio.",
      "O movimento das placas tectônicas."
    ],
    "explicacao": "O aquecimento global é causado principalmente pela emissão de gases como o dióxido de carbono e metano, resultado de atividades humanas, como a queima de combustíveis fósseis."
  },
  {
    "pergunta": "O que é biodiversidade?",
    "respostaCorreta": "A variedade de espécies de seres vivos em um ecossistema.",
    "opcoesDeResposta": [
      "A capacidade de adaptação das espécies às mudanças climáticas.",
      "A variedade de ecossistemas em uma região.",
      "A quantidade de florestas e áreas verdes.",
      "A variedade de espécies de seres vivos em um ecossistema."
    ],
    "explicacao": "Biodiversidade se refere à variedade de seres vivos em um determinado ambiente, essencial para o equilíbrio ecológico."
  },
  {
    "pergunta": "O que são fontes de energia renováveis?",
    "respostaCorreta": "Fontes de energia que se renovam naturalmente e não se esgotam.",
    "opcoesDeResposta": [
      "Fontes de energia que podem ser reutilizadas, como o petróleo.",
      "Fontes de energia que se renovam naturalmente e não se esgotam.",
      "Fontes de energia que causam mais poluição.",
      "Fontes de energia que dependem de mineração."
    ],
    "explicacao": "As fontes de energia renováveis, como a solar, eólica e hidrelétrica, são aquelas que se regeneram naturalmente e têm baixo impacto ambiental."
  },
  {
    "pergunta": "Qual é o gás mais associado ao aquecimento global?",
    "respostaCorreta": "Dióxido de carbono (CO₂).",
    "opcoesDeResposta": [
      "Oxigênio (O₂).",
      "Metano (CH₄).",
      "Dióxido de carbono (CO₂).",
      "Ozônio (O₃)."
    ],
    "explicacao": "O dióxido de carbono (CO₂) é o principal gás de efeito estufa liberado por atividades humanas, como a queima de combustíveis fósseis."
  },
  {
    "pergunta": "O que é desmatamento?",
    "respostaCorreta": "A derrubada de florestas e vegetação nativa para outros usos.",
    "opcoesDeResposta": [
      "O plantio excessivo de árvores.",
      "A poluição do solo por lixo e produtos químicos.",
      "A derrubada de florestas e vegetação nativa para outros usos.",
      "A proteção de áreas naturais contra atividades humanas."
    ],
    "explicacao": "Desmatamento é a remoção de florestas para atividades como agricultura, pecuária e urbanização, impactando o equilíbrio ambiental."
  },
  {
    "pergunta": "O que significa a sigla ODS?",
    "respostaCorreta": "Objetivos de Desenvolvimento Sustentável.",
    "opcoesDeResposta": [
      "Organização para Desenvolvimento Sustentável.",
      "Oficialização do Desenvolvimento Sustentável.",
      "Objetivos de Desenvolvimento Sustentável.",
      "Obrigações do Desenvolvimento Sustentável."
    ],
    "explicacao": "ODS são metas estabelecidas pela ONU para promover a sustentabilidade global até 2030."
  },
  {
    "pergunta": "O que é a camada de ozônio?",
    "respostaCorreta": "Uma camada na atmosfera que protege a Terra dos raios ultravioletas.",
    "opcoesDeResposta": [
      "Uma camada na Terra que regula a temperatura do planeta.",
      "Uma camada na atmosfera que protege a Terra dos raios ultravioletas.",
      "Uma barreira de gases tóxicos que protege o solo.",
      "Uma camada de gases que aumenta a temperatura do planeta."
    ],
    "explicacao": "A camada de ozônio atua como um filtro natural para os raios UV, protegendo a vida na Terra de sua radiação prejudicial."
  },
  {
    "pergunta": "Qual é o impacto da poluição plástica nos oceanos?",
    "respostaCorreta": "Causa danos à vida marinha e degrada o ecossistema oceânico.",
    "opcoesDeResposta": [
      "Ajuda a estabilizar o nível do mar.",
      "Causa danos à vida marinha e degrada o ecossistema oceânico.",
      "Não tem impacto, pois o plástico se decompõe rapidamente.",
      "Aumenta a biodiversidade nos oceanos."
    ],
    "explicacao": "A poluição plástica afeta a vida marinha, com animais ingerindo plástico ou ficando presos nele, além de degradar o ecossistema."
  },
  {
    "pergunta": "O que é reciclagem?",
    "respostaCorreta": "O processo de reuso de materiais para criar novos produtos.",
    "opcoesDeResposta": [
      "A queima de resíduos para gerar energia.",
      "O uso de materiais descartáveis para construção.",
      "O processo de reuso de materiais para criar novos produtos.",
      "A decomposição de resíduos orgânicos no solo."
    ],
    "explicacao": "Reciclagem é o processo de transformar materiais descartados em novos produtos, ajudando a reduzir o desperdício e conservar recursos."
  },
  {
    "pergunta": "Qual é a principal função das florestas tropicais?",
    "respostaCorreta": "Atuar como sumidouros de carbono, absorvendo dióxido de carbono.",
    "opcoesDeResposta": [
      "Aumentar a temperatura global.",
      "Atuar como sumidouros de carbono, absorvendo dióxido de carbono.",
      "Produzir petróleo.",
      "Impedir o crescimento da vida selvagem."
    ],
    "explicacao": "As florestas tropicais desempenham um papel crucial no ciclo de carbono, absorvendo grandes quantidades de CO₂, ajudando a mitigar o aquecimento global."
  },
  {
    "pergunta": "O que é energia solar?",
    "respostaCorreta": "Energia obtida a partir da luz do sol.",
    "opcoesDeResposta": [
      "Energia obtida através do vento.",
      "Energia gerada pelo calor do núcleo terrestre.",
      "Energia obtida a partir da luz do sol.",
      "Energia gerada pela movimentação da água."
    ],
    "explicacao": "A energia solar é captada por painéis solares que convertem a luz do sol em eletricidade, sendo uma fonte de energia limpa e renovável."
  },
  {
    "pergunta": "O que é desenvolvimento sustentável?",
    "respostaCorreta": "Um desenvolvimento que atende às necessidades atuais sem comprometer as futuras gerações.",
    "opcoesDeResposta": [
      "O uso ilimitado de recursos naturais.",
      "Um desenvolvimento que atende às necessidades atuais sem comprometer as futuras gerações.",
      "A construção de grandes indústrias sem impacto ambiental.",
      "A maximização da exploração dos recursos naturais."
    ],
    "explicacao": "Desenvolvimento sustentável é aquele que equilibra o uso dos recursos naturais com a preservação para as futuras gerações."
  },
  {
    "pergunta": "O que é poluição atmosférica?",
    "respostaCorreta": "A contaminação do ar por substâncias prejudiciais.",
    "opcoesDeResposta": [
      "A contaminação das águas por produtos químicos.",
      "A destruição da camada de ozônio.",
      "A contaminação do ar por substâncias prejudiciais.",
      "O aumento de gás oxigênio na atmosfera."
    ],
    "explicacao": "Poluição atmosférica ocorre quando gases e partículas prejudiciais entram na atmosfera, causando danos à saúde humana e ao meio ambiente."
  },
  {
    "pergunta": "Qual é o impacto do desmatamento na biodiversidade?",
    "respostaCorreta": "Reduz o habitat de espécies, levando à extinção de muitas delas.",
    "opcoesDeResposta": [
      "Ajuda a aumentar a biodiversidade.",
      "Não tem impacto direto nas espécies.",
      "Reduz o habitat de espécies, levando à extinção de muitas delas.",
      "Melhora a adaptação das espécies."
    ],
    "explicacao": "O desmatamento destrói os habitats naturais de muitas espécies, levando à diminuição da biodiversidade e extinção de várias espécies."
  },
  {
    "pergunta": "O que é aquecimento global?",
    "respostaCorreta": "O aumento da temperatura média da Terra devido à emissão de gases de efeito estufa.",
    "opcoesDeResposta": [
      "O aumento da temperatura local em regiões tropicais.",
      "O aumento da temperatura média da Terra devido à emissão de gases de efeito estufa.",
      "A diminuição do nível dos oceanos.",
      "A intensificação dos ventos polares."
    ],
    "explicacao": "O aquecimento global refere-se ao aumento das temperaturas médias do planeta, resultado da ação humana na emissão de gases como CO₂."
  },
  {
    "pergunta": "O que é a Agenda 2030?",
    "respostaCorreta": "Um plano global com 17 objetivos para o desenvolvimento sustentável.",
    "opcoesDeResposta": [
      "Um plano para promover a urbanização global.",
      "Uma agenda para expandir o uso de combustíveis fósseis.",
      "Um plano global com 17 objetivos para o desenvolvimento sustentável.",
      "Uma conferência sobre mudanças climáticas."
    ],
    "explicacao": "A Agenda 2030 é um compromisso global da ONU, com 17 Objetivos de Desenvolvimento Sustentável para erradicar a pobreza e proteger o planeta."
  },
  {
    "pergunta": "Como a poluição sonora afeta o meio ambiente?",
    "respostaCorreta": "Causa estresse e perturba a vida selvagem, especialmente em áreas urbanas.",
    "opcoesDeResposta": [
      "Ajuda na comunicação entre animais.",
      "Aumenta o nível de oxigênio no ar.",
      "Causa estresse e perturba a vida selvagem, especialmente em áreas urbanas.",
      "Não tem impacto sobre o meio ambiente."
    ],
    "explicacao": "A poluição sonora afeta negativamente a vida selvagem, interferindo na comunicação e causando estresse em muitas espécies."
  },
  {
    "pergunta": "O que é a Pegada Ecológica?",
    "respostaCorreta": "Uma medida do impacto das atividades humanas sobre o meio ambiente.",
    "opcoesDeResposta": [
      "O registro de emissões de carbono.",
      "Uma medida do impacto das atividades humanas sobre o meio ambiente.",
      "A quantidade de carbono armazenada nas florestas.",
      "A capacidade de reciclagem de uma comunidade."
    ],
    "explicacao": "A Pegada Ecológica mede o impacto que o consumo de recursos humanos tem no planeta, avaliando a sustentabilidade das práticas atuais."
  },
  {
    "pergunta": "Qual é o principal objetivo da reciclagem?",
    "respostaCorreta": "Reduzir o desperdício e reutilizar materiais para preservar recursos naturais.",
    "opcoesDeResposta": [
      "Gerar mais resíduos para o solo.",
      "Aumentar o consumo de plásticos.",
      "Reduzir o desperdício e reutilizar materiais para preservar recursos naturais.",
      "Maximizar a produção industrial."
    ],
    "explicacao": "A reciclagem ajuda a reduzir a necessidade de extração de novos recursos, diminuindo o impacto ambiental e o volume de resíduos."
  },
  {
    "pergunta": "Qual das seguintes opções é uma fonte de energia renovável?",
    "respostaCorreta": "Energia eólica.",
    "opcoesDeResposta": [
      "Carvão mineral.",
      "Energia nuclear.",
      "Energia eólica.",
      "Petróleo."
    ],
    "explicacao": "A energia eólica é uma fonte renovável que utiliza a força dos ventos para gerar eletricidade, sem emissões de poluentes."
  }
]

type QuizProps = {
  setStart: (start: string) => void;
  setScore: (score: number) => void;
  setRescpostaCorreta:(resposta: string) => void;
};

const StartScreen: React.FC<QuizProps> = ({ setStart, setScore, setRescpostaCorreta }) => {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);

  const verificarResposta = (resposta: string) => {
    console.log("teste")
    const perguntaAtual = perguntas[indicePergunta];
    if (resposta === perguntaAtual.respostaCorreta) {
      setPontuacao(pontuacao + 1);
      setScore(pontuacao)
      setIndicePergunta(indicePergunta + 1);
    } else {
      setScore(pontuacao); 
      console.log(perguntas[indicePergunta].respostaCorreta)
      setRescpostaCorreta(perguntas[indicePergunta].respostaCorreta)
      setStart('gameOver'); 
    }
  };

  return (
    <div>
      {indicePergunta < perguntas.length ? (
        <div className="flex flex-col">
          <h2 className=" font-bold text-xl mb-4">{perguntas[indicePergunta].pergunta}</h2>
           
          {perguntas[indicePergunta].opcoesDeResposta.map((opcao) => (
            
            <button className="bg-green-600 te p-3 m-2 rounded text-white hover:bg-green-700 transition transform hover:scale-105" key={opcao} onClick={() => verificarResposta(opcao)}>
              {opcao}
            </button>
          ))}
        </div>
      ) : (
        <h2>Parabéns! Você completou o quiz!</h2>
      )}
    </div>
  );
};

export default StartScreen;
