function initializeTable() {
    $("#example1").dataTable({
        "aaData": [
            ["Sitepoint", "https://www.sitepoint.com", "Blog", "2013-10-11 10:30:00"],
            ["Flippa", "http://flippa.com", "Marketplace", "null"],
            ["99designs", "http://99designs.com", "Marketplace", "null"],
            ["Learnable", "http://learnable.com", "Online courses", "null"],
            ["Rubysource", "http://rubysource.com", "Blog", "2013-01-10 12:00:00"],
            ["Sitepoint", "https://www.sitepoint.com", "Blog", "2013-10-11 10:30:00"],
            ["Flippa", "http://flippa.com", "Marketplace", "null"],
            ["99designs", "http://99designs.com", "Marketplace", "null"],
            ["Learnable", "http://learnable.com", "Online courses", "null"],
            ["Rubysource", "http://rubysource.com", "Blog", "2013-01-10 12:00:00"],
            ["Sitepoint", "https://www.sitepoint.com", "Blog", "2013-10-11 10:30:00"],
            ["Flippa", "http://flippa.com", "Marketplace", "null"],
            ["99designs", "http://99designs.com", "Marketplace", "null"],
            ["Learnable", "http://learnable.com", "Online courses", "null"],
            ["Rubysource", "http://rubysource.com", "Blog", "2013-01-10 12:00:00"]
        ],
        "aoColumnDefs": [{
            "sTitle": "Site name"
            , "aTargets": ["site_name"]
        }, {
            "aTargets": [1]
            , "bSortable": false
            , "mRender": function (url, type, full) {
                return '<a href="' + url + '">' + url + '</a>';
            }
        }, {
            "aTargets": [3]
            , "sType": "date"
            , "mRender": function (date, type, full) {
                return (full[2] == "Blog")
                    ? new Date(date).toDateString()
                    : "N/A";
            }
        }],
        "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
        "pageLength": 5,
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
        // "dom":"iptlf"
        // "lengthChange": false

    });
    $('#example2').dataTable({
        "data": [
            {
                "name": "Tiger Nixon",
                "position": "System Architect",
                "salary": "$3,120",
                "start_date": moment("2020/04/25").format('DD-MM-YYYY'),
                "office": "Edinburgh",
                "extn": "5421"
            },
            {
                "name": "Garrett",
                "position": "Directoring",
                "salary": "10900",
                "start_date": moment("2015/08/25").format('DD-MM-YYYY'),
                "office": "Edinburgh",
                "extn": "8422"
            },
            {
                "name": "Garrett Winters",
                "position": "Director",
                "salary": "5300",
                "start_date": moment("2011/07/29").format('DD-MM-YYYY'),
                "office": "Edinburgh",
                "extn": "8422"
            },
            {
                "name": "Garrett Winters",
                "position": "Director",
                "salary": "5300",
                "start_date": moment("2011/07/25").format('DD-MM-YYYY'),
                "office": "Edinburgh",
                "extn": "8422"
            },
            {
                "name": "Garrett Winters",
                "position": "Director",
                "salary": "5300",
                "start_date": moment("2011/08/25").format('DD-MM-YYYY'),
                "office": "Edinburgh",
                "extn": "8422"
            },
            {
                "name": "Garrett Winters",
                "position": "Director",
                "salary": "5300",
                "start_date": moment("2011/08/26").format('DD-MM-YYYY'),
                "office": "Edinburgh",
                "extn": "8422"
            },
            {
                "name": "Garrett Winters",
                "position": "Director",
                "salary": "5300",
                "start_date": moment("2010/08/29").format('DD-MM-YYYY'),
                "office": "Edinburgh",
                "extn": "8422"
            },
        ],
        "columns": [
            { data: "name", title: "name" },
            { data: "position", title: "position" },
            { data: "office", title: "office" },
            { data: "extn", title: "extn" },
            { data: "start_date", title: "start_date" },
            { data: "start_date", title: "start_date" },
            { data: "start_date", title: "start_date" },
            { data: "start_date", title: "start_date" },
            { data: "start_date", title: "start_date" },
            { data: "start_date", title: "start_date" },
            { data: "start_date", title: "start_date" },
            { data: "start_date", title: "start_date" },
            { data: "start_date", title: "start_date" },
            { data: "salary", title: "salary" }
        ],
        "scrollY": 140,
        "scrollX": true,
        "scrollCollapse": true,
        "paging": false,
        "fixedColumns": true,
        "fixedHeader": true,
        "info": false,
        "oLanguage": {
            "sSearch": "<span class='filter-text'>Find:</span> _INPUT_" //search
        }
    });

}
$(document).ready(() => {
    // $.fn.dataTable.moment('DD-MM-YYYY'); //sort date
    // $.extend( $.fn.dataTable.defaults, {
    //     searching: false,
    //     ordering:  false
    // } );   //setting defaults
    initializeTable()
})