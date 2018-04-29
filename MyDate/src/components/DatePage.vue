<template xmlns:v-on="http://www.w3.org/1999/xhtml">

  <div id="DatePage">
    <!--<div>-->
      <!--<div class="sk-wave">-->
      <!--<div class="sk-rect sk-rect1"></div>-->
      <!--<div class="sk-rect sk-rect2"></div>-->
      <!--<div class="sk-rect sk-rect3"></div>-->
      <!--<div class="sk-rect sk-rect4"></div>-->
      <!--<div class="sk-rect sk-rect5"></div>-->
    <!--</div>-->
    <br/>


    <!--Header-->

    <!--Button to generate Dates-->

    <div>
      <transtion name="fade">
        <button class="method1 buttonFont" v-on:click="clear(); getResult();">Search For Results!</button>
      </transtion>
    </div>
    <br>
    <div>
      <div class="loader method2" v-if="isSearching"></div>
      <h1 v-if="searchCompleted">
        <div>
          <button v-if="searchCompleted" class="method1 buttonFont" v-on:click="shuffling(); doubleCheck(); sorter(); initial(); scrollToDates();">Display Your Dates!</button>
        </div>

      </h1>
    </div>




    <div v-if='allPlaceShown'>
      <label>All places have been shown.</label>
    </div>

    <div v-if='allMealsShown'>
      <label>All meals have been shown.</label>
    </div>
    <h1 class="center " v-if="ButtonsVisible">
        Scroll To See Your Three Date Options:
    </h1>

      <!--Date Box 1-->
    <!--Row 1-->
    <div id="Date1" class="row" v-if="ButtonsVisible">
      <h1  v-if="ButtonsVisible">
        Date 1
      </h1>

      <div class="left column border">
        <!--Date Opener-->
        <div v-if="ButtonsVisible">
          <h2>
             1st Activity
          </h2>
          <!--Date Opener-->
          <p class="biggerFont">
            {{Date1Open.placeSearch.name}}
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
            {{Date1Open.placeDetails.formatted_address}}
          </p>

          <p>
            <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
           <a   class="AddyWeb" v-bind:href="Date1Open.placeDetails.url" target="_blank">Directions </a>
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
            {{Date1Open.placeDetails.formatted_phone_number}} <br>
          </p>
          <p >
            <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
            {{Date1Open.placeDetails.rating}}<br>
          </p>
          <p>
            <img class="minicons " src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
            <a class="AddyWeb"  v-bind:href="Date1Open.placeDetails.website" target="_blank">Website</a>
            <br>
          </p>
          <p v-if="Open1NoRating">
            <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
            "{{Date1Open.placeDetails.reviews[0].text}}"
          </p>
          <button v-if="ButtonsVisible" v-on:click="NewDate1Open()">Find New Place</button>
        </div>
      </div>
      <div class="column middle">
        <h2>
          Meal
        </h2>

        <p v-if="ButtonsVisible">
          <!--Date name-->
          <p class="biggerFont">
              {{meal1.placeSearch.name}}
          </p>
        <p>
          <!--Date location-->
          <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
          {{meal1.placeDetails.formatted_address}}
        </p>
        <!--Directions-->
        <p>
          <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
          <a class="AddyWeb" v-bind:href="meal1.placeDetails.url" target="_blank">Directions</a>
        </p>
        <p>
          <!--Date phone number-->
          <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
          {{meal1.placeDetails.formatted_phone_number}}
        </p>
        <p>
          <!--Date Rating-->
          <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
          {{meal1.placeDetails.rating}}
        </p>
        <p>
          <!--Date Website-->
          <img class="minicons" src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
           <a class="AddyWeb" v-bind:href="meal1.placeDetails.website" target="_blank">Website </a>
        </p>
        <p v-if="Meal1NoRating">
          <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
          "{{meal1.placeDetails.reviews[0].text}}"
        </p>

          <button v-if="ButtonsVisible" v-on:click="NewMeal1()">Find New Meal</button>

      </div>

      <div class="column right">
        <h2>
          2nd Activity
        </h2>
        <p v-if="ButtonsVisible" class="biggerFont">

          {{Date1Close.placeSearch.name}}
        </p>
        <p>
          <!--Date location-->
          <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
          {{Date1Close.placeDetails.formatted_address}}
        </p>
        <p>
          <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
          <a class="AddyWeb" v-bind:href="Date1Close.placeDetails.url" target="_blank">Directions</a>
        </p>
        <p>
          <!--Date phone number-->
          <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
          {{Date1Close.placeDetails.formatted_phone_number}}
        </p>
        <p>
          <!--Date Rating-->
          <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
          {{Date1Close.placeDetails.rating}}
        </p>
        <p>
          <!--Date Website-->
          <img class="minicons" src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
          <a class="AddyWeb" v-bind:href="Date1Close.placeDetails.website" target="_blank">Website</a>
        </p>
        <p v-if="Close1NoRating">
          <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
          "{{Date1Close.placeDetails.reviews[0].text}}" <br>
        </p>

          <button  v-if="ButtonsVisible" v-on:click="NewDate1Close()">Find New Place</button>

      </div>
    </div>
        <!--<p v-if="ButtonsVisible" class="bottomBorder">-->
          <!--&lt;!&ndash;Date name&ndash;&gt;-->
          <!--{{Date1Open.placeSearch.name}}<br>-->
          <!--&lt;!&ndash;Date location&ndash;&gt;-->
          <!--&lt;!&ndash;Date phone number&ndash;&gt;-->
          <!--&lt;!&ndash;Date Rating&ndash;&gt;-->
          <!--&lt;!&ndash;Date Website&ndash;&gt;-->
          <!--&lt;!&ndash;<img class="minicons" src="https://cdn0.iconfinder.com/data/icons/feather/96/clock-512.png">&ndash;&gt;-->
          <!--&lt;!&ndash;{{Date1Open.placeDetails.opening_hours.}}<br>&ndash;&gt;-->
        <!--</p>-->

        <!--Date 2-->
    <div v-if="ButtonsVisible" class="row colorDateTwo">
      <h1>
        Date 2
      </h1>
        <div class="column left">
          <h2>
            1st Activity
          </h2>

          <!--Date 2 Opener-->
          <p class="biggerFont">
            {{Date2Open.placeSearch.name}}

          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
            {{Date2Open.placeDetails.formatted_address}}
          </p>
          <p>
            <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
             <a class="AddyWeb" v-bind:href="Date2Open.placeDetails.url" target="_blank">Directions</a>
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
            {{Date2Open.placeDetails.formatted_phone_number}}
          </p>
          <p>
            <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
            {{Date2Open.placeDetails.rating}}
          </p>
          <p>
            <img class="minicons" src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
            <a class="AddyWeb" v-bind:href = "Date2Open.placeDetails.website" target="_blank">Website</a>
          </p>
          <p v-if="Open2NoRating">
            <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
            "{{Date2Open.placeDetails.reviews[0].text}}"
          </p>

            <button v-if="ButtonsVisible" v-on:click="NewDate2Open()">Find New Place</button>

        </div>

        <div class="column middle colorDateTwo">
          <h2>
            Meal
          </h2>
          <!--Date Meal 2-->
          <p class="biggerFont">
            {{meal2.placeSearch.name}}
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
            {{meal2.placeDetails.formatted_address}}
          </p>
          <p>
            <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
             <a class="AddyWeb" v-bind:href="meal2.placeDetails.url" target="_blank">Directions</a>D
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
            {{meal2.placeDetails.formatted_phone_number}}
          </p>
          <p>
            <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
            {{meal2.placeDetails.rating}}
          </p>
          <p>
            <img class="minicons" src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
            <a v-bind:href="meal2.placeDetails.website" target="_blank">Website </a>
          </p>
          <p v-if="Meal2NoRating">
            <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
            "{{meal2.placeDetails.reviews[0].text}}"
          </p>

            <button  v-if="ButtonsVisible" v-on:click="NewMeal2()">Find New Meal</button>

        </div>

        <div class="column right colorDateTwo">
          <h2>
            2nd Activity
          </h2>
          <!--Date Closer 2-->
          <p class="biggerFont">
            {{Date2Close.placeSearch.name}}
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
            {{Date2Close.placeDetails.formatted_address}}
          </p>
          <p>
            <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
            <a class="AddyWeb" v-bind:href="Date2Close.placeDetails.url" target="_blank">Directions </a>
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
            {{Date2Close.placeDetails.formatted_phone_number}}
          </p>
          <p>
            <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
            {{Date2Close.placeDetails.rating}}
          </p>
          <p>
            <img class="minicons" src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
          <a class="AddyWeb" v-bind:href="Date2Close.placeDetails.website" target="_blank">Website </a>
          </p>
          <p v-if="Close2NoRating">
            <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
            "{{Date2Close.placeDetails.reviews[0].text}}"
          </p>

            <button  v-if="ButtonsVisible" v-on:click="NewDate2Close()">Find New Place</button>

        </div>
    </div>

        <!--Date 3 Opener-->
    <div  v-if="ButtonsVisible" class="row">
      <h1 v-if="ButtonsVisible">
        Date 3
      </h1>
        <div class="column left">
          <h2>
            1st Activity
          </h2>

          <p class="biggerFont">
            {{Date3Open.placeSearch.name}}
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
            {{Date3Open.placeDetails.formatted_address}}
          </p>
          <p>
            <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
            <a class="AddyWeb" v-bind:href="Date3Open.placeDetails.url" target="_blank">Directions </a>
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
            {{Date3Open.placeDetails.formatted_phone_number}}
          </p>
          <p>
            <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
            {{Date3Open.placeDetails.rating}}
          </p>
          <p>
            <img class="minicons" src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
            <a v-bind:href="Date3Open.placeDetails.website" target="_blank"> Website</a>
          </p>
          <p v-if="Open3NoRating">
            <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
            "{{Date3Open.placeDetails.reviews[0].text}}"
          </p>

            <button v-if="ButtonsVisible" v-on:click="NewDate3Close()">Find New Place</button>

        </div>

        <div class="column middle">
          <h2>
            Meal
          </h2>
          <!--Date Meal 3r-->
          <p class="biggerFont">
            {{meal3.placeSearch.name}}<br>
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
            {{meal3.placeDetails.formatted_address}}
          </p>
          <p>
            <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
            <a class="AddyWeb" v-bind:href="meal3.placeDetails.url" target="_blank">Directions</a>
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
            {{meal3.placeDetails.formatted_phone_number}}
          </p>
          <p>
            <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
            {{meal3.placeDetails.rating}}
          </p>
          <p>
            <img class="minicons" src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
            <a class="AddyWeb" v-bind:href="meal3.placeDetails.website" target="_blank">Website</a>
          </p>
          <p v-if="Meal3NoRating">
            <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
            "{{meal3.placeDetails.reviews[0].text}}"<br>
          </p>

            <button v-if="ButtonsVisible" v-on:click="NewMeal3()">Find New Meal</button>
            <!--Date Box 1-->

        </div>

        <div class="column right">
          <h2>
            2nd Activity
          </h2>
          <p class="biggerFont">
            {{Date3Close.placeSearch.name}}
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/location-512.png">
            {{Date3Close.placeDetails.formatted_address}}
          </p>
          <p>
            <img class="minicons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS+SURBVGhD7ZppqHVTHIev+ZV5JgplyNCLfDEPJUJEfCAihMhQxmRIyjxE4gsJiaQMRRmSXi9JiciQDEXmWYbMPM8+9/+27m6ffdY6e7v3PXV/9XTPWmedddbv7DX+152a11Ko5+A9OBGWN6MnrQ6XwjfwEhwBy0JfWhOug+/Btk/9m/AhdDUUBr6DtG7xBzsVFsC4WgnOhW8h6r0dliTeTl6PY6jJwNOwFxwPb07nyZdwMawNufJpHgsfQdTz2fTfGUYseDSUGmoy8AzsDqmWgYPheYhyP8PNsCm06QB4FeJzr8A+cNp0eoaRUJuhFSA0zMAeMEq7wsPwN/i5P+E+2BFS7QRPQdT/Ptg2fxTVaiQ0zNBJUDfwLOQYqGtruBN+g6jrSTgcNBZGv4azYUVIlWUk1GQo0MCe0FUbwTXwI6T1/wpXgjNUk4qMhMLQaxCDuG/ZXc+Ht+AO2BjaNJaRpVFzZuQssL/fW6UGcjB/AZdUqTJlGXFmWG3wsjfFOHOAq+XAqdS8h8xAq8JieBy2NKNFWUZugp+gy2BeA1yFo0EugE2Ns1zIgf0D2KYrzGhRlhEHnflPVKly+USdGKzjBjMKpGH3ZutWqcGs5takriwjzlKnQ32FzpXdxs2i3WQTM8aUi7A7APdp65iRqHiwuxCdAVtVqeHaHK6FhVWqH/mDvAC28TgzEhUbOQQs8wtsY0aDVoGvwHJur/uUY+gEcJ1JVWzEbbeFP4ZtzUD+Oi+DM5C/mmPCmcd0ya62i4qNNOlR8HOfV6nZ0QXwGMTA78WIj3lnWKtKzY4WgW3dr0r1ZGQudDK4C4hxOrFG6po3MtfaHt6Bw6rUBBsxArOk4Wiin8gH4AKt5sfIXCuN4qiJNLIBGJC7pUoNNJFG3DTazgeq1EBFRjzRNUUzNoP1Bi9nRW5WH4H0iJBtZGUwtmRE3ahfyNPbH2AYc5gMvm04ePm/KduIW3N3m74fZsKEeZeBMja8N2hcHQW+b6TQ/C46EB6EplNmUdfydOi53TKGScPE9aA8UL0B5l1lBvKk6E71dXDuVwaqtxi8zJYHKo+51r2/GTUVD3bNeIiKsvdAyPCNT8tQz3ZmDNG78A+UxK+s28C4wYsIXKcqNpJ2J6mPGef3pi9KdQ443u6vUoNTpwHxYyDWB8eUUXqD5cOO1KmKjBwJYeJGiG5WN5MjIzPR6IMgvvsUM1BMsXan+hVDk7KNOHgj5B9jIh0zbbPWKDlBXATpRY9PdV/IPfMXPRHD+kYLU2nGp1NdQo7QbjAqqj6uZhj5azphMCHncebKrhMTxO9wN7RNBqU6FDybWP+tZlwIMcU5q3Q1lBoQz9jRPa3f4HSXtWUXiCCEeJeyA1RaH5ziuhiqG/gEzgRnJ2ejq8E78XjfsiV3765Bxs1sm593A+lBq/GidhxDdQOfgvcgTXfphpDOA8tE+VF37waybwO7p+W9IfAO0zVmpHIMDTMQ25Q2OVk41dot4vPevbtYxozljsG7eBvu+978asjtfLGaDLn3Sg0YafTGNcdAXXYrB+2LEPX5XXdB/DOA3+kiOerSJ0t1Q10NNMnrC3+kGANiFN7B3bs0dDnkdqFx5LnDq+oI+cxrAjU19R/6bt6RSC/gyQAAAABJRU5ErkJggg==">
            <button class="buttonWebDir"><a v-bind:href="Date3Close.placeDetails.url" target="_blank"> </a>Directions</button>
          </p>
          <p>
            <img class="minicons" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/71/mobile-512.png">
            {{Date3Close.placeDetails.formatted_phone_number}}
          </p>
          <p>
            <img class="minicons" src="https://png.icons8.com/metro/1600/like.png">
            {{Date3Close.placeDetails.rating}}
          </p>
          <p>
            <img class="minicons" src="https://www.freeiconspng.com/uploads/world-wide-web-globe-icon-images--pictures-becuo-0.png">
            <button class="buttonWebDir"><a  v-bind:href="Date3Close.placeDetails.website" target="_blank"></a>Website</button>
          </p>
          <p v-if="Close3NoRating">
            <img class="minicons" src="https://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png">
            "{{Date3Close.placeDetails.reviews[0].text}}"<br>
          </p>

            <button  v-if="ButtonsVisible" v-on:click="NewDate3Close()">Find New Place</button>

        </div>
    </div>
  </div>








  <!--Comment so I can push-->

