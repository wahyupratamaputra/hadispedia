$( "#saran-button" ).click(function() {
  $( "#saran" ).slideToggle();
});

$( "#linimasa" ).hide();

$(window).bind('mousewheel DOMMouseScroll', function(event){
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    console.log("up");
    $( "#list-tokoh" ).slideDown();
    $( "#blankspace" ).slideDown();
    $( "#linimasa" ).slideUp();
  }
  else {
    $( "#list-tokoh" ).slideUp();
    $( "#blankspace" ).slideUp();
    $( "#linimasa" ).show();
    $( "#linimasa" ).slideDown();
  }
});

var ts;
$(document).bind('touchstart', function (e){
   ts = e.originalEvent.touches[0].clientY;
});

$(document).bind('touchend', function (e){
   var te = e.originalEvent.changedTouches[0].clientY;
   if(ts > te+5){
    $( "#list-tokoh" ).slideUp();
    $( "#blankspace" ).slideUp();
    $( "#linimasa" ).show();
    $( "#linimasa" ).slideDown();
   }else if(ts < te-5){
    $( "#list-tokoh" ).slideDown();
    $( "#blankspace" ).slideDown();
    $( "#linimasa" ).slideUp();
   }
});

$("#form-search").keyup(function(event) {
  if (event.keyCode === 13) {
    searchHadis()
  }
});

const searchHadis = ()=>{
  if (!$('#form-search').val()) return

  let formValue = $('#form-search').val();
  window.location.href = `./list-hadis.html?search=${formValue}`;
}

const getHadisData = ()=>{
  let searchParams = new URLSearchParams(window.location.search)
  let param = searchParams.get('search')
  $('#form-search').attr("placeholder", param);
  if(!param) return

    $.ajax({
      type:"GET",
      dataType: 'json',
      url:`https://api-tes.nedinasek.com/stag/hadis/api/v1/hadis?is_elastic=true&dir=desc&search=${param}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        "key": "ef55b1a7-391c-41ec-8e3e-40f3bbfcee80"
      },
      success:function(response)
      {
        response.data.forEach(data => {
      
          $( "#list-data-search" ).append( `
          <div class="col-md-12 position-relative my-3">
            <img src="img/Green-saler.png" class="saler" alt="">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-5">
                    <div class="line-height-2">${data.kitab.name} no. ${data.number}</div>
                    <!-- <div class="line-height-2">Derajat : <strong>Hasan</strong></div> -->
                  </div>
                  <div class="col-md-7">
                    <div class="line-height-2 font-arabic">
                      ${data.arabic.substring(0, 300) + "..."}
                    </div>
                  </div>
      
                  <div class="col-md-12 mt-4">
                    ${data.indonesian.substring(0, 250) + "..."}
                  </div>
      
                  <div class="col-md-12 text-right">
                    <div class="btn-selengkapnya" onclick="detailHadis('${data.id}')">Selengkapnya | <img src="img/selengkapnya.png" alt="selengkapnya"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ` );
          });
      }
   });

}


const detailHadis = (id)=>{
  console.log(id);
  window.location.href = `./detail-hadis.html?id=${id}`;
}

const getDetailHadisData = ()=>{
  let searchParams = new URLSearchParams(window.location.search)
  let param = searchParams.get('id')

  if(!param) return

    $.ajax({
      type:"GET",
      dataType: 'json',
      url:`https://api-tes.nedinasek.com/stag/hadis/api/v1/hadis/${param}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        "key": "ef55b1a7-391c-41ec-8e3e-40f3bbfcee80"
      },
      success:function(data)
      {
        $( "#detail-hadis" ).append( `
        <div class="col-md-12 position-relative my-3">
          <img src="img/Green-saler.png" class="saler" alt="">
          <div class="card">
              <div class="card-body">
              <div class="row">
                  <div class="col-md-5">
                  <div class="line-height-2">${data.data.kitab.name} no. ${data.data.number}</div>
                  <!--<div class="line-height-2">Derajat : <strong>Hasanzzzz</strong></div>
                  <div class="line-height-2">Sumber : Sunan Ahmad jilid 12zzzzz</div> -->
                  </div>
                  <div class="col-md-7">
                  <div class="line-height-2 font-arabic">
                      ${data.data.arabic}
                  </div>
                  </div>
    
                  <div class="col-md-12 mt-3">
                    ${data.data.indonesian}
                  </div>
    
                  <div class="col-md-12 text-right">
                  Laporkan Hadis | Suka | <img src="img/selengkapnya.png" alt="selengkapnya">
                  </div>
              </div>
              </div>
          </div>
          </div>
        `);
      }
   });
}


$( document ).ready(function() {
  getHadisData()
  getDetailHadisData()
});