
 let convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click',convert);

function convert(event){
    event.preventDefault();
    let inputText = document.getElementById('input').value;
    console.log(inputText);
    output = document.getElementById('output');
    let binary = '';
    for(let n of inputText){
        binary += n.charCodeAt(0).toString(2) + ' ';
      }

    output.innerText = binary;
    
}


    