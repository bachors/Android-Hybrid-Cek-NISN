// Init App
var myApp = new Framework7({
    modalTitle: 'Cek NISN',
    // Enable Material theme
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});

// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.hideIndicator();
});

// Callbacks for specific pages when it initialized
/* ===== ibacor Page events  ===== */
myApp.onPageInit('ibacor', function (page) {
    $$('#cari-nisn').on('click', function () {
		$$.ajax({
               url: 'http://ibacor.com/api/data-siswa?nisn='+$$('#nisn').val(),
               dataType: 'json',
               success: function (data) {
					if(data.status=='error'){
						myApp.alert(data.message);
					}else{
						var anu = '';
						$$.each(data.siswa, function(k, v) {
							anu += '<ul>';
							anu += '<li>';
							anu += '  <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">NISN</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.nisn + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '<li>';
							anu += ' <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">Nama</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.nama + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '<li>';
							anu += '  <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">Jenis Kelamin</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.jenis_kelamin + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '<li>';
							anu += ' <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">Tempat Lahir</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.tempat_lahir + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '<li>';
							anu += '  <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">Tanggal Lahir</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.tanggal_lahir + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '</ul>';
						});
						$$('#siswa').html(anu);
						myApp.popup('.popup');
					}
               }
           });
    });
    $$('#cari-nama').on('click', function () {
		$$.ajax({
               url: 'http://ibacor.com/api/data-siswa?nama='+$$('#nama').val()+'&tempat='+$$('#tempat').val()+'&lahir='+$$('#lahir').val(),
               dataType: 'json',
               success: function (data) {
					if(data.status=='error'){
						myApp.alert(data.message);
					}else{
						var anu = '';
						$$.each(data.siswa, function(k, v) {
							anu += '<ul>';
							anu += '<li>';
							anu += '  <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">NISN</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.nisn + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '<li>';
							anu += ' <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">Nama</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.nama + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '<li>';
							anu += '  <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">Jenis Kelamin</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.jenis_kelamin + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '<li>';
							anu += ' <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">Tempat Lahir</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.tempat_lahir + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '<li>';
							anu += '  <div class="item-content">';
							anu += '	<div class="item-inner">';
							anu += '	  <div class="item-title label">Tanggal Lahir</div>';
							anu += '	  <div class="item-input">';
							anu += '		<input type="text" value="' + v.tanggal_lahir + '" disabled/>';
							anu += '	  </div>';
							anu += '	</div>';
							anu += '  </div>';
							anu += '</li>';
							anu += '</ul>';
						});
						$$('#siswa').html(anu);
						myApp.popup('.popup');
					}
               }
           });
    });
    var calendarDefault = myApp.calendar({
        input: '.ks-calendar-default',
    });
});

/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-left').on('close', function () {
    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});
