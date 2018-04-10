


<template>

    <div id="DatePage">



      <nav>
        <label class="centerup">Category</label>
        <select class="centerup" v-model="selectedType">
          <option v-for="type in types">{{type}}</option>
        </select>
        <label>Price</label>
          <select v-model="SP">
            <option v-for="num in numbers">{{num}}</option>
          </select>
      </nav>
      <h1>
        Your Dates
      </h1>

      <div v-if='this.allPlaceShown === true'>
          <label>All places have been shown.</label>
      </div>

       <div v-if='this.allMealsShown === true'>
                <label>All meals have been shown.</label>
       </div>

     <div >
                 <button v-on:click="shuffling(myMessage); sorter(); initial()">Sort API</button>
     </div>


     <div style="width: 300px; border-color:blue;
          border-style:solid; border-width:1;display:left;">
        <h2>
          Date 1
        </h2>


            {{Date1Open.name}}
                    <button v-on:click="NewDate1Open()">Find New Place</button>

            <div>
            {{meal1.name}}
                    <button v-on:click="NewMeal1()">Find New Place</button>

            </div>
     {{Date1Close.name}}
             <button v-on:click="NewDate1Close()">Find New Place</button>

     </div>

     <div style="width: 300px; border-color:blue;
                    border-style:solid; border-width:1;display:left;">
        <h2>
                  Date 2
        </h2>
     {{Date2Open.name}}
                    <button v-on:click="NewDate2Open()">Find New Place</button>

              <div>
                   <button v-on:click="NewMeal2()">Find New Place</button>

              {{meal2.name}}

              </div>
     {{Date2Close.name}}
                  <button v-on:click="NewDate2Close()">Find New Place</button>

     </div>

     <div style="width: 300px; border-color:blue;
                      border-style:solid; border-width:1;display:left;">
           <h2>
              Date 3
           </h2>
     {{Date3Open.name}}
                               <button v-on:click="NewDate3Open()">Find New Place</button>

              <div>
                                        <button v-on:click="NewMeal3()">Find New Place</button>

              {{meal3.name}}
              </div>
     {{Date3Close.name}}
                               <button v-on:click="NewDate3Close()">Find New Place</button>

     </div>




    <ul>
                  <li v-for="place in results">


                      <div style="width: 300px; border-style: solid; border-width: 1px;
                        align-items: left; display: inline-block; text-align: left;
                          " align="left" >
                        <span id="long">{{place.name}}.</span>
                        <span id="true">{{place.vicinity}}.</span>
                      </div>



                      <hr color="red"/>
                  </li>
    </ul>




    </div>

</template>

