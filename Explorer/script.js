fetch("https://gamertocoder.garena.co.th/api/minigames")
 .then((response) => {
    if(response.status !== 200){
        return response.status;
    }
    return response.json();
 })

.then((data) => {
    if(typeof data == "number"){
        alert(data);
    } else {
        
        for(let i = 0;i < 4; ++i){
            const currentData = data[i];
            const newListItem = document.createElement("li");
            // newListItem.classList.add("card");
            const genre_array = currentData.genre;
            let genre_string = genre_array[0];
            if(genre_array.length > 1){
                for(let j = 1; j < genre_array.length; ++j){
                    genre_string = genre_string + ", " + genre_array[j];
                }
            }
            const html =
            '<div class="flip-card">' + '<div class="flip-card-inner">'
            + '<div class="flip-card-front">' + '<img  src="' + currentData.icon + '" style="width: 300px; height: 300px"/>' + '</div>'
            + '<div class="flip-card-back">' + '<div class="name" onclick="changeName('+ currentData.name +')"> name: ' + currentData.name + '</div>'
            + '<div> type: ' + genre_string +'</div>'
            + '<div lass="deteail">' + currentData.description + '</div>'
            + '<a href ="' + currentData.icon + '">link</a>'
            + '</div>' + '</div>' + '</div>';
            html.trim();
            newListItem.innerHTML = html;
            document.getElementById("list1").appendChild(newListItem);
        }

        for(let i = 4;i < 8; ++i){
            const currentData = data[i];
            const newListItem = document.createElement("li");
            // newListItem.classList.add("card");
            const genre_array = currentData.genre;
            let genre_string = genre_array[0];
            if(genre_array.length > 1){
                for(let j = 1; j < genre_array.length; ++j){
                    genre_string = genre_string + ", " + genre_array[j];
                }
            }
            const html =
            '<div class="flip-card">' + '<div class="flip-card-inner">'
            + '<div class="flip-card-front">' + '<img  src="' + currentData.icon + '" style="width: 300px; height: 300px"/>' + '</div>'
            + '<div class="flip-card-back">' + '<div class="name" onclick="changeName('+ currentData.name +')"> name: ' + currentData.name + '</div>'
            + '<div> type: ' + genre_string +'</div>'
            + '<div lass="deteail">' + currentData.description + '</div>'
            + '<a href ="' + currentData.icon + '">link</a>'
            + '</div>' + '</div>' + '</div>';
            html.trim();
            newListItem.innerHTML = html;
            document.getElementById("list2").appendChild(newListItem);
        }
        for(let i = 8;i < 12; ++i){
            const currentData = data[i];
            const newListItem = document.createElement("li");
            // newListItem.classList.add("card");
            const genre_array = currentData.genre;
            let genre_string = genre_array[0];
            if(genre_array.length > 1){
                for(let j = 1; j < genre_array.length; ++j){
                    genre_string = genre_string + ", " + genre_array[j];
                }
            }
            const html =
            '<div class="flip-card">' + '<div class="flip-card-inner">'
            + '<div class="flip-card-front">' + '<img  src="' + currentData.icon + '" style="width: 300px; height: 300px"/>' + '</div>'
            + '<div class="flip-card-back">' + '<div class="name" onclick="changeName('+ currentData.name +')"> name: ' + currentData.name + '</div>'
            + '<div> type: ' + genre_string +'</div>'
            + '<div lass="deteail">' + currentData.description + '</div>'
            + '<a href ="' + currentData.icon + '">link</a>'
            + '</div>' + '</div>' + '</div>';
            html.trim();
            newListItem.innerHTML = html;
            document.getElementById("list3").appendChild(newListItem);
        }

    }
 });