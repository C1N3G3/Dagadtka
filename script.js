const leftButton = document.getElementById('arrow-left');
const rightButton = document.getElementById('arrow-right');
const image = document.getElementById('image');
const title = document.getElementById('title');
const text = document.getElementById('text');
const thumbnails = document.querySelectorAll('.square');

let index = 0;

function setContent(Remove) {
    image.src = data[index].src;
    title.innerText = data[index].title;
    text.innerText = data[index].text;
    if (!Remove){
        document.querySelector('.selected').classList.remove('selected');
    }
    thumbnails[index].classList.add('selected');
};

setContent(true);

leftButton.addEventListener('click', () => {
    if (index == 0) {
        index = data.length - 1;
    } else {
        index--;
    }
    setContent();
});

rightButton.addEventListener('click', () => {
    if (index == data.length - 1) {
        index = 0;
    } else {
        index++;
    }
    setContent();
});

// billentyű figyelő
document.addEventListener('keydown', (event) => {
    if (event.keyCode == 37) {
        if (index == 0) {
            index = data.length - 1;
        } else {
            index--;
        }
        setContent();
    }

    if (event.keyCode == 39) {
        if (index == data.length - 1) {
            index = 0;
        } else {
            index++;
        }
        setContent();
    }
});

//kiskép kattintás
thumbnails.forEach((thumbnail, ind) => {
    thumbnail.addEventListener('click', () => {
        index = ind;
        setContent();
    })
})
