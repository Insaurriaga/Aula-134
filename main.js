img = "";
status = "";
objects = [];

function preload()
{
  img = loadImage('dog_cat.jpg');
}


function setup() 
{
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380, 380);
  video.hide();
}

function modelLoaded() 
{
  console.log("Modelo Carregado!")
  status = true;
  //objectDetector.detect(video, gotResult);
}

function gotResult(error, results) 
{
  if (error) 
  {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() 
{
  image(video, 0, 0, 380, 380);

  if(status != "")
  {
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.lenght; i++) 
    {
    document.getElementById("status").innerHTML = "Status: Objeto Detectado";
  document.getElementById("numberOfObjects").innerHTML = "Qualidade de objectos detectados" + objects.lenght;

    fill(r, g, b);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke(r, g, b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    //{
      //document.getElementById("status").innerHTML = "Status: Objeto Detectado";
      //fill("#FF0000");
      //percent = floor(objects[i].confidence * 100);
      //text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      //noFill();
      //stroke("#FF0000");
      //rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
  }
//Comandos para o cachorro
  //fill("#FF0000");
  //text("Dog", 45, 75);
  //noFill();
  //stroke("#FF0000");
  //rect(30, 60, 450, 350 );

//Comandos para o gato
  //fill("#FF0000");
  //text("Cat", 320, 120);
  //noFill();
  //stroke("#FF0000");
  //rect(300, 90, 270, 320 );

//Comandos para a tigela
  //fill("#FF0000");
  //text("Bowl", 280, 320);
  //noFill();
  //stroke("#FF0000");
  //rect(270, 300, 150, 200);
//}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}
