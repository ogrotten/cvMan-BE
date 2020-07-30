exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('user').del()
		.then(function () {

			// data generated by https://mockaroo.com/

			return knex('user').insert(
				[{
					"id": 1,
					"username": "dace0",
					"email": "dace0@so-net.ne.jp",
					"fullname": "Darnall Ace",
					"addr_street": "2150 Continental Circle",
					"addr_city": "Albuquerque",
					"addr_state": "NM",
					"addr_zip": "01911",
					"social_1": "https://technorati.com/tortor/duis/mattis.json",
					"social_2": "https://booking.com/eu/interdum/eu/tincidunt/in/leo/maecenas.js",
					"social_3": "https://alibaba.com/at/dolor/quis/odio/consequat/varius.aspx",
					"social_4": "http://i2i.jp/eget/elit/sodales/scelerisque/mauris/sit.js"
				}, {
					"id": 2,
					"username": "ptiner1",
					"email": "ptiner1@nydailynews.com",
					"fullname": "Preston Tiner",
					"addr_street": "05 Sunfield Road",
					"addr_city": "Knoxville",
					"addr_state": "TN",
					"addr_zip": "22677",
					"social_1": "https://upenn.edu/dolor/sit/amet.jsp",
					"social_2": "https://stanford.edu/duis.json",
					"social_3": "https://wordpress.org/vitae.html",
					"social_4": "http://opera.com/elementum/pellentesque/quisque/porta/volutpat.html"
				}, {
					"id": 3,
					"username": "rtreamayne2",
					"email": "rtreamayne2@narod.ru",
					"fullname": "Reamonn Treamayne",
					"addr_street": "54448 Towne Terrace",
					"addr_city": "Peoria",
					"addr_state": "IL",
					"addr_zip": "73372",
					"social_1": "https://bigcartel.com/leo/odio.jpg",
					"social_2": "http://utexas.edu/ultrices/mattis/odio/donec/vitae/nisi.html",
					"social_3": "http://nih.gov/lobortis/convallis.json",
					"social_4": "http://plala.or.jp/dolor/quis/odio/consequat/varius/integer.json"
				}, {
					"id": 4,
					"username": "jscones3",
					"email": "jscones3@pen.io",
					"fullname": "Jakie Scones",
					"addr_street": "52 Delladonna Road",
					"addr_city": "Philadelphia",
					"addr_state": "PA",
					"addr_zip": "41508",
					"social_1": "http://dmoz.org/donec.jpg",
					"social_2": "http://wunderground.com/ornare/consequat/lectus/in/est/risus/auctor.json",
					"social_3": "https://dropbox.com/nisi/nam/ultrices/libero/non/mattis/pulvinar.png",
					"social_4": "http://dmoz.org/luctus/et/ultrices/posuere/cubilia/curae/duis.html"
				}, {
					"id": 5,
					"username": "gtorrans4",
					"email": "gtorrans4@gizmodo.com",
					"fullname": "Garreth Torrans",
					"addr_street": "09 Waywood Point",
					"addr_city": "Waltham",
					"addr_state": "MA",
					"addr_zip": "06116",
					"social_1": "https://odnoklassniki.ru/a.jpg",
					"social_2": "http://google.com.au/placerat/praesent/blandit.js",
					"social_3": "http://wsj.com/elit/proin/risus/praesent/lectus/vestibulum.xml",
					"social_4": "http://goo.gl/in/est/risus.jpg"
				}, {
					"id": 6,
					"username": "hpagram5",
					"email": "hpagram5@webmd.com",
					"fullname": "Holly Pagram",
					"addr_street": "5 Thackeray Trail",
					"addr_city": "Garden Grove",
					"addr_state": "CA",
					"addr_zip": "41322",
					"social_1": "http://smh.com.au/massa/quis/augue/luctus.jpg",
					"social_2": "https://51.la/eu/mi/nulla/ac/enim/in.js",
					"social_3": "https://shop-pro.jp/dolor.jpg",
					"social_4": "https://hp.com/dapibus/dolor/vel/est/donec/odio/justo.jpg"
				}, {
					"id": 7,
					"username": "ayerrill6",
					"email": "ayerrill6@ustream.tv",
					"fullname": "Adel Yerrill",
					"addr_street": "4 Barnett Place",
					"addr_city": "Dallas",
					"addr_state": "TX",
					"addr_zip": "36014",
					"social_1": "http://ocn.ne.jp/blandit/non/interdum/in/ante/vestibulum.jsp",
					"social_2": "http://themeforest.net/congue/eget/semper/rutrum/nulla/nunc/purus.js",
					"social_3": "https://posterous.com/ultrices/vel/augue/vestibulum/ante/ipsum/primis.js",
					"social_4": "http://examiner.com/fusce/lacus/purus/aliquet.xml"
				}, {
					"id": 8,
					"username": "fgladdis7",
					"email": "fgladdis7@livejournal.com",
					"fullname": "Fiona Gladdis",
					"addr_street": "78810 Bellgrove Place",
					"addr_city": "Warren",
					"addr_state": "MI",
					"addr_zip": "17676",
					"social_1": "http://mapquest.com/nullam/porttitor/lacus/at/turpis/donec.jsp",
					"social_2": "http://webs.com/lacinia/sapien/quis/libero/nullam/sit.png",
					"social_3": "https://amazon.co.jp/nibh/fusce/lacus/purus/aliquet/at.xml",
					"social_4": "http://squarespace.com/eget/rutrum/at/lorem/integer/tincidunt.html"
				}, {
					"id": 9,
					"username": "odrohan8",
					"email": "odrohan8@hhs.gov",
					"fullname": "Olag Drohan",
					"addr_street": "3939 Summit Road",
					"addr_city": "Tampa",
					"addr_state": "FL",
					"addr_zip": "59148",
					"social_1": "http://reverbnation.com/libero/non/mattis/pulvinar/nulla/pede.js",
					"social_2": "https://diigo.com/sit/amet/turpis/elementum/ligula/vehicula/consequat.json",
					"social_3": "https://bbb.org/consectetuer/adipiscing/elit/proin.js",
					"social_4": "http://phoca.cz/mauris/vulputate/elementum/nullam/varius.png"
				}, {
					"id": 10,
					"username": "kflewett9",
					"email": "kflewett9@indiegogo.com",
					"fullname": "Kaine Flewett",
					"addr_street": "82 Prairie Rose Park",
					"addr_city": "Chicago",
					"addr_state": "IL",
					"addr_zip": "31645",
					"social_1": "http://economist.com/quis/lectus/suspendisse.xml",
					"social_2": "http://xrea.com/in/est.html",
					"social_3": "http://comcast.net/suspendisse.jpg",
					"social_4": "http://devhub.com/non/mauris/morbi/non/lectus.jpg"
				}]);
		});
};