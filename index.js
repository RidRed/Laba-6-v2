

function shifr()
{
    var inter = [];
    inter = document.getElementById('Shifr-input').value;
    var Result = document.getElementById('Res');
    var alf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    var b = 0;
    var pod = []
    var Res = "";
    var lengthIn = (inter.toString().length);
    console.log(inter);
    for(var i = 0; i <= lengthIn; i++)
    {
        
        pod [b] = inter[i];
        for(var f = 0; f <= 32;f++)
        {
            var alf2 = alf[f];
            if(alf2 == pod[b])
            {
                 Res += alf[32-f]; 
                console.log(Res);

            }
            else
            {
                continue;
                
            }
        }
        b++;
        
    }
    Result.innerHTML += Res + ";  ";
}
