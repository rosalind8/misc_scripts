javascript:(function(){
    a = (document.getElementById("wikibody").innerHTML).match(/<tr class="atwiki_tr_(odd|even) atwiki_tr_\d+">[\s\S]*?<\/tr>/gm);
    if(a){
        var t = "";
        var b = "";
        for(var i=1; i<a.length; i++){
            b = a[i].match(/<td style="">(.*?)<\/td>/gm);
            var y=""; var w=""; var c="";
            if(b && b.length==5){
                b[4].match(/<td style="">(.*?)<\/td>/gm);
                y = RegExp.$1;
                b[0].match(/<td style="">(.*?)<\/td>/gm);
                w = RegExp.$1;
                b[1].match(/<td style="">(.*?)<\/td>/gm);
                c = RegExp.$1;
                b[2].match(/<td style="">(.*?)<\/td>/gm);
                c += "(" + RegExp.$1 + ")";
                if(c=="()"){c = "";}
                t += y + "\t" + w + "\t独立語\t" + c + "\n";
            }
        }
        console.log(t);
    }
})()

javascript:(function(){
    var s = document.createElement('script');
    s.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
    document.body.appendChild(s);
    setTimeout(function(){
        var t = $('td').text();
        console.log(t.length);
        for(var i=1; i<t.length; i++){
            console.log(t[i]+"\n");
        }
    }, 1000);
})();

javascript:(function(){a=(document.getElementById("wikibody").innerHTML).match(/<tr class="atwiki_tr_(odd|even) atwiki_tr_\d+">[\s\S]*?<\/tr>/gm);if(a){var t="";var b="";for(var i=1;i<a.length;i++){b=a[i].match(/<td style="">(.*?)<\/td>/gm);var y="";var w="";var c="";if(b&&b.length==5){b[4].match(/<td style="">(.*?)<\/td>/gm);y=RegExp.$1;b[0].match(/<td style="">(.*?)<\/td>/gm);w=RegExp.$1;b[1].match(/<td style="">(.*?)<\/td>/gm);c=RegExp.$1;b[2].match(/<td style="">(.*?)<\/td>/gm);c+="("+RegExp.$1+")";if(c=="()"){c="";}t+=y+"\t"+w+"\t独立語\t"+c+"\n";}}console.log(t);}})()
