const rawTxt = document.querySelector('textarea[name=txtarea]');
const finTxt = document.querySelector('textarea[name=output]');
const btn = document.querySelector('button');
const counter = document.querySelector('.counter');

btn.addEventListener('click', () => {
    let temp = rawTxt.value;
    let exp = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    let emailData = temp.match(exp);
    let holder = [];

    for (let x = 0; x < emailData.length; x++) {
        if (holder.indexOf(emailData[ x ]) == -1) {
            holder.push(emailData[ x ])
        }
    }
    counter.innerText = holder.length;
    finTxt.innerText = holder.join("  ");
})
