/* Появление и скрытие Popup */

window.onload = function()
{
    img1 = document.getElementsByClassName('photo1_part9');
    popupText1 = document.getElementsByClassName('block_popup1_part9');

    img2 = document.getElementsByClassName('photo2_part9');
    popupText2 = document.getElementsByClassName('block_popup2_part9');

    img3 = document.getElementsByClassName('photo3_part9');
    popupText3 = document.getElementsByClassName('block_popup3_part9');
}

// Popup1
document.getElementById("block_popup").onmouseover = function(event)
{
    let target = event.target;

    if(target.className == 'photo1_part9')
    {
        for(let i=0; i<img1.length; i++)
        {
            // if(target==img1[i])
            // {
                showContentText(i);
            // }
        }
    }
}


function showContentText(a)
{
    for(let i = a; i<popupText1.length; i++)
    {
        popupText1[i].classList.remove('hide1');
        popupText1[i].classList.add('show1');
    }
}



document.getElementById("block_popup").onmouseout = function(event)
{
    let target = event.target;
    if(target.className == 'photo1_part9')
    {
        for(let i=0; i<img1.length; i++)
        {
            // if(target==img1[i])
            // {
                hideContentText(i);
            // }
        }
    }
}

function hideContentText(b)
{
    for(let i=b; i<popupText1.length; i++)
    {
        popupText1[i].classList.add('hide1');
        popupText1[i].classList.remove('show1');
    }
}



//Popup2
document.getElementById("block2_popup").onmouseover = function(event)
{
    let target = event.target;
    if(target.className == 'photo2_part9')
    {
        for(let i=0; i<img2.length; i++)
        {
            // if(target==img2[i])
            // {
                showContentText2(i);
            // }
        }
    }
}


function showContentText2(a)
{
    for(let i = a; i<popupText2.length; i++)
    {
        popupText2[i].classList.remove('hide2');
        popupText2[i].classList.add('show2');
    }
}



document.getElementById("block2_popup").onmouseout = function(event)
{
    let target = event.target;
    if(target.className == 'photo2_part9')
    {
        for(let i=0; i<img2.length; i++)
        {
            // if(target==img2[i])
            // {
                hideContentText2(i);
            // }
        }
    }
}

function hideContentText2(b)
{
    for(let i=b; i<popupText2.length; i++)
    {
        popupText2[i].classList.add('hide2');
        popupText2[i].classList.remove('show2');
    }
}


//Popup3
document.getElementById("block3_popup").onmouseover = function(event)
{
    let target = event.target;
    if(target.className == 'photo3_part9')
    {
        for(let i=0; i<img3.length; i++)
        {
            // if(target==img3[i])
            // {
                showContentText3(i);
            // }
        }
    }
}


function showContentText3(a)
{
    for(let i = a; i<popupText3.length; i++)
    {
        popupText3[i].classList.remove('hide3');
        popupText3[i].classList.add('show3');
    }
}



document.getElementById("block3_popup").onmouseout = function(event)
{
    let target = event.target;
    if(target.className == 'photo3_part9')
    {
        for(let i=0; i<img3.length; i++)
        {
            // if(target==img3[i])
            // {
                hideContentText3(i);
            // }
        }
    }
}

function hideContentText3(b)
{
    for(let i=b; i<popupText3.length; i++)
    {
        popupText3[i].classList.add('hide3');
        popupText3[i].classList.remove('show3');
    }
}