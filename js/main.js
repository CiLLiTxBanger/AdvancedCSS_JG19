function showForm(){
    document.getElementById("pop-up-contact").classList.remove("invisible");
}

function closeForm(){
    document.getElementById("pop-up-contact").classList.add("invisible");
}

function showInquiry(){
    document.getElementById("pop-up-anfrage").classList.remove("invisible");
}

function closeInquiry(){
    document.getElementById("pop-up-anfrage").classList.add("invisible");
}

/* DARK MODE */
let count = 0;
function darkmode(){
    let body = document.body;
    body.classList.toggle("darkmode--general");

    let cards = document.getElementsByClassName("card h-100");
    for (let i = 0; i < cards.length; i++)
    {
        cards[i].classList.toggle("darkmode--card");
    }

    let team = document.getElementById("team--text__dark");
    team.classList.toggle("darkmode--general");
    team.classList.toggle("darkmode--shadow");


    let member = document.getElementsByClassName("team--display");
    for (let i = 0; i < member.length; i++)
    {
        member[i].classList.toggle("darkmode--shadow");
    }

    let contactData = document.getElementById("contact--data__dark");
    contactData.classList.toggle("darkmode--contactData");

    if (count == 0){
        let btnPrimary = document.getElementsByClassName("btn-primary");
        for (let i = 0; i < btnPrimary.length; i++)
        {
            btnPrimary[i].style.color = "#212529";
        }

        let links = document.querySelectorAll(".team--display a");
        for (let i = 0; i < links.length; i++)
        {
            links[i].style.color = "white";
        }
        count++;
    } else {
        let btnPrimary = document.getElementsByClassName("btn-primary");
        for (let i = 0; i < btnPrimary.length; i++)
        {
            btnPrimary[i].style.color = "white";
        }

        let links = document.querySelectorAll(".team--display a");
        for (let i = 0; i < links.length; i++)
        {
            links[i].style.color = "black";
        }
        count--;
    }


}