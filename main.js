canvas = document.getElementById("wateromars")
ctx = canvas.getContext("2d")

nasa_images = ["Nasa0.jpg", "Nasa1.jpg", "Nasa2.jpg", "Nasa3.jpg", "Nasa4.jpg"]
random_image = Math.floor(Math.random() * 5)

console.log(random_image)
rover_width = 100
rover_height = 90

background_image = nasa_images[random_image];

rover_image = "rover.png"

rover_x = 10
rover_y = 10

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadRover;
    rover_imageTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);

    if(keypress == "38") {
        up()
        console.log("up")
    }
    
    if(keypress == "40") {
        down()
        console.log("down")
    }

    if(keypress == "39") {
        right()
        console.log("right")
    }

    if(keypress == "37") {
        left()
        console.log("left")
    }
}

    function up() {
        if (rover_y >= 0) {
            rover_y = rover_y - 10;
            console.log("When up arrow pressed, x = " + rover_x + " | y = " + rover_y)
            uploadBackground();
            uploadRover();
        }
    }

    function down() {
        if (rover_y <= 500) {
            rover_y = rover_y + 10;
            console.log("When down arrow pressed, x = " + rover_x + " | y = " + rover_y)
            uploadBackground();
            uploadRover();
        }
    }

    function left() {
        if (rover_x >= 0) {
            rover_x = rover_x - 10;
            console.log("When left arrow pressed, x = " + rover_x + " | y = " + rover_y)
            uploadBackground();
            uploadRover();
        }
    }

    function right() {
        if (rover_x <= 710) {
            rover_x = rover_x + 10;
            console.log("When right  arrow pressed, x = " + rover_x + " | y = " + rover_y)
            uploadBackground();
            uploadRover();
        }
    }
