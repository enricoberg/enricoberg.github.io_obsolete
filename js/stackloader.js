const stackbars = document.querySelectorAll(".stackcardcontainer");




const htmlicon = document.createElement('img');
const cssicon = document.createElement('img');
const sassicon = document.createElement('img');
const jsicon = document.createElement('img');
const bootstrapicon = document.createElement('img');
const mysqlicon = document.createElement('img');
const pythonicon = document.createElement('img');
const phpicon = document.createElement('img');
const nodeicon = document.createElement('img');
const javaicon = document.createElement('img');


htmlicon.src = '../img/language icons/html.png'; 
cssicon.src = '../img/language icons/css.png'; 
sassicon.src = '../img/language icons/sass.png'; 
jsicon.src = '../img/language icons/js.png'; 
bootstrapicon.src = '../img/language icons/bootstrap.png'; 
mysqlicon.src = '../img/language icons/mysql.png'; 
pythonicon.src = '../img/language icons/python.png'; 
phpicon.src = '../img/language icons/php.png'; 
nodeicon.src = '../img/language icons/node.png'; 
javaicon.src = '../img/language icons/java.png'; 




stackbars.forEach(bar => {
    if(bar.classList.contains("html")) bar.appendChild(htmlicon.cloneNode(true));
    if(bar.classList.contains("css")) bar.appendChild(cssicon.cloneNode(true));
    if(bar.classList.contains("sass")) bar.appendChild(sassicon.cloneNode(true));
    if(bar.classList.contains("javascript")) bar.appendChild(jsicon.cloneNode(true));
    if(bar.classList.contains("bootstrap")) bar.appendChild(bootstrapicon.cloneNode(true));
    if(bar.classList.contains("mysql")) bar.appendChild(mysqlicon.cloneNode(true));
    if(bar.classList.contains("python")) bar.appendChild(pythonicon.cloneNode(true));
    if(bar.classList.contains("php")) bar.appendChild(phpicon.cloneNode(true));
    if(bar.classList.contains("node")) bar.appendChild(nodeicon.cloneNode(true));
    if(bar.classList.contains("java")) bar.appendChild(javaicon.cloneNode(true));
    
});