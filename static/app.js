/*
* Copyright (c) 2011 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy of
* the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/
var serverPath = '//vthapp.appspot.com/';
var rootElements = null;    
// The functions triggered by the buttons on the Hangout App



function inputClick() {



  console.log('input  clicked.');

  /*ar value = 0;
  var count = gapi.hangout.data.getState()['numSerch'];
  if (count) {
    value = parseInt(count);
  }
*/

  var in1 = document.getElementById('input1').value;
  var in2 = document.getElementById('input2').value;
  var in3 = document.getElementById('input3').value;
  var in4 = document.getElementById('input4').value;

var yours = ""+in1+in2+in3+in4;

  

  var res = verif(yours);

  //console.log('you have entred ' +  yours +' but its ' + value);
  
 // console.log('votre avancement est de ' + gapi.hangout.data.getState()[partId] + '%'  ); 

 

var myId = getUserHangoutId();
var person = gapi.hangout.getParticipantById(myId.toString()).person;
name = person.displayName;
img= person.image.url;
console.log(name);

//document.getElementById('user1').innerHTML=document.getElementById('user0').innerHTML;

//document.getElementById('user0').innerHTML='<div class="thumb user" style="background-image: url('+img +');"><span>'+name +'</span></div>';


//$('#timeline').prepend('<li class="event"><input type="radio" name="tl-group"/><label></label><div class="thumb user" style="background-image: url('+img +');"><span>'+name +'</span></div><div class="content-perspective"> <div class="content"><div class="content-inner"> <h3> a trouvé '+ t.toString() +' taureau(x) et '+ v.toString() +' vache(s)</h3></div></div></div></li>');
   
//document.getElementById('timeline').innerHTML= document.getElementById('timeline').innerHTML;
//console.log('appending hahaha');


gapi.hangout.data.submitDelta({

  'idline':myId.toString(),
  't':res[0]+"",
  'v':res[1]+""

});
console.log('envoie de ligne ');

} 


  function getUserHangoutId() {
    return gapi.hangout.getParticipantId();
  }



function updateStateUi(state) {
  console.log('got it ');
var myId = state['idline'];
console.log('get it ');
var person = gapi.hangout.getParticipantById(myId.toString()).person;
name = person.displayName;
img= person.image.url;
var t =state['t'];
var v =state['v'];

$('#timeline').prepend('<li class="event"><input type="radio" name="tl-group"/><label></label><div class="thumb user" style="background-image: url('+img +');"><span>'+name +'</span></div><div class="content-perspective"> <div class="content"><div class="content-inner"> <h3> a trouvé '+ t.toString() +' taureau(x) et '+ v.toString() +' vache(s)</h3></div></div></div></li>');
   

}


// UI NOT READY FUNCTION
function notReadyUI(participants) {
  console.log('waiting for others');
 // rootElements = document.getElementById('root').innerHTML;
 // rootElements.innerHTML="<p>waiting ya m3alem</p>";
  //var participantsListElement = document.getElementById('participants');
  //setText(participantsListElement, 'waiting for others');
}


function updateParticipantsUi(participants) {
  console.log(' more than 2 connected');
 /* console.log('Participants count: ' + participants.length);
  var participantsListElement = document.getElementById('participants');
  setText(participantsListElement, participants.length.toString());
  */
 //document.getElementById('root').innerHTML= rootElements.innerHTML;

}

// A function to be run at app initialization time which registers our callbacks
function init() {
  console.log('Init app.');
  var apiReady = function(eventObj) {
    if (eventObj.isApiReady) {


      console.log('API is ready');

      //initialisation 
      vacheTaureau_NouvellePartie(1000, 9999);
     // var searchedNum = 1111
     // gapi.hangout.data.submitDelta( {'numSerch': searchedNum+'',} );
      
      

      gapi.hangout.data.onStateChanged.add(function(eventObj) {
        updateStateUi(eventObj.state);

      });
      gapi.hangout.onParticipantsChanged.add(function(eventObj) {





      // gapi.hangout.data.submitDelta( {partId: 0} );
      console.log('dra chkoun d5al wala 5raj ');



      if(eventObj.participants.length<2){
        notReadyUI(eventObj.participants);
    }
      else{
        updateParticipantsUi(eventObj.participants);
      }
    });

     // updateStateUi(gapi.hangout.data.getState());
      updateParticipantsUi(gapi.hangout.getParticipants());

      gapi.hangout.onApiReady.remove(apiReady);
    }
  };

  // This application is pretty simple, but use this special api ready state
  // event if you would like to any more complex app setup.
  gapi.hangout.onApiReady.add(apiReady);
}

gadgets.util.registerOnLoadHandler(init);

