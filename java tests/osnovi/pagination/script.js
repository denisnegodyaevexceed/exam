  let dataContainer = $('dataContainer')
  $('#demo').pagination({
      dataSource: 'https://swapi.dev/api/people/?page',
      locator: 'results',
      totalNumber: 120,
      pageSize: 20,
      ajax: {
          beforeSend: function() {
              dataContainer.prev().html('Loading data from flickr.com ...');
          }
      },
      callback: function(data, pagination) {
          // template method of yourself
          window.console && console.log(22, data, pagination);

          var html = "< /ul >";
          $.each(data, function(index, item) {
              html += '<li>' + item.title + '</li>';
          });

          html += '</ul>';

          dataContainer.prev().html(html);
          //   dataContainer.html(html);
      }
  })