</template>

<script>
  import lodash from 'lodash';
  import axios from 'axios';
  import DotLoader from "../../node_modules/vue-spinner/src/DotLoader.vue";


  const API_KEY = "AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk";
  const PROXY_ADDRESS = "https://cors.now.sh/";
  const PHOTO_LIBRARY = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=";
  const GOOGLE_PLACES_ADDRESS = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
  const GOOGLE_PLACES_DETAIL_SEARCH = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";
  const PHOTO_MAX_WITH = 500;

  export default {
    components: {DotLoader},
    name: "datepage",
    props: {
      categorytypes: {
        type: Array,
        required: true
      },
      maxBudget: {
        type: Number,
        required: true
      },
      minBudget: {
        type: Number,
        required: true
      },
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
      },
      radius: {
        type: Number,
        required: true
      }
    },
    data(){
      return{
        Randomqueue: [],
        ButtonsVisible: false,
        Mealqueue : [],
        Placequeue : [],
        allPlaceShown: false,
        allMealsShown: false,
        n:0,
        meal1 : "",
        meal2:"",
        meal3:"",
        Date1Open:"",
        Date2Open:"",
        Date3Open:"",
        Date1Close:"",
        Date2Close:"",
        Date3Close:"",
        msg: 'Welcome to Your Vue.js App',
        color:"red",
        results:"",
        parameters: {'maxBudget':4, 'minBudget':0 ,'categories':[], 'latitude':0, 'longitude':0, 'radius':24150},
        searchCompleted: false,


        // variables
        SP: "",
        numbers: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,75,80,85,90,95,100],
        types: ["Active","City","Something New","Vintage"],
        selectedType: "",
        isSearching: false
      }
    },
    methods:{
      clear: function(){
        let mealLength = this.Mealqueue.length;
        let placeLength = this.Placequeue.length;
        let randomLength= this.Randomqueue.length;

        for(let i =0; i<= mealLength; i++){
          this.Mealqueue.pop(i);
        }
        for(let i =0; i<= placeLength; i++){
          this.Placequeue.pop(i);
        }
        for(let i =0; i<= randomLength; i++){
          this.Randomqueue.pop(i);
        }



      },
      Open1NoRating: function() {

        if(this.Date1Open.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }


      },
      Open2NoRating: function(){
        if(this.Date2Open.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }

      },
      Open3NoRating: function(){
        if(this.Date3Open.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }

      },
      Close1NoRating: function(){
        if(this.Date1Close.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }


      },
      Close2NoRating: function(){
        if(this.Date2Close.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }


      },
      Close3NoRating: function () {
        if(this.Date3Close.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }

      },
      Meal1NoRating: function (){
        if(this.meal1.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }

      },
      Meal2NoRating: function (){
        if(this.meal2.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }

      },
      Meal3NoRating: function (){
        if(this.meal3.placeDetails.includes("reviews")){
          return true;

        }
        else{
          return false;
        }

      },


      NewDate1Open: function(){
        this.Placequeue.push(this.Date1Open);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date1Open=newPlace;
      },

      NewMeal1: function(){
        this.Mealqueue.push(this.meal1);
        let newPlace=this.Mealqueue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allMealsShown=true;
        }
        return this.meal1=newPlace;
      },

      NewDate1Close: function(){
        this.Placequeue.push(this.Date1Close);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date1Close=newPlace;
      },

      NewDate2Open: function(){
        this.Placequeue.push(this.Date2Open);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date2Open=newPlace;


      },

      NewMeal2: function(){
        this.Mealqueue.push(this.meal2);
        let newPlace=this.Mealqueue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allMealsShown=true;
        }
        return this.meal2=newPlace;
      },
      NewDate2Close: function(){
        this.Placequeue.push(this.Date2Close);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date2Close=newPlace;


      },

      NewDate3Open: function(){
        this.Placequeue.push(this.Date3Open);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date3Open=newPlace;


      },
      NewMeal3: function(){
        this.Mealqueue.push(this.meal3);
        let newPlace=this.Mealqueue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allMealsShown=true;
        }
        return this.meal3=newPlace;


      },
      NewDate3Close: function(){
        this.Placequeue.push(this.Date3Close);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown='true' ;
        }
        return this.Date3Close=newPlace;


      },

      sorter: function() {
        for (let i = 0; i < this.Randomqueue.length; i++) {
          let place = this.Randomqueue[i];
          if (place.placeSearch.types.includes("restaurant") || place.placeSearch.types.includes("cafe")) {
            this.Mealqueue.push(place);
            place["showed"] = "false";

          }
          else {
            this.Placequeue.push(place);
            place["showed"] = "false";
          }
        }
        this.ButtonsVisible='true';

      },
      initial: function () {
        this.meal1=this.Mealqueue.shift();
        this.meal2=this.Mealqueue.shift();
        this.meal3=this.Mealqueue.shift();

        this.Date1Open=this.Placequeue.shift();
        this.Date2Open=this.Placequeue.shift();
        this.Date3Open=this.Placequeue.shift();
        this.Date1Close=this.Placequeue.shift();
        this.Date2Close=this.Placequeue.shift();
        this.Date3Close=this.Placequeue.shift();


        this.meal1.showed="true";
        this.meal2.showed="true";
        this.meal3.showed="true";

        this.Date1Open.showed="true";
        this.Date2Open.showed="true";
        this.Date3Open.showed="true";
        this.Date1Close.showed="true";
        this.Date2Close.showed="true";
        this.Date3Close.showed="true";


      },
      shuffle: function(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      },
      shuffling: function(array){
        if(this.searchCompleted == true) {
          this.Randomqueue=this.results
          this.Randomqueue=this.shuffle(this.Randomqueue);
        }
      },
      doubleCheck: function(){

        let newQueue = [];
        let idlist = [];

        for (let i = 0; i < this.Randomqueue.length;  i++){
          let id = this.Randomqueue[i].placeSearch.name;
          console.log(id);
          if (idlist.includes(id)){
            let joshBeard = "cool";
            console.log("False");
          }
          else{
            newQueue.push(this.Randomqueue[i]);
            idlist.push(id);
            console.log("True");
          }

        }
        this.Randomqueue = newQueue;
      },
      filler: function(){

        console.log("Hello Humans");
        this.Randomqueue=this.results;
        console.log("Goodbye Humans");

      },

      queueFunctions: function(array){
        shuffling(array);
        sorter;
        this.initial;
      },
      async getResult() {
        this.results = "";
        this.isSearching = true;
        if(this.searchCompleted == true) {
          this.searchCompleted = false;
        }
        function formatResultDetailSearch(result) {
          var r = {};
          r['phoneNumber'] = result.formatted_phone_number;
          r['hours'] = result.opening_hours.weekday_text;
          r['reviews'] = result.reviews;
          r['website'] = result.website;
          r['googleurl'] = result.url;
          r['photos'] = result.photos;
          r['name'] = result.name;
          r['id'] = result.place_id;
          return r;
        }

        function formatResult(result) {
          var r = {};
          r['id'] = result.place_id;
          r['name'] = result.name;
          r['icon'] = result.icon;
          r['rating'] = result.rating;
          r['address'] = result.vicinity;
          r['types'] = result.types;
          if (result.opening_hours !== undefined) {
            r['open_now'] = result['opening_hours'].open_now;
          }
          else {
            r['open_now'] = true;
          }
          return r;
        }

        async function getDetails(data) {
          let r = [];
          for (let i = 0; i < data.length; i++) {
            let json = await axios.get(PROXY_ADDRESS + GOOGLE_PLACES_DETAIL_SEARCH + data[i].place_id + '&key=' + API_KEY);
            r[i] = json.data.result;
          }
          return r;
        }


        for (let h = 0; h < this.parameters.categories.length; h++) {
          let searchstring = "";
          console.log(this.parameters.categories[h]);

          if((this.parameters.categories[h] == "restaurant") == true) {
            console.log('using price parameter');
            searchstring = PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + this.latitude + ',' + this.longitude + "&radius=" + this.parameters.radius + "&type=" + this.parameters.categories[h] + "&minprice=" + (this.parameters.minBudget) + "&maxprice=" + this.parameters.maxBudget + "&key=" + API_KEY;
          }
          else {
            console.log('not using price parameter');
            searchstring = PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + this.latitude + ',' + this.longitude + "&radius=" + this.parameters.radius + "&type=" + this.parameters.categories[h] + "&key=" + API_KEY;
          }
          console.log(searchstring);
          let raw = await axios.get(searchstring);
          console.log(raw.data.status);
          if (raw.data.status !== 'ZERO_RESULTS') {
            let data = raw.data.results;
            let cleandata = [];
            for (let j = 0; j < data.length; j++) {
              let dict = {};
              let detail = await axios.get(PROXY_ADDRESS + GOOGLE_PLACES_DETAIL_SEARCH + data[j].place_id + "&key=" + API_KEY);
              let detaildata = detail.data.result;
              dict['placeSearch'] = formatResult(data[j]);
              dict['placeDetails'] = detaildata;
              if(cleandata.includes(Object(dict)) == false) {
                cleandata[j] = dict;
                console.log(cleandata[j]);
              }
              else{
                console.log('duplicate found');
              }
            }

            if (Array.isArray(this.results) == true) {
              for (let o = 0; o < cleandata.length; o++) {
                if(this.results.includes(Object(cleandata[o])) == false) {
                  this.results.push(cleandata[o]);
                }
                else {
                  console.log('duplicate found');
                }
              }
            }
            else {
              this.results = cleandata;
            }
          }
        }
        this.searchCompleted  = true;
        this.isSearching = false;
      },
      scrollToDates: function() {
        document.getElementById( 'Date1' ).scrollIntoView();
      }
    },
    watch: {
      budget:function() {
        console.log('data updated.');
        console.log(this.budget);
        this.parameters['budget'] = this.budget;
        //Will add more api stuff here
      },
      categorytypes: function() {
        console.log('data updated.');
        console.log(this.categorytypes);
        this.parameters['categories'] = this.categorytypes;
        //Will add more api stuff here
      },
      latitude:function() {
        console.log('data updated.');
        this.parameters['latitude'] = this.latitude;
      },
      longitude:function() {
        console.log('data updated.');
        this.parameters['longitude'] = this.longitude;
      },
      radius: function() {
        this.parameters['radius'] = this.radius;
      },
      maxBudget: function() {
        this.parameters['maxBudget'] = this.maxBudget;
      },
      minBudget: function() {
        this.parameters['minBudget'] = this.minBudget;
      }

    }

  }
