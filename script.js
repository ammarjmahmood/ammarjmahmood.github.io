document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('.scroll-section');
    const indicators = document.querySelectorAll('.indicator');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`).closest('.btn').classList.add('active');
                document.querySelector(`.indicator[data-page="${id}"]`).classList.add('active');
            } else {
                const id = entry.target.getAttribute('id');
                document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`).closest('.btn').classList.remove('active');
                document.querySelector(`.indicator[data-page="${id}"]`).classList.remove('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const targetId = indicator.getAttribute('data-page');
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Robotics Animation using p5.js
let robots = [];

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('robotics-animation');
    for (let i = 0; i < 5; i++) {
        robots.push(new Robot());
    }
}

function draw() {
    clear();
    robots.forEach(robot => {
        robot.update();
        robot.display();
    });
}

class Robot {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(20, 50);
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
        this.color = color(random(255), random(255), random(255));
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
    }

    display() {
        push();
        translate(this.x, this.y);
        fill(this.color);
        noStroke();
        
        // Body
        rect(0, 0, this.size, this.size * 1.5, 5);
        
        // Head
        ellipse(this.size / 2, -this.size / 2, this.size * 0.8);
        
        // Eyes
        fill(255);
        ellipse(this.size / 3, -this.size / 2, this.size / 5);
        ellipse(this.size * 2 / 3, -this.size / 2, this.size / 5);
        
        // Arms
        rect(-this.size / 4, this.size / 4, this.size / 4, this.size);
        rect(this.size, this.size / 4, this.size / 4, this.size);
        
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// ... (previous JavaScript code) ...

// Robotic Arm Animation
let arm;
let box;
let table;
let titleBlock;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('roboticArmCanvas');
  
  arm = new RoboticArm(width / 2, height - 100);
  box = new Box(width / 4, height - 150);
  table = new Table(width * 3 / 4, height - 100);
  titleBlock = new TitleBlock(box.x, box.y - 30);
}

function draw() {
  clear();
  
  // Draw background elements
  box.display();
  table.display();
  
  // Update and display the title block
  titleBlock.update();
  titleBlock.display();
  
  // Update and display the robotic arm
  arm.update();
  arm.display();
}

class RoboticArm {
  constructor(x, y) {
    this.baseX = x;
    this.baseY = y;
    this.armLength = 200;
    this.forearmLength = 150;
    this.angle1 = -PI/4;
    this.angle2 = PI/4;
    this.gripping = false;
    this.state = 'reaching'; // States: reaching, gripping, placing, returning
  }
  
  update() {
    switch(this.state) {
      case 'reaching':
        this.reach(titleBlock.x, titleBlock.y);
        if (dist(this.getEndPosition().x, this.getEndPosition().y, titleBlock.x, titleBlock.y) < 5) {
          this.state = 'gripping';
        }
        break;
      case 'gripping':
        this.grip();
        this.state = 'placing';
        break;
      case 'placing':
        this.reach(table.x, table.y - 50);
        if (dist(this.getEndPosition().x, this.getEndPosition().y, table.x, table.y - 50) < 5) {
          this.state = 'returning';
        }
        break;
      case 'returning':
        this.release();
        this.reach(this.baseX, this.baseY - this.armLength - this.forearmLength);
        break;
    }
  }
  
  reach(targetX, targetY) {
    let dx = targetX - this.baseX;
    let dy = targetY - this.baseY;
    let targetAngle = atan2(dy, dx);
    
    this.angle1 = lerp(this.angle1, targetAngle - PI/4, 0.05);
    this.angle2 = lerp(this.angle2, targetAngle + PI/4, 0.05);
  }
  
  grip() {
    this.gripping = true;
    titleBlock.grabbed = true;
  }
  
  release() {
    this.gripping = false;
    titleBlock.grabbed = false;
  }
  
  getEndPosition() {
    let endX = this.baseX + cos(this.angle1) * this.armLength + cos(this.angle1 + this.angle2) * this.forearmLength;
    let endY = this.baseY + sin(this.angle1) * this.armLength + sin(this.angle1 + this.angle2) * this.forearmLength;
    return {x: endX, y: endY};
  }
  
  display() {
    stroke(100);
    strokeWeight(10);
    
    // Base
    line(this.baseX, this.baseY, this.baseX, this.baseY - 50);
    
    // Arm
    let elbowX = this.baseX + cos(this.angle1) * this.armLength;
    let elbowY = this.baseY + sin(this.angle1) * this.armLength;
    line(this.baseX, this.baseY - 50, elbowX, elbowY);
    
    // Forearm
    let endPos = this.getEndPosition();
    line(elbowX, elbowY, endPos.x, endPos.y);
    
    // Gripper
    strokeWeight(5);
    if (this.gripping) {
      line(endPos.x - 10, endPos.y, endPos.x + 10, endPos.y);
    } else {
      line(endPos.x - 10, endPos.y - 10, endPos.x + 10, endPos.y + 10);
      line(endPos.x - 10, endPos.y + 10, endPos.x + 10, endPos.y - 10);
    }
  }
}

class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 80;
  }
  
  display() {
    fill(200);
    stroke(100);
    strokeWeight(2);
    rect(this.x - this.width/2, this.y - this.height, this.width, this.height);
  }
}

class Table {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 60;
  }
  
  display() {
    fill(150, 100, 50);
    stroke(100);
    strokeWeight(2);
    rect(this.x - this.width/2, this.y - this.height, this.width, this.height);
  }
}

class TitleBlock {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 30;
    this.grabbed = false;
  }
  
  update() {
    if (this.grabbed) {
      let endPos = arm.getEndPosition();
      this.x = endPos.x;
      this.y = endPos.y;
    }
  }
  
  display() {
    fill(255, 200, 0);
    stroke(100);
    strokeWeight(2);
    rect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(14);
    text("TITLE", this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  arm = new RoboticArm(width / 2, height - 100);
  box = new Box(width / 4, height - 150);
  table = new Table(width * 3 / 4, height - 100);
  titleBlock = new TitleBlock(box.x, box.y - 30);
}