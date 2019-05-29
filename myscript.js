function GetVauleAmount() {
    let Amount=document.getElementById('Amount').value;
    Amount=parseInt(Amount);
    return Amount;

}
function GetVauleFrom_Currency(obj) {

    let From_Currency=document.getElementById('From_Currency').value;

    return From_Currency;

}
function GetVauleTo_Currency() {
    let To_Currency=document.getElementById('To_Currency').value;
    return To_Currency;

}


function Chuyendoi(Amount,From_Currency,To_Currency)
{
    let res=0;
    let UsdToVietNam=23000;
    let JpToVietNam=214;
    let UsdToJp=109;
    if(From_Currency=='VietNam')
    {
        if(To_Currency=='VietNam')
        {
            res=Amount*1;
        }
        else
            if(To_Currency=='USD')
            {
                res=Amount/UsdToVietNam;
            }
        if(To_Currency=='JP')
        {
            res=Amount/JpToVietNam;
        }
    }
    if(From_Currency=='USD')
    {
        if(To_Currency=='USD')
        {
            res=Amount*1;
        }
        else
        if(To_Currency=='VietNam')
        {
            res=Amount*UsdToVietNam;
        }
        if(To_Currency=='JP')
        {
            res=Amount/UsdToJp;
        }
    }
    if(From_Currency=='JP')
    {
        if(To_Currency=='JP')
        {
            res=Amount*1;
        }
        else
        if(To_Currency=='USD')
        {
            res=Amount*UsdToJp;
        }
        if(To_Currency=='VietNam')
        {
            res=Amount*JpToVietNam;
        }
    }

    document.getElementById('Result').innerHTML=res;

}