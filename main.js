 $(document).ready(function() {
    $.getJSON("./data.json", function(data) {
        var topSpotData = '';
        $.each(data, function(key, value) {
            topSpotData += '<tr>';
            topSpotData += '<td>' + value.name + '</td>';
            topSpotData += '<td>' + value.description + '</td>';
            topSpotData += "<td><a target='_blank' href='https://www.google.com/maps?q=" + value.location + "' >Link</a></td>";
            topSpotData += '</tr>';
        });
        $('#myTableHeader').append(topSpotData);
    });
 });

