
let dot;
let imgRef;
let imgArr;
let c;
let drag = false;
let colorArr;
let grid;
let gridArr = [];
let idCounter = 0;
let Output1;
let Output2;
let Output3;
let Output4;

let r = 255;
let g = 0;
let b = 255;
function setup() {
    c = createCanvas(400, 400);
    dot = new Dot(10, 10, 20, 20);
    
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
          gridArr.push(new Grid((50 * i) - 40, (50 * j) + 70, 30, 30, idCounter, r, g, b));
            idCounter++;
            r = r - 7;
            g = g + 7;
            b = b - 7;
        }
    } 
   Output1 = new Grid(50 + 45, 300, 40, 40, 500, 255, 255, 255);
   Output2 = new Grid(100 + 45, 300, 40, 40, 500, 255, 255, 255); 
   Output3 = new Grid(150 + 45, 300, 40, 40, 500, 255, 255, 255); 
   Output4 = new Grid(200 + 45, 300, 40, 40, 500, 255, 255, 255); 
    
}

function draw() {
    background(0);
    if (drag == true) {
        dot.changePos();
    }
    
    for (let i = 0; i < gridArr.length; i++) {
        gridArr[i].render();
    }
    
    
    Output1.render();
    Output2.render();
    Output3.render();
    Output4.render();
    dot.render();  
}

function mousePressed() {
    dot.changePos();
}
function mouseDragged() {
    drag = true;
    for (let i = 0; i < gridArr.length; i++) {
      if (mouseX >= gridArr[i].x && mouseX <= gridArr[i].x + 30 && mouseY <= gridArr[i].y + 30 && mouseY >= gridArr[i].y) {
          //print("X: " + gridArr[i].x + " Y: " + gridArr[i].y + " ID: " + gridArr[i].id);
          if (gridArr[i].id > 3 && gridArr[i].id < 36) {
             //center Dot
          dot.r0 = gridArr[i].r;
          dot.g0 = gridArr[i].g;
          dot.b0 = gridArr[i].b;
          //left Dot
          dot.r1 = gridArr[i - 4].r;
          dot.g1 = gridArr[i - 4].g;
          dot.b1 = gridArr[i - 4].b;
          // right Dot
          dot.r2 = gridArr[i + 4].r;
          dot.g2 = gridArr[i + 4].g;
          dot.b2 = gridArr[i + 4].b;
          // upper Dot
          dot.r3 = gridArr[i - 1].r;
          dot.g3 = gridArr[i - 1].g;
          dot.b3 = gridArr[i - 1].b;
          // lower Dot
          dot.r4 = gridArr[i + 1].r;
          dot.g4 = gridArr[i + 1].g;
          dot.b4 = gridArr[i + 1].b;
          
          // output
          Output1.r = gridArr[i - 4].r;
          Output1.g = gridArr[i - 4].g;
          Output1.b = gridArr[i - 4].b;
          // right Dot
          Output2.r = gridArr[i + 4].r;
          Output2.g = gridArr[i + 4].g;
          Output2.b = gridArr[i + 4].b;
          // upper Dot
          Output3.r = gridArr[i - 1].r;
          Output3.g = gridArr[i - 1].g;
          Output3.b = gridArr[i - 1].b;
          // lower Dot
          Output4.r = gridArr[i + 1].r;
          Output4.g = gridArr[i + 1].g;
          Output4.b = gridArr[i + 1].b;   
          }
      }
        //print(gridArr[i].x);
    }
    
}

function mouseReleased() {
    drag = false;
}

class Dot {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // col 0
        this.r0 = 255;
        this.g0 = 255;
        this.b0 = 255;
        //col1
        this.r1 = 255;
        this.g1 = 255;
        this.b1 = 255;
        // col2
        this.r2 = 255;
        this.g2 = 255;
        this.b2 = 255;
        // col3
        this.r3 = 255;
        this.g3 = 255;
        this.b3 = 255;
        // col4
        this.r4 = 255;
        this.g4 = 255;
        this.b4 = 255;
    }
    
    render() {
        noStroke();
        fill(this.r0, this.g0, this.b0);
        ellipse(this.x, this.y, this.width - 5, this.height - 5);
        if (drag == true) {
            fill(this.r1, this.g1, this.b1);
            ellipse(lerp(this.x - 20, mouseX, 0.2), lerp(this.y, mouseY, 0.2), this.width, this.height);
            fill(this.r2, this.g2, this.b2);
            ellipse(lerp(this.x + 20, mouseX, 0.2), lerp(this.y, mouseY, 0.2), this.width, this.height);
            fill(this.r3, this.g3, this.b3);
            ellipse(lerp(this.x, mouseX, 0.2), lerp(this.y - 20, mouseY, 0.2), this.width, this.height);
            fill(this.r4, this.g4, this.b4);
            ellipse(lerp(this.x, mouseX, 0.2), lerp(this.y + 20, mouseY, 0.2), this.width, this.height);
        }
    }
    
    changePos() {
        this.x = lerp(this.x, mouseX, 0.2);
        this.y = lerp(this.y, mouseY, 0.2);
    }
}

class Grid {
    constructor(x, y, width, height, id, r, g, b) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.id = id;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    
    render() {
        noStroke();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.width, this.height);
    }
    
}
