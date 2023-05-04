 const result = document.getElementById('result');
 const btn = document.querySelector('button');
  result.appendChild(btn);
  result.addEventListener('click', function (){
    alert('Hello World!');
 })