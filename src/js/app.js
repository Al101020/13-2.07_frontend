// TODO: write code here

const subscribeWidget = document.querySelector('.subscribe');
const subscribeForm = subscribeWidget.querySelector('.subscribe-form');
// const nameInput = subscribeWidget.querySelector('.name');
// const phoneInput = subscribeWidget.querySelector('.phone');
const unsubscribeBtn = subscribeWidget.querySelector('.unsubscribe-btn');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault(); //     const body = new FormData(subscribeForm);

  const body = new FormData(subscribeForm);

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () { // подписываемся на событие изменеия статуса запроса
    if (xhr.readyState !== 4) return;

    console.log(xhr.responseText); // console.log(xhr.readyState);
  };

  xhr.open('POST', 'http://localhost:7070');

  xhr.send(body);//     xhr.send(body);
});

unsubscribeBtn.addEventListener('click', (e) => {
  e.preventDefault(); //     const body = new FormData(subscribeForm);

  const body = Array.from(subscribeForm.elements)
    .filter(({ name }) => name)
    .map(({ name, value }) => `${name}= ${encodeURIComponent(value)}`)
    .join('&');

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () { // подписываемся на событие изменеия статуса запроса
    if (xhr.readyState !== 4) return;

    console.log(xhr.responseText); // console.log(xhr.readyState);
  };

  xhr.open('DELETE', `http://localhost:7070/?${body}`);// xhr.open('DELETE', `http://localhost:7070/?${body}`);

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.send();//     xhr.send(body);
});

const uploadForm = document.querySelector('.upload-form');
const previewImage = document.querySelector('.preview-image');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault(); //     const body = new FormData(subscribeForm);

  const body = new FormData(uploadForm);

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () { // подписываемся на событие изменеия статуса запроса
    if (xhr.readyState !== 4) return;

    console.log(xhr.responseText); // console.log(xhr.readyState);
    previewImage.src = `http://localhost:7070${xhr.responseText}`;
  };

  xhr.open('POST', 'http://localhost:7070/upload');

  xhr.send(body);
});

// unsubscribeBtn.addEventListener('click', (e) => {    // console.log('unsubscribeBtn');
//     e.preventDefault();

//     const body = Array.from(subscribeForm.elements) // берём нашу форму
//         .filter(({ name }) => name) // отфильтровываем поля где есть имя
// .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`) // делаем ключ-значение
//         .join('&'); // склеим эти пары с помощью &

//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState !== 4) return;

//         console.log(xhr.responseText);
//     }

//     xhr.open('DELETE', 'http://localhost:7070/?' + body);

//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//     xhr.send();
// });

// // const uploadForm = document.querySelector('.upload-form');

// // uploadForm.addEventListener('submit', (e) => {
// //     e.preventDefault();

// //     const body = new FormData(uploadForm);    // console.log(body);

// // const xhr = new XMLHttpRequest(); // console.log(xhr); // console.log(xhr.readyState);

// //     xhr.onreadystatechange = function() {
// //         if (xhr.readyState !== 4) return;

// //         console.log(xhr.responseText);
// //     }

// //     xhr.open('POST', 'http://localhost:7070/upload');

// //     xhr.send(body);
// // });
