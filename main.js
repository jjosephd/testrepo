var theArray = [];
var i = 0;
var element = '';

    function refreshBtn() {
        var toIndex = prof.length - 1;
        var fromIndex = prof[0];
        
        for (i < 0; i < prof.length; i++){
            theArray[i] = prof[i];
            //console.log(theArray[i]);
        }

        var lastIndex = theArray.shift();
        console.log(lastIndex);
        theArray.push(lastIndex);
        console.log(theArray);

        theArray[0].parentNode.appendChild(theArray[0]);

        document.getElementById("jj-img").style.transitionDuration = "5s";
    }
