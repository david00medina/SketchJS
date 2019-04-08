let myRGB;

let panel;
let thickness;

let thicknessSlider;
let thicknessSpan;

let colorPicker;

function setup()
{
    generatePanel();

    createCanvas(600,600);
    background(255);

    myRGB = color('black');
}

function draw()
{
    cursor("icon/brush.cur", 17, 16);
}

function mousePressed()
{
    drawStroke();
}

function mouseDragged()
{
    drawStroke();
}

function createThicknessController()
{
    let thicknessDiv = createDiv("<label for='thicknessSlider'>Thickness : </label>");

    thicknessSlider = createSlider(1, 100, 5);
    thicknessSlider.attribute("id", "thicknessSlider");
    thicknessSlider.attribute("name", "thicknessSlider");
    thicknessSlider.position(90, -2);
    thicknessSlider.input(updateThicknessVal);

    thickness = thicknessSlider.value();
    thicknessSpan = createSpan(thicknessSlider.value());
    thicknessSpan.position(230, 0);
    thicknessSpan.style('font-weighht', 'bold');

    thicknessDiv.child(thicknessSlider);
    thicknessDiv.child(thicknessSpan);
    thicknessDiv.child(thicknessSpan);

    thicknessDiv.position(30, 75);
    return thicknessDiv;
}

function createColorController()
{
    let colorPickerDiv = createDiv('<span">Choose a color : </span>');
    colorPicker = createColorPicker('#000000');
    colorPicker.position(125, -5);
    colorPicker.input(changeColor);

    colorPickerDiv.child(colorPicker);
    colorPickerDiv.position(325, 75);
    return colorPickerDiv;
}

function generatePanel()
{
    panel = createDiv("<h1 style='text-align: center'>Control Panel</h1>");

    let thicknessDiv = createThicknessController();

    let colorPickerDiv = createColorController();

    let clearButton = createButton("Clear");
    clearButton.position(30, 125);
    clearButton.mouseClicked(clear);

    panel.child(thicknessDiv);
    panel.child(colorPickerDiv);
    panel.child(clearButton);

    panel.style('color', '#D0EEFB');
    panel.style('background-color', '#0088C2');
    panel.style('position', 'absolute');
    panel.style('width', '600px');
    panel.style('height', '25%');
}

function drawStroke()
{
    push();
    strokeWeight(thickness);
    stroke(myRGB);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
}

function updateThicknessVal()
{
    thickness = thicknessSlider.value();
    thicknessSpan.html(thickness);
}

function changeColor()
{
    myRGB = colorPicker.color();
}

function clear()
{
    background(255);
}