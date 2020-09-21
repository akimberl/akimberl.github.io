const button = document.querySelector('.button'); // to add listener
const input = document.querySelector('.inputWord'); // to take word using 'value' element
const wordRu = document.querySelector('.wordRu'); // to add words
const wordEn = document.querySelector('.wordEn'); // to add words
const chars = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya', 'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'YO', 'Ж': 'ZH', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'YU', 'Я': 'YA', ' ': ' ',
}; // object for translit

function trigger() {
  let word = input.value; // this is actual word we are going to translit
  let wordTrans = []; //  word after translit
  let divText = document.createElement('div'); // creating div element for our word

  if (word.length > 22) { // to fit the word to box
    let res = []; // for new short word
    for (let item = 0; item < 22; item += 1) {
      res.push(word[item]); // this is array with chars of actual word
    }
    res = res.join(''); // we create new short word with ... in the end
    res += '...'; // if word is too long we add '...'
    divText.title = word; // and add actuall word title to show the long word after hovering
    divText.innerText = res;
  } else {
    divText.innerText = word;
  }
  wordRu.appendChild(divText);

  let divTextEn = document.createElement('div'); // creating div element for Translit
  for (let item = 0; item < word.length; item += 1) {
    if (word[item] in chars) {
      wordTrans[item] = chars[word[item]];
    } else {
      wordTrans[item] = word[item];
    }
  }
  wordTrans = wordTrans.join(''); // now we have our translit
  if (wordTrans.length > 22) {
    let resEn = [];
    for (let item = 0; item < 22; item += 1) {
      resEn.push(word[item]);
    }
    resEn = resEn.join('');
    resEn += '...';
    divTextEn.title = wordTrans;
    divTextEn.innerText = resEn;
  } else {
    divTextEn.innerText = wordTrans;
  }
  wordEn.appendChild(divTextEn);
}

button.addEventListener('click', trigger);
