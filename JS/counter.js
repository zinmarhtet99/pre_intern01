
            document.addEventListener('DOMContentLoaded', function(){
                document.querySelector("button").onclick=count;
            });

            document.addEventListener('DOMContentLoaded', function(){
                document.querySelector("button").onmouseleave=amout;
            });

            let counter=0;
            function count(){
                counter++;
                document.querySelector("#counter").innerHTML=counter;

                if(counter % 10 === 0){
                alert('Counter is at ${counter}!');
                }
            }

            function amout(){
                alert('This page is ${counter}');
            }

            

        