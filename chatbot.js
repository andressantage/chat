const questions = {
  "haha": "Lol ;)",
  "lol": "Lol ;)",
  "lmao": "Lol ;)",
  "what's your name?": "I'm a Leon",
  "you speak spanish?": "Yeah, I can speak it, but I'd rather speak English to help you get better.",
};

const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function askQuestion(question) {
  chatArea.innerHTML += `<p><strong>Leon:</strong> ${question}</p>`;
}

function answerQuestion(answer) {
  // generamos un número aleatorio entre 5000 y 15000 (milisegundos)
  const delay = Math.floor(Math.random() * 1000) + 5000;
  
  // Agregar "escribiendo..." mientras se espera la respuesta
  chatArea.innerHTML += `<p><strong>Leon is writing...</strong></p>`;
  
  // esperamos el tiempo aleatorio antes de responder
  setTimeout(() => {
    // Reemplazar "escribiendo..." con la respuesta real del bot
    chatArea.innerHTML = chatArea.innerHTML.replace("<p><strong>Leon is writing...</strong></p>", "");
    
    // Creamos un objeto para guardar la respuesta y la imagen (opcional)
    const response = {
      text: '',
      image: ''
    };

    const words = answer.toLowerCase().split(' ');
    if (words.includes('where') || words.includes("where's") && words.includes('from') || words.includes('from?')) {
      response.text = "I'm from Brooklyn and u?";
    } else if (words.includes('hey') || words.includes('hi') || words.includes('yo') || words.includes('hello')) {
      response.text = "Yo, what's up bro?";
    } else if (words.includes('nigga') || words.includes('gay') || words.includes('peach')) {
      response.text = "Yo, what the fuck bro?";
    } else if (words.includes('your') && words.includes('name') || words.includes('name?')) {
      response.text = "I'm Leon bro, who's ur name?";
    } else if (words.includes("i am") || words.includes("i'm") && words.includes('from') || words.includes('alive') || words.includes('live') || words.includes('from')) {
      response.text = "Cool bro i like this";
    } else {
  response.text = questions[answer];
  if (response.text && answer === '¿Cómo te llamas?') {
    askQuestion('¿De dónde eres?');
  } else if (!response.text) {
    response.text = "Sorry bro i don't understand u :(";
  }
}

    
    
    
    // Si hay una imagen en la respuesta, la agregamos al chat
    if (response.image) {
      chatArea.innerHTML += `<p><strong>Leon:</strong> ${response.text}</p><img src="${response.image}" alt="image"/>`;
    } else {
      chatArea.innerHTML += `<p><strong>Leon:</strong> ${response.text}</p>`;
    }
  }, delay);
}

sendButton.addEventListener('click', () => {
  const answer = userInput.value;
  chatArea.innerHTML += `<p><strong>You:</strong> ${answer}</p>`;
  answerQuestion(answer);
  userInput.value = '';
});

askQuestion('Hi, nice to meet u');

