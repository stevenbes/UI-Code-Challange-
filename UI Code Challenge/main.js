$.getJSON("EmployeeData.json", function(data){
  $.each(data.employees, function(i,employee){
    content = '<div class='+'name'+'>' + employee.name +'</div>';
    content += '<br/>';
    content += '<br/>';
    content += '<div class='+'popularity'+'>' + employee.popularity + '</div>';
    content += '<img class='+'image'+' src="' + employee.image + '"/>';
    content += '<div class='+'biography'+'>' +'Biography'+ '<br>' + employee.biography + '</div>';
    content += '<div class='+'colleagues'+'>' +'Colleagues'+ '<br>' + employee.colleagues + '</div>';
    content += '<br/>';
    content += '<br/>';
    $(content).appendTo("#employees");
  });
});

$('#vitoSlider').on('change', function () {
    var v = $(this).val();
    $('#vitoName').css('font-size', v + 'px')
    $('#vitoPop').html(v);
});
$('#carmeliaSlider').on('change', function () {
    var v = $(this).val();
    $('#carmeliaName').css('font-size', v + 'px')
    $('#carmeliaPop').html(v);
});
$('#carlSlider').on('change', function () {
    var v = $(this).val();
    $('#carlName').css('font-size', v + 'px')
    $('#carlPop').html(v);
});
$('#luciSlider').on('change', function () {
    var v = $(this).val();
    $('#luciName').css('font-size', v + 'px')
    $('#luciPop').html(v);
});
