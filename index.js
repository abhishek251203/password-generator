let slider = document.getElementById('slider');
let selector = document.getElementById('selector');
let selectValue = document.getElementById('selectValue');
let progressBar = document.getElementById('progressBar');
let passwordInput = document.getElementById('password');
let generateBtn = document.querySelector('.submit');
let copyBtn = document.getElementById('copy');
let aToZBtn = document.querySelector('.a-z');
let AToZBtn = document.querySelector('.A-Z');
let numberBtn = document.querySelector('.number');
let specialBtn = document.querySelector('.special');

selectValue.textContent = slider.value;

slider.addEventListener('input', function() {
    selectValue.textContent = this.value;
    selector.style.left = this.value + '%';
    progressBar.style.width = this.value + '%';
});

generateBtn.addEventListener('click', function() {
    let passwordLength = slider.value;
    let password = generatePassword(passwordLength);
    passwordInput.value = password;
});

copyBtn.addEventListener('click', function() {
    let passwordToCopy = passwordInput.value;
    copyToClipboard(passwordToCopy);
    alert('Password copied to clipboard!');
});

function copyToClipboard(text) {
    let textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function generatePassword(length) {
    let charset = '';

    if (aToZBtn.classList.contains('active')) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (AToZBtn.classList.contains('active')) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (numberBtn.classList.contains('active')) {
        charset += '0123456789';
    }

    if (specialBtn.classList.contains('active')) {
        charset += '!@#$%^&*()_-+={}[]|:;"<>,.?/';
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

function toggleActive(element) {
    element.classList.toggle('active');
    element.style.backgroundColor = 'yellow';
    setTimeout(function() {
        element.style.backgroundColor = '';
    }, 300);
}

aToZBtn.addEventListener('click', function() {
    toggleActive(this);
});

AToZBtn.addEventListener('click', function() {
    toggleActive(this);
});

numberBtn.addEventListener('click', function() {
    toggleActive(this);
});

specialBtn.addEventListener('click', function() {
    toggleActive(this);
});