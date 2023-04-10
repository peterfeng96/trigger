const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

const url = 'https://i5nefl8usc.execute-api.us-east-2.amazonaws.com/dev/watchdogsbucket/'

button1.onclick = () => {
    fetch(`${url}test.css`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/css',
        },
    })
}

button2.onclick = () => {
    fetch(`${url}test.html`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/html',
        },
    })
}

button3.onclick = () => {
    fetch(`${url}test.js`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/js',
        },
    })
}

button4.onclick = () => {
    fetch(`${url}test.txt`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/plain',
        },
    })
}

