const hearts = document.getElementsByClassName('heart');
const calls = document.getElementsByClassName('call');
const coin = document.getElementById('coin-btn');
const copies = document.getElementsByClassName('copies');
let heartCount = 0;
let copyCount = 0;

for (const heart of hearts){
    heart.addEventListener('click', function(e){
        e.preventDefault();
        heartCount += 1;
        document.getElementById('heart-btn').innerText = heartCount;
    })
}

for (const call of calls) {
    call.addEventListener('click', function(e){
        e.preventDefault();
        console.log('calling')
        const name = call.parentNode.getElementsByTagName('h2')[0].innerText;
        const num = call.parentNode.getElementsByTagName('h3')[0].innerText;


        
        
        if (coin.innerText >= 20){
            coin.innerText -= 20;
            const parentDiv = document.createElement('div');
            parentDiv.classList.add('flex', 'justify-between', 'bg-[#FAFAFA]', 'p-3', 'rounded-[8px]', 'my-2')
            const childDiv1 = document.createElement('div');
            const childDiv2 =  document.createElement('div');
            childDiv2.classList.add('content-center');
            const newName = document.createElement('h3');
            newName.innerText = name;
            newName.classList.add('font-bold');
            const newNum = document.createElement('p');
            newNum.innerText = num;
            const time = document.createElement('p');
            const date = new Date();
            time.innerText = date.toLocaleTimeString();

            childDiv1.appendChild(newName);
            childDiv1.appendChild(newNum);
            childDiv2.appendChild(time);

            parentDiv.appendChild(childDiv1);
            parentDiv.appendChild(childDiv2);

            document.getElementById('call-history').appendChild(parentDiv);
            alert('Calling '+ name + " " + num);
            return;
        }

        else{
            alert('Not enough coins');
            return;
        }
        
    })
}

for (const copy of copies){
    copy.addEventListener('click', function(e){
        e.preventDefault();
        copyCount += 1;
        document.getElementById('copy-count').innerText = copyCount;
        const copiedText = copy.parentNode.getElementsByTagName('h3')[0].innerText;
        navigator.clipboard.writeText(copiedText);
        alert('Number copied '+ copiedText);
        return;

    })
}

document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('call-history').innerHTML = "";
})