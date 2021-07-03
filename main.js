var canvas = new fabric.canvas("myCanvas");
Iron_Man_x = 10;
Iron_Man_y = 10;
var Iron_Man_object = "";

function Iron_Man_update() {
    fabric.Image.fromURL("Iron_Man.jpg", function (Img) {
        Iron_Man_object = Img;
        Iron_Man.scaleToWidth(150);
        Iron_Man.scaleToHeight(140);
        Iron_Man.set({
            top: Iron_Man_y,
            left: Iron_Man_x
        });
        canvas.add(Iron_Man_object);
    });
}
