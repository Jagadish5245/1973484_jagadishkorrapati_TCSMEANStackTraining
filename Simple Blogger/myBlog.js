function addBlog(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imageId").files[0].name;
    //imageInfo.src = URL.createObjectURL(event.target.files[0]);

    var data = '<div class="col-md-4"><div class="card mb-4 box-shadow"><img class="card-img-top" src="'+imageInfo+'" id="imageInfo" style="height: 225px; width: 100%; display: block;"><div class="card-body"><label>Title: </label><p class="card-text" id="titleInfo">'+title+'</p></div><div class="card-body"><label>Description :</label><p class="card-text" id="titleInfo">'+desc+'</p></div></div></div>';
    console.log(title)
    console.log(desc);
    console.log(imageInfo);

    var div = document.getElementById("dynamic");
    div.innerHTML += data;
    document.getElementById("client").reset();
    
}