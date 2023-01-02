let yes=document.querySelector("#container");
let s=false;


function create(num)
{
    let k=500/num;
    let u=k.toString();
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
                    cell.style.backgroundColor="black"; 
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