<script>

    export default {
        name: "datepage",
        data(){
          return{
                    Randomqueue: [],
                    Mealqueue : [],
                    Placequeue : [],
                    allPlaceShown: false,
                    allMealsShown: false,
                    n:0,
                    meal1 : [],
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


                    myMessage :[
                    {
                                "geometry" : {
                                  "location" : {
                                    "lat" : -33.870775,
                                    "lng" : 151.199025
                                  }
                                },
                                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                                "id" : "21a0b251c9b8392186142c798263e289fe45b4aa",
                                name : "Rhythmboat Cruises",
                                "opening_hours" : {
                                  "open_now" : true
                                },
                                "photos" : [
                                  {
                                    "height" : 270,
                                    "html_attributions" : [],
                                    "photo_reference" : "CnRnAAAAF-LjFR1ZV93eawe1cU_3QNMCNmaGkowY7CnOf-kcNmPhNnPEG9W979jOuJJ1sGr75rhD5hqKzjD8vbMbSsRnq_Ni3ZIGfY6hKWmsOf3qHKJInkm4h55lzvLAXJVc-Rr4kI9O1tmIblblUpg2oqoq8RIQRMQJhFsTr5s9haxQ07EQHxoUO0ICubVFGYfJiMUPor1GnIWb5i8",
                                    "width" : 519
                                  }
                                ],
                                "place_id" : "ChIJyWEHuEmuEmsRm9hTkapTCrk",
                                "scope" : "GOOGLE",
                                "alt_ids" : [
                                  {
                                    "place_id" : "D9iJyWEHuEmuEmsRm9hTkapTCrk",
                                    "scope" : "APP"
                                  }
                                ],
                                "reference" : "CoQBdQAAAFSiijw5-cAV68xdf2O18pKIZ0seJh03u9h9wk_lEdG-cP1dWvp_QGS4SNCBMk_fB06YRsfMrNkINtPez22p5lRIlj5ty_HmcNwcl6GZXbD2RdXsVfLYlQwnZQcnu7ihkjZp_2gk1-fWXql3GQ8-1BEGwgCxG-eaSnIJIBPuIpihEhAY1WYdxPvOWsPnb2-nGb6QGhTipN0lgaLpQTnkcMeAIEvCsSa0Ww",
                                "types" : [ "travel_agency", "restaurant", "food", "establishment" ],
                                "vicinity" : "Pyrmont Bay Wharf Darling Dr, Sydney"
                              },
                              {
                                "geometry" : {
                                  "location" : {
                                    "lat" : -33.866891,
                                    "lng" : 151.200814
                                  }
                                },
                                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                                "id" : "45a27fd8d56c56dc62afc9b49e1d850440d5c403",
                                "name" : "Private Charter Sydney Habour Cruise",
                                "photos" : [
                                  {
                                    "height" : 426,
                                    "html_attributions" : [],
                                    "photo_reference" : "CnRnAAAAL3n0Zu3U6fseyPl8URGKD49aGB2Wka7CKDZfamoGX2ZTLMBYgTUshjr-MXc0_O2BbvlUAZWtQTBHUVZ-5Sxb1-P-VX2Fx0sZF87q-9vUt19VDwQQmAX_mjQe7UWmU5lJGCOXSgxp2fu1b5VR_PF31RIQTKZLfqm8TA1eynnN4M1XShoU8adzJCcOWK0er14h8SqOIDZctvU",
                                    "width" : 640
                                  }
                                ],
                                "place_id" : "ChIJqwS6fjiuEmsRJAMiOY9MSms",
                                "scope" : "GOOGLE",
                                "reference" : "CpQBhgAAAFN27qR_t5oSDKPUzjQIeQa3lrRpFTm5alW3ZYbMFm8k10ETbISfK9S1nwcJVfrP-bjra7NSPuhaRulxoonSPQklDyB-xGvcJncq6qDXIUQ3hlI-bx4AxYckAOX74LkupHq7bcaREgrSBE-U6GbA1C3U7I-HnweO4IPtztSEcgW09y03v1hgHzL8xSDElmkQtRIQzLbyBfj3e0FhJzABXjM2QBoUE2EnL-DzWrzpgmMEulUBLGrtu2Y",
                                "types" : [ "restaurant", "food", "establishment" ],
                                "vicinity" : "Australia"
                              },
                              {
                                "geometry" : {
                                  "location" : {
                                    "lat" : -33.870943,
                                    "lng" : 151.190311
                                  }
                                },
                                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                                "id" : "30bee58f819b6c47bd24151802f25ecf11df8943",
                                "name" : "Bucks Party Cruise",
                                "opening_hours" : {
                                  "open_now" : true
                                },
                                "photos" : [
                                  {
                                    "height" : 600,
                                    "html_attributions" : [],
                                    "photo_reference" : "CnRnAAAA48AX5MsHIMiuipON_Lgh97hPiYDFkxx_vnaZQMOcvcQwYN92o33t5RwjRpOue5R47AjfMltntoz71hto40zqo7vFyxhDuuqhAChKGRQ5mdO5jv5CKWlzi182PICiOb37PiBtiFt7lSLe1SedoyrD-xIQD8xqSOaejWejYHCN4Ye2XBoUT3q2IXJQpMkmffJiBNftv8QSwF4",
                                    "width" : 800
                                  }
                                ],
                                "place_id" : "ChIJLfySpTOuEmsRsc_JfJtljdc",
                                "scope" : "GOOGLE",
                                "reference" : "CoQBdQAAANQSThnTekt-UokiTiX3oUFT6YDfdQJIG0ljlQnkLfWefcKmjxax0xmUpWjmpWdOsScl9zSyBNImmrTO9AE9DnWTdQ2hY7n-OOU4UgCfX7U0TE1Vf7jyODRISbK-u86TBJij0b2i7oUWq2bGr0cQSj8CV97U5q8SJR3AFDYi3ogqEhCMXjNLR1k8fiXTkG2BxGJmGhTqwE8C4grdjvJ0w5UsAVoOH7v8HQ",
                                "types" : [ "restaurant", "food", "establishment" ],
                                "vicinity" : "37 Bank St, Pyrmont"
                              },
                              {
                                "geometry" : {
                                  "location" : {
                                    "lat" : -33.867591,
                                    "lng" : 151.201196
                                  }
                                },
                                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                                "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                                "name" : "Australian Cruise Group",
                                "opening_hours" : {
                                  "open_now" : true
                                },
                                "photos" : [
                                  {
                                    "height" : 242,
                                    "html_attributions" : [],
                                    "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                    "width" : 200
                                  }
                                ],
                                "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                                "scope" : "GOOGLE",
                                "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                                "types" : [ "travel_agency", "restaurant", "food", "establishment" ],
                                "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                              },
                            {
                              "geometry" : {
                                "location" : {
                                  "lat" : -33.867591,
                                  "lng" : 151.201196
                                }
                              },
                              "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                              "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                              "name" : "Big Bens Batting Ring",
                              "opening_hours" : {
                                "open_now" : true
                              },
                              "photos" : [
                                {
                                  "height" : 242,
                                  "html_attributions" : [],
                                  "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                  "width" : 200
                                }
                              ],
                              "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                              "scope" : "GOOGLE",
                              "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                              "types" : [ "travel_agency", "establishment" ],
                              "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                            },
                            {
                              "geometry" : {
                                "location" : {
                                  "lat" : -33.867591,
                                  "lng" : 151.201196
                                }
                              },
                              "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                              "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                              "name" : "AJ's Exclusive Arm Gym",
                              "opening_hours" : {
                                "open_now" : true
                              },
                              "photos" : [
                                {
                                  "height" : 242,
                                  "html_attributions" : [],
                                  "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                  "width" : 200
                                }
                              ],
                              "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                              "scope" : "GOOGLE",
                              "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                              "types" : [ "travel_agency", "establishment" ],
                              "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                            },
                            {
                              "geometry" : {
                                "location" : {
                                  "lat" : -33.867591,
                                  "lng" : 151.201196
                                }
                              },
                              "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                              "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                              "name" : "Kiantes Cat Emporium",
                              "opening_hours" : {
                                "open_now" : true
                              },
                              "photos" : [
                                {
                                  "height" : 242,
                                  "html_attributions" : [],
                                  "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                  "width" : 200
                                }
                              ],
                              "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                              "scope" : "GOOGLE",
                              "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                              "types" : [ "travel_agency","establishment" ],
                              "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                            },{
                              "geometry" : {
                                "location" : {
                                  "lat" : -33.867591,
                                  "lng" : 151.201196
                                }
                              },
                              "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                              "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                              "name" : "Casual Haely's XXL",
                              "opening_hours" : {
                                "open_now" : true
                              },
                              "photos" : [
                                {
                                  "height" : 242,
                                  "html_attributions" : [],
                                  "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                  "width" : 200
                                }
                              ],
                              "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                              "scope" : "GOOGLE",
                              "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                              "types" : [ "travel_agency","establishment" ],
                              "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                            },
                            {
                              "geometry" : {
                                "location" : {
                                  "lat" : -33.867591,
                                  "lng" : 151.201196
                                }
                              },
                              "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                              "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                              "name" : "Job's Hob Knob Emporium",
                              "opening_hours" : {
                                "open_now" : true
                              },
                              "photos" : [
                                {
                                  "height" : 242,
                                  "html_attributions" : [],
                                  "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                  "width" : 200
                                }
                              ],
                              "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                              "scope" : "GOOGLE",
                              "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                              "types" : [ "travel_agency","establishment" ],
                              "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                            },
                            {
                              "geometry" : {
                                "location" : {
                                  "lat" : -33.867591,
                                  "lng" : 151.201196
                                }
                              },
                              "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                              "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                              "name" : "Antony Jennison's Massage House",
                              "opening_hours" : {
                                "open_now" : true
                              },
                              "photos" : [
                                {
                                  "height" : 242,
                                  "html_attributions" : [],
                                  "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                  "width" : 200
                                }
                              ],
                              "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                              "scope" : "GOOGLE",
                              "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                              "types" : [ "travel_agency","establishment" ],
                              "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                            },
                            {
                              "geometry" : {
                                "location" : {
                                  "lat" : -33.867591,
                                  "lng" : 151.201196
                                }
                              },
                              "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                              "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                              "name" : "Ben's Wax Figurine Shop",
                              "opening_hours" : {
                                "open_now" : true
                              },
                              "photos" : [
                                {
                                  "height" : 242,
                                  "html_attributions" : [],
                                  "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                  "width" : 200
                                }
                              ],
                              "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                              "scope" : "GOOGLE",
                              "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                              "types" : [ "travel_agency","establishment" ],
                              "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                            },
                            {
                              "geometry" : {
                                "location" : {
                                  "lat" : -33.867591,
                                  "lng" : 151.201196
                                }
                              },
                              "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
                              "id" : "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
                              "name" : "A literal ton of string cheese",
                              "opening_hours" : {
                                "open_now" : true
                              },
                              "photos" : [
                                {
                                  "height" : 242,
                                  "html_attributions" : [],
                                  "photo_reference" : "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                                  "width" : 200
                                }
                              ],
                              "place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
                              "scope" : "GOOGLE",
                              "reference" : "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
                              "types" : [ "travel_agency","establishment" ],
                              "vicinity" : "32 The Promenade, King Street Wharf 5, Sydney"
                            }

                            ],

            // variables
                    SP: "",
                    numbers: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,75,80,85,90,95,100],
                    types: ["Active","City","Something New","Vintage"],
                    selectedType: ""
                 }
        },
        methods:{
            changer: function(){

              for(let i=0; i<this.myMessage.length; i++){

              this.n =1;
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
                if (place.types.includes("restaurant") || place.types.includes("cafe")) {
                  this.Mealqueue.push(place);
                  place["showed"] = "false";

                }
                else {
                  this.Placequeue.push(place);
                  place["showed"] = "false";
                }
              }
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
              this.Randomqueue=this.shuffle(array);
              },
              queueFunctions: function(array){
              shuffling(array)
              sorter;
              this.initial;
              }
        }

    }
</script>

<style scoped>
  .everythingLeft {
    text-align: left;
  }
  .everythingRight{
    text-align: right;
  }
  .center {
    text-align: center;
  }
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: firebrick;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  nav{
    background: firebrick;
    padding: 14px 0;
    margin-bottom: 40px;
  }
  h3, button{
      float: left;
      margin: 0;
  }

</style>