</script>

<style >
  #DatePage{
    color: whitesmoke ;
    background: #4F4E4C;
    min-height: 100vh;

  }
  html,body{
    min-height: 100vh;
    padding:0;
    margin:0;
  }


  #DatePage .center {
    text-align: center;
    margin-left: 25%;
  }
  #DatePage .mid{
    display: block;
    left: auto;
    right: auto;
  }
  #DatePage ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  #DatePage li{
    display: inline-block;
    margin: 0 10px;
  }


  #DatePage .secondPage{
    background: #fd5e53;
    padding: 1px 0;
    margin-bottom: 0px;
  }
  #DatePage h3{
      float: left;
      margin: 0;
  }

  #DatePage .border{
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-color: #fd5e53 ;
  }

  #DatePage .column{
    float: left;
    padding: 10px;
    column-gap: 10px;
  }
  #DatePage .left, .right {
    width: 450px;
  }
  #DatePage .middle{
    width: 450px;
  }
  #DatePage .row{
    content: "";
    display: table;
    clear: both;
  }


  .dateBox1{
   width: 450px;
    height: 350px;
    border-color: #fd5e53 ;
    border-style:solid;
    border-width:8px;
  }
  .colorDateTwo{
    background: whitesmoke;
    color: #000;
  }
  .customAlert{

    display: none;
    position: fixed;
    max-width: 25%;
    min-width: 250px !important;
    min-height: 20%;
    height: 200px;
    left: 50%;
    top: 50%;
    padding: 10px;
    box-sizing: border-box;
    margin-left: -12.5%;
    margin-top: -5.2%;
    background: #088A68;
  }
  #DatePage .titles{
    font-size: 40px;
  }


  #DatePage .loader {
    position: absolute;
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #fd5e53;
    width: 40px;
    height: 40px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  #DatePage .minicons{
    width: 20px;
    height: 22px;
  }
  #DatePage p .bottomBorder{
    border-style: dot-dot-dash;
    border-width: 0px 0px 10px 0px;
  }
  #DatePage .biggerFont{
    font-size: 30px;
  }

  #DatePage .directions , #DatePage .website{
    color:#fd5e53;

  }
  #DatePage .buttonWebDir{
    padding-left: 0px;
    padding-right: 7px;
    border-radius: 7px;
    padding-top: 3px;
    padding-bottom: 3px;
    color:#323b39 ;
    font-size: 13px;
    background:  #fd5e53;

  }
  #DatePage .buttonFont{
    font-size: 40px;
  }

  #DatePage .method1{
    width: 50%;
    margin-left: 25%;


  }
  #DatePage .method2{
    margin-left: 50%;
  }

  a.website{
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    text-decoration: none;
    color: #fd5e53;
  }

  a.directions{
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    text-decoration: none;
    color: #fd5e53;
  }
  #DatePage .AddyWeb{
    color: #fd5e53;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
