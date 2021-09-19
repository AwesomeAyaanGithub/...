  
var images = ["https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png", "https://thumbs.dreamstime.com/b/cartoon-father-son-icon-over-white-background-colorful-design-vector-illustration-cartoon-father-son-icon-flat-design-169226123.jpg", "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6", "https://cdn1.iconfinder.com/data/icons/kids-cartoon/50/59-512.png"];
var names = ["Mom", "Dad", "Sister", "Me"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}