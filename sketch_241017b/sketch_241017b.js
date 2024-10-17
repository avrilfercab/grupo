let pantalla = [];
let estado;
let tiempo, duracion;

function preload() {
  pantalla[0] = loadImage ("/assets/0.0.png");
  pantalla[1] = loadImage ("/assets/0.1.png");
  pantalla[2] = loadImage ("/assets/0.2.png"); //primeros botones camino A y B
  pantalla[3] = loadImage ("/assets/1.1.png"); // camino A
  pantalla[4] = loadImage ("/assets/1.2.png"); // camino A
  pantalla[5] = loadImage ("/assets/1.3.png"); // camino A
  pantalla[6] = loadImage ("/assets/2.1.png"); // camino B
  pantalla[7] = loadImage ("/assets/2.2.png"); // camino B
  pantalla[8] = loadImage ("/assets/2.3.png"); // camino B
  pantalla[9] = loadImage ("/assets/3.1.png");
  pantalla[10] = loadImage ("/assets/3.2.png");
  pantalla[11] = loadImage ("/assets/3.3.png"); //segundos botones caminos C D y E
  pantalla[12] = loadImage ("/assets/4.0.png"); // camino C + boton de fin
  pantalla[13] = loadImage ("/assets/5.1.png"); // camino D
  pantalla[14] = loadImage ("/assets/5.2.png"); // camino D
  pantalla[15] = loadImage ("/assets/5.3.png"); // Camino D + boton de fin
  pantalla[16] = loadImage ("/assets/6.0.png"); // camino E + boton de fin
  pantalla[17] = loadImage ("/assets/7.0.png");  // creditos + boton de reinicio
}

function setup() {
  createCanvas (640, 480);
  estado = "inicio";

  tiempo = int( millis() / 1000 );
  duracion1 = 10;
}


function draw() {
  background(0);

  if (estado === "inicio") {
    image (pantalla[0], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img1") {
    image (pantalla[1], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img2") {
    image (pantalla[2], 0, 0, 640, 480);
    botones(40, 420, 120, 30);
    botones (500, 420,120, 30 );
  } else if (estado === "img3") {
    image (pantalla[3], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img4") {
    image (pantalla[4], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img5") {
    image (pantalla[5], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img6") {
    image (pantalla[6], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img7") {
    image (pantalla[7], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img8") {
    image (pantalla[8], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img9") {
    image (pantalla[9], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img10") {
    image (pantalla[10], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img11") {
    image (pantalla[11], 0, 0, 640, 480);
    botones(40, 420, 120, 30);
    botones(260, 420, 120, 30);
    botones (500, 420, 120, 30);
  } else if (estado === "img12") {
    image (pantalla[12], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img13") {
    image (pantalla[13], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img14") {
    image (pantalla[14], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img15") {
    image (pantalla[15], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img16") {
    image (pantalla[16], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  } else if (estado === "img17") {
    image (pantalla[17], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
  }
}

function botones(x, y, an, al) {
  rect (x, y, an, al);
}

function detectarBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX <x+ancho && mouseY > y && mouseY < y+alto;
}
function mousePressed() {
  if (estado === "inicio") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img1";
    }
  } else if (estado === "img1") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img2";
    }
  } else if (estado === "img2") {
    if (detectarBoton(40, 420, 120, 30)) {
      estado="img3";
    } if (detectarBoton(500, 420, 120, 30)) {
      estado="img6";
    }
  } else if (estado === "img3") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img4";
    }
  } else if (estado === "img4") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img5";
    }
  } else if (estado === "img6") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img7";
    }
  } else if (estado === "img7") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img8";
    }
  }  else if (estado === "img8" || estado === "img5") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img9";
    }
  }  else if (estado === "img9") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img10";
    }
  } else if (estado === "img11") {
    if (detectarBoton(40, 420, 120, 30)) {
      estado="img12";
    }if (detectarBoton(260, 420, 120, 30)) {
      estado="img13";
    }if (detectarBoton(500, 420,120, 30 )) {
      estado="img16";
    }
  }else if (estado === "img12") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img17";
    }
  }else if (estado === "img16") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img17";
    }
  }else if (estado === "img10") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img11";
    }
  }else if (estado === "img13") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img14";
    }
  }else if (estado === "img14") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img15";
    }
  }else if (estado === "img15") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img17";
    }
  }
    
  
}
