document.getElementById("quizForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
  const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
  const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
  const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);

  const total = q1 + q2 + q3 + q4;

  let resultText = "";
  let recommendation = "";
  let bgColor = "#f0f7ff";

  if (total < 4) {
    resultText = "Seu bem-estar emocional está estável.";
    recommendation = "Você está em bom estado emocional. Terapia pode ajudar a manter esse equilíbrio.";
    bgColor = "#e8f5e8";
  } else if (total < 8) {
    resultText = "Você apresenta sinais leves de ansiedade ou baixo humor.";
    recommendation = "Recomendamos terapia preventiva ou apoio emocional pontual.";
    bgColor = "#fff9e6";
  } else if (total < 12) {
    resultText = "Há indícios de ansiedade ou depressão moderada.";
    recommendation = "Terapia cognitivo-comportamental pode ser muito eficaz neste momento.";
    bgColor = "#fff4e6";
  } else {
    resultText = "Você pode estar enfrentando dificuldades emocionais significativas.";
    recommendation = "É importante buscar apoio terapêutico o quanto antes.";
    bgColor = "#ffeaea";
  }

  localStorage.setItem("resultText", resultText);
  localStorage.setItem("recommendation", recommendation);
  localStorage.setItem("bgColor", bgColor);

  window.location.href = "results.html";
});
