let yes=document.querySelector("#container");
let s=false;
let b=document.querySelector("#b");
let colour=document.querySelector("#colour");
let c="black";


function create(num)
{
    let k=500/num;
    
    for(let i=0;i<num;i++)
    {
        for(let j=0;j<num;j++)
        {
            let cell=document.createElement('div');
           
            cell.setAttribute('class', "c");
            cell.style.width=k+"px";
            cell.style.height=k+"px";
            cell.addEventListener("mousedown", function()
            {
                s=true;
            })
            cell.addEventListener('dragstart', function(event)
            {
                event.preventDefault();
            })
            cell.addEventListener("mouseover", function()
            {
                if(s==true)
                {
                    cell.style.backgroundColor=c; 
                }
            })
            cell.addEventListener("mouseup",function()
            {
                s=false;
            } 
            )
            yes.appendChild(cell);
            
        }
        
    }
    let y=document.querySelectorAll(".c");
    
}

create(16);
function clear()
{
    let u=document.querySelectorAll(".c");
    u.forEach(element => {
        yes.removeChild(element)
        
    });
}

b.addEventListener("click", function(event)
{
    clear();
    let number=prompt("Please enter the size of the grid","16");
    if(+number<1 || +number>100)
    {
        alert("Please enter a number between 1 and 1000");
        return;
    }
    create(+number);
})

colour.addEventListener("change", function()
{
    c=colour.value;
})