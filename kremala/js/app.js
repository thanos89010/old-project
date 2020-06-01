const conteiner = document.querySelector('.conteiner');
const leksi = document.querySelector('.leksi');
const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const section = document.querySelector('section');
const conteinerHint = document.querySelector('.conteiner-hint');
const allLatter = [...'abcdefghijklmnopqrstuvwxyz'];
let life = 10;
const giveWord = value => {
  const paula = [];
  const words = [value];
  const hideWords = ExtractWords(words);
  makeWordHide(hideWords, paula);
  resultWord(paula);
  alphabet(words, hideWords);
  completeWord = completeWord.split('');
};
const alphabet = (giveWord, hideWords) => {
  const ul = document.createElement('ul');
  let liHintWinLose = hintWinLose();
  for (everyLatter of allLatter) {
    const li = document.createElement('li');
    li.innerHTML = everyLatter;
    li.classList.add('li-char');
    ul.classList.add('ul-char');
    ul.appendChild(li);
    li.addEventListener('click', e => {
      checkWord(hideWords, e, liHintWinLose);
      li.addEventListener('click', li.classList.add('pointer-events'));
    });
  }
  section.prepend(ul);
};
hintWinLose = () => {
  const ulHintWinLose = document.createElement('ul');
  for (let i = 0; i < 2; i++) {
    var liHintWinLose = document.createElement('li');
    ulHintWinLose.append(liHintWinLose);
    ulHintWinLose.classList.add('ul-hint');
    liHintWinLose.classList.add('li-hint');
  }
  conteinerHint.append(ulHintWinLose);
  ulHintWinLose.children[0].innerHTML = `exeis ${life} zwes`;
  ulHintWinLose.children[0].classList.add('li-fail-char');
  return ulHintWinLose;
};
checkWord = (hideWords, e, ulHintWinLose) => {
  if (hideWords.indexOf(e.target.textContent) !== -1) {
    for (let i = 0; i < hideWords.length; i++) {
      if (hideWords[i] === e.target.textContent) {
        completeWord[i + 1] = e.target.textContent;
        leksi.innerHTML = completeWord.join('');
      }
      if (
        completeWord.join('').slice(1, completeWord.join('').length - 1) ===
        hideWords
      ) {
        alert('nikises');
        section.classList.add('pointer-events');
      }
    }
  } else {
    ulHintWinLose.children[0].innerHTML = `exeis ${--life} zwes`;
    ulHintWinLose.children[0].classList.add('li-fail-char');
    ulHintWinLose.children[1].innerHTML += e.target.textContent;
    ulHintWinLose.children[1].classList.add('li-fail-char');
    if (life <= 0) {
      alert('exases');
      section.classList.add('pointer-events');
    }
  }
};
const ExtractWords = words => {
  const hideWords = words.join(' ').slice(1, words.join('').length - 1);
  firstLatter = words.join(' ').slice(0, 1);
  lastLatter = words.join(' ').slice(words.join('').length - 1);
  return hideWords;
};
const makeWordHide = (hideWords, paula) => {
  for (i = 0; i < hideWords.length; i++) {
    paula.push('-');
  }
};
const resultWord = paula => {
  completeWord = `${firstLatter}${paula}${lastLatter}`;
  completeWord = completeWord.split(',').join('');
  leksi.innerHTML = completeWord;
};
const tixeaLeksi = [
  {
    leksi: 'thanos',
    help: 'onoma',
    category: 'antras'
  },
  {
    leksi: 'maria',
    help: 'onomateponimo',
    category: 'gineka'
  },
  {
    leksi: 'nikos',
    help: 'onoma',
    category: 'antras'
  },
  {
    leksi: 'antonis',
    help: 'onoma',
    category: 'antras'
  },
  {
    leksi: 'giwrgos',
    help: 'onoma',
    category: 'antras'
  },
  {
    leksi: 'manos',
    help: 'onoma',
    category: 'antras'
  },
  {
    leksi: 'thanos',
    help: 'onoma',
    category: 'antras'
  }
];
const randomWord = () => {
  const number = Math.floor(Math.random() * tixeaLeksi.length);
  console.log(tixeaLeksi[number].leksi);
  giveWord(tixeaLeksi[number].leksi);
};
randomWord();
