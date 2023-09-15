console.log("connected with external js file");

var a=1;
var b=2;
if(a+b>4)
{
    console.log(a+b);
}
else if(a+b<1)
{
    console.log(a+b); 
}
else
    console.log(a+b);

for(var num=0;num<11;num=num+2)
    console.log(num);


var p=[1,2,3,4];
p.forEach(element => {
    console.log(element);
    
});

/*item in var*/
console.log("showing index");
for(var item in p)
    console.log(item);

/*item of var*/    
console.log("items of the array");
for(var item of p)
    console.log(item);

/*while*/
console.log("While loop");
var num=0;
while(num<5)
{
    console.log(num);
    num++;
}

