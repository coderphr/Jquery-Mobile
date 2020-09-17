$(document).on("pagecreate","#mail_tel",function() {
	$('.btn-number').on('tap',function() {
		$('#show_tel').text($('#show_tel').text()+ $(this).text());
	});
})