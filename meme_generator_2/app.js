document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".meme-form");
    const memeList = document.querySelector(".meme-item");

    
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        
        //create li element

        let list = document.createElement('li');
        list.classList.add("meme-img")


        // create image from given URL

        let imageURL = document.querySelector(".imageURL").value;
        let image = document.createElement("img");
        let src = imageURL;
        image.src = src;

        //create top and bottom text divs

        let topText = document.createElement("div");
        topText.classList.add("text", "top");
        topText.innerText = document.querySelector(".top-text").value;

        let bottomText = document.createElement("div");
        bottomText.classList.add("text", "bottom");
        bottomText.innerText = document.querySelector(".bottom-text").value;
        
        //create remove meme div 

        let removeItem = document.createElement('div');
        removeItem.classList.add("text", "remove");
        removeItem.innerText = "X"


        //append meme to page

        memeList.append(list);
        list.append(image);
        list.append(topText)
        list.append(bottomText)
        list.append(removeItem)

        form.reset();
    })

    function remove(event){
        event.target.parentNode.remove();
    }
    
    memeList.addEventListener('click', remove, false);
});