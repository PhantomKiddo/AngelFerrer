const Dialog_Box = document.getElementById("Image_Modal");

function Image_Modal_Open(img)
{
    Dialog_Box.showModal();

    var img_Change = document.getElementById("Image_Modal").getElementsByTagName("img");

    img_Change[0].src = img;
    img_Change[0].width = 400;
}

function Image_Modal_close()
{
    Dialog_Box.close(); 
}   