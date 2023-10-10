// Variables

let btn = document.querySelector('#new-qoute');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    qoute: '"To live is the rarest thing in the world. Most people exist, that is all."',
    person: 'Oscar Wilde'
}, {
    qoute: '"That it will never come again is what makes life so sweet."',
    person: 'Emily Dickinson'
}, {
    qoute: '"It is never too late to be what you might have been."',
    person: 'George Eliot'
}, {
    qoute: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
    person: 'Ralph Waldo Emerson'
}, {
    qoute: '"Pain is inevitable. Suffering is optional."',
    person: 'Haruki Murakami'
}, {
    qoute: '"All the world\'s a stage, and all the men and women merely players."',
    person: 'William Shakespeare'
}, {
    qoute: '"Be kind, for everyone you meet is fighting a hard battle."',
    person: 'Plato'
}, {
    qoute: '"Unable are the loved to die for love is immortality."',
    person: 'Emily Dickinson'
}, {
    qoute: '"Let me live, love, and say it well in good sentences."',
    person: 'Sylvia Plath'
}, {
    qoute: '"Don\'t let your happiness depend on something you may lose."',
    person: 'C.S. Lewis'
}
]

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].qoute;
    person.innerText = quotes[random].person;
})