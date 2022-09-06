const itemBlock1 = document.querySelectorAll('.base_block1_part8');
const itemFooter1 = document.querySelectorAll('.footer1_part8');

const itemBlock2 = document.querySelectorAll('.base_block2_part8');
const itemFooter2 = document.querySelectorAll('.footer2_part8');

const itemBlock3 = document.querySelectorAll('.base_block3_part8');
const itemFooter3 = document.querySelectorAll('.footer3_part8');


// Слайдер 1
document.getElementById("block1").onmouseenter = function(event)
{
    let targ = event.target;
    
    if(targ.classList.contains('background_color1_container'))
    {
        setTimeout(showClass1, 400);
    }
}

function showClass1()
{
    for(let i=0; i<itemFooter1.length; i++)
    {
        itemFooter1[i].classList.add('show_footer1_part8');
        itemFooter1[i].classList.remove('hide_footer1_part8');
        
        if(true)
        {
            for(let i=0; i<itemBlock1.length; i++)
            {
                itemBlock1[i].classList.add('offsetSlider1');
            }
        }
    }


}

document.getElementById("block1").onmouseleave = function(event)
{
    let target = event.target;

    for(let i=0; i<itemBlock1.length; i++)
    {
        hideClass1();
    }
}


function hideClass1()
{
    for(let i=0; i<itemFooter1.length; i++)
    {
        itemFooter1[i].classList.add('hide_footer1_part8');

        if(true)
        {
            for(let i=0; i<itemBlock1.length; i++)
            {
                itemBlock1[i].classList.remove('offsetSlider1');
            }
        }
    }
}


// // Слайдер 2
document.getElementById("block2").onmouseenter = function(event)
{
    let targ = event.target;
    
    if(targ.className == 'background_color2_container')
    {
        setTimeout(addClass, 400);
    }
}


function addClass()
{
    for(let i=0; i<itemFooter2.length; i++)
    {
        itemFooter2[i].classList.add('show_footer2_part8');
        itemFooter2[i].classList.remove('hide_footer2_part8');
        if(true)
        {
            for(let i=0; i<itemBlock2.length; i++)
            {
                itemBlock2[i].classList.add('offsetSlider2');
            }
        }
    }
}

document.getElementById("block2").onmouseleave = function(event)
{
    let targ = event.target;
    
    if(targ.className == 'background_color2_container')
    {
        deleteClass();
    }
}

function deleteClass()
{
    for(let i=0; i<itemFooter2.length; i++)
    {
        itemFooter2[i].classList.add('hide_footer2_part8');

        if(true)
        {
            for(let i=0; i<itemBlock2.length; i++)
            {
                itemBlock2[i].classList.remove('offsetSlider2');
            }
        }
    }
}

// Третий слайдер
document.getElementById("block3").onmouseenter = function(event)
{
    let target = event.target;
    if(target.className == 'background_color3_container')
    {  
        setTimeout(insertClass, 400); 
    }
}

function insertClass()
{
    for(let i=0; i<itemFooter3.length; i++)
    {
        itemFooter3[i].classList.add('show_footer3_part8');
        itemFooter3[i].classList.remove('hide_footer3_part8');

        if(true)
        {
            for(let i=0; i<itemBlock3.length; i++)
            {
                itemBlock3[i].classList.add('offsetSlider3');
            }
        }
    }
}


document.getElementById("block3").onmouseleave = function(event)
{
    let target = event.target;
    if(target.className == 'background_color3_container')
    {
        setTimeout(clearClass, 400);
    }
}

function clearClass()
{
    for(let i=0; i<itemFooter3.length; i++)
    {
        itemFooter3[i].classList.add('hide_footer3_part8');

        if(true)
        {
            for(let i=0; i<itemBlock3.length; i++)
            {
                itemBlock3[i].classList.remove('offsetSlider3');
            }
        }
    }
}