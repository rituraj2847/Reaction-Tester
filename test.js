 


            var start = new Date().getTime();
            
            var quickTime = 6500;
            
            function getColor(){
                
                var color = "#";
                
                var length = "0123456789ABCDEF".split('');
                
                for(var i = 0; i<6; i++){
                    
                    color +=  length[ i + Math.ceil(Math.random() * 10)];
                }
                
                return color;
            }
            
            function makeShapeAppear(){
                
                
                var top = (Math.random() * 100) + 100 ;
                
                var height = (Math.random() * 500) + 30 ;
            
                var width = (Math.random() * 500) + 30 ;
                
                var left = (Math.random() * 1000) + 100;
                
                if(Math.random() < 0.5){
                    
                    document.getElementById("shape").style.borderRadius = "50%" ;
                }
                
                else{
                    
                    document.getElementById("shape").style.borderRadius = "0px" ;
                }
                
                document .getElementById("shape").style.backgroundColor = getColor();
                
                document.getElementById("shape").style.left = left;
                
                document.getElementById("shape").style.top = top;
                
                document.getElementById("shape").style.height = height;
                
                document.getElementById("shape").style.width = width;               
                
                document.getElementById("shape").style.display = "block";
  
                start = new Date().getTime();
            }
            function change(){
                
                document.getElementById("shape").style.display = "none";  
               
                var end = new Date().getTime();
                
                var timeTaken = (end - start)/1000;
            
                document.getElementById("text").innerHTML = timeTaken + "s";
                
                if(timeTaken < quickTime){
                    quickTime = timeTaken;
                    document.getElementById("text2").innerHTML = quickTime;
                }
                
                setTimeout(makeShapeAppear, 500);
            }