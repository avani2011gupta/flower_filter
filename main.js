function preload() {
    img = loadImage("flowers.png");
}

function setup() {
    canvas = createCanvas(350, 300);
    video = createCapture(VIDEO); 
    video.hide();

    tint_color = "pink";
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(img, 0, 180, 355,120);
    tint(tint_color);
}

function snapshot(){ 
    save('flower_bed_filter.png'); 
} 