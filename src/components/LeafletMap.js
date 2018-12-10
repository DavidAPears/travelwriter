import React from 'react';
import ReactDOM from 'react-dom'
import L from 'leaflet';

class LeafletMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    setupMap(){
        this.map.setView([30.045916, 31.224291], 3,);
        // NB: Lat/Long hardcoded to Cairo with zoom of '3' as this renders nice centralised map (across full screen web-browser)
    }

    createMap(element){

        var map = L.map(element);

        // Marker1 = Schengen, Luxembourg
        //var marker1 = L.marker([49.4709, 6.3650], {icon: myIcon}).addTo(map);   <- In cases where custom icon is req'd
        var marker1 = L.marker([49.4709, 6.3650]).addTo(map);
        marker1.bindPopup(
        "<b>Schengen, Luxembourg</b><br>'Schengen: A tiny village that changed European travel`<br><b>BBC Travel</b><br><a href=http://www.bbc.com/travel/story/20181202-schengen-a-tiny-village-that-changed-european-travel target=new>click to read").openPopup();

        // Marker2 = Zimbabwe, Africa
        var marker2 = L.marker([-19.0154, 29.1549]).addTo(map);
        marker2.bindPopup(
        "<b>Zimbabwe</b><br>'5 reasons you must visit Zimbabwe... now!`<br><b>Wanderlust</b><br><a href=https://www.wanderlust.co.uk/content/reasons-to-visit-zimbabwe/ target=new>click to read").openPopup();

        // Marker3 = Lithuania
        var marker3 = L.marker([55.1694, 23.8813]).addTo(map);
        marker3.bindPopup(
        "<b>Lithuania</b><br>'5 reasons you must visit Lithuania’s wild west coast`<br><b>Wanderlust</b><br><a href=https://www.wanderlust.co.uk/content/reasons-you-must-visit-west-coast-lithuania/ target=new>click to read").openPopup();

        // Marker4 = Luxembourg
        var marker4 = L.marker([49.8153, 6.1296]).addTo(map);
        marker4.bindPopup(
        "<b>Luxembourg</b><br>'A long weekend in Luxembourg: where to go & what to see`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/long-weekend-in-luxembourg-where-to-go-what-to-see.php target=new>click to read").openPopup();

        // Marker5 = Chernobyl, Ukraine
        var marker5 = L.marker([51.2763, 30.2219]).addTo(map);
        marker5.bindPopup(
        "<b>Chernobyl, Ukraine</b><br>'13 exciting escorted tours for culture vultures in 2018/2019`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/exciting-escorted-tours-for-culture-vultures.php target=new>click to read").openPopup();

        // Marker6 = Antananarivo, Madagascar
        var marker6 = L.marker([-18.8792, 47.5079]).addTo(map);
        marker6.bindPopup(
        "<b>Antananarivo, Madagascar</b><br>'Five reasons to explore Antananarivo`<br><b>Lonely Planet</b><br><a href=https://www.lonelyplanet.com/madagascar/antananarivo/travel-tips-and-articles/five-reasons-to-explore-antananarivo/40625c8c-8a11-5710-a052-1479d2754ac3 target=new>click to read").openPopup();

        // Marker7 = Vienne, France
        var marker7 = L.marker([45.51667, 4.86667]).addTo(map);
        marker7.bindPopup(
        "<b>Vienne, France</b><br>'Why charming Vienne in the Rhône Valley should be your next urban escape`<br><b>Weather2Wed</b><br><a href=https://www.weather2travel.com/blog/introducing-vienne-rhone-valley-france.php target=new>click to read").openPopup();

        // Marker8 = Dubrovnik, Croatia
        var marker8 = L.marker([42.6507, 18.0944]).addTo(map);
        marker8.bindPopup(
        "<b>Dubrovnik, Croatia</b><br>'How and when to do Dubrovnik on a short break`<br><b>British Guild Of Travel Writers</b><br><a href=https://bgtw.org/dubrovnik-short-break/ target=new>click to read").openPopup();

        // Marker9 = Grenoble, France
        var marker9 = L.marker([45.1885, 5.7245]).addTo(map);
        marker9.bindPopup(
        "<b>Grenoble, France</b><br>'11 reasons to visit Grenoble this summer`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/visit-grenoble-for-summer-holidays.php target=new>click to read").openPopup();

        // Marker10 = Beach Article (Cala Tonnarella, Sicily, Italy)
        var marker10 = L.marker([37.575748, 13.218615]).addTo(map);
        marker10.bindPopup(
        "<b>Sicily, Italy</b><br>'8 tips & hacks for your beach holiday`<br><b>Love Exploring</b><br><a href=https://www.loveexploring.com/news/74382/8-tips-hacks-for-your-beach-holiday target=new>click to read").openPopup();

        // Marker11 = Dubrovnik, Croatia
        var marker11 = L.marker([42.654551, 18.077748]).addTo(map);
        marker11.bindPopup(
        "<b>Dubrovnik, Croatia</b><br>'How to spend a long weekend in Dubrovnik, Croatia`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/how-to-spend-a-long-weekend-in-dubrovnik.php target=new>click to read").openPopup();

        // Marker12 = Victoria Falls, Zimbabwe
        var marker12 = L.marker([-17.9243, 25.8572]).addTo(map);
        marker12.bindPopup(
        "<b>Victoria Falls, Zimbabwe</b><br>'How to make the most of Victoria Falls, Zimbabwe`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/how-to-make-the-most-of-victoria-falls-zimbabwe.php target=new>click to read").openPopup();

        // Marker13 = Madagascar
        var marker13 = L.marker([-17.9243, 25.8572]).addTo(map);
        marker13.bindPopup(
        "<b>Madagascar</b><br>'8 reasons why madagascar should be on your radar`<br><b>Rough Guides</b><br><a href=https://www.roughguides.com/article/8-reasons-why-madagascar-should-be-on-your-radar/ target=new>click to read").openPopup();

        // Marker13 = Inverness, Scotland
        var marker13 = L.marker([57.477772, -4.224721]).addTo(map);
        marker13.bindPopup(
        "<b>Inverness, Scotland</b><br>'A taste of the Highlands: things to do in Inverness`<br><b>Love Exploring</b><br><a href=https://www.loveexploring.com/news/72393/things-to-do-in-inverness target=new>click to read").openPopup();

        // Marker14 = Wildlife Article (Bengal, India)
        var marker14 = L.marker([22.978624, 87.747803]).addTo(map);
        marker14.bindPopup(
        "<b>Bengal, India</b><br>'9 of the best wildlife tours for 2018/2019`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/best-wildlife-tours-for-2018.php target=new>click to read").openPopup();

        // Marker15 = Scotland, UK
        var marker15 = L.marker([57.8166634, -8.583331]).addTo(map);
        marker15.bindPopup(
        "<b>Scotland, UK</b><br>'Places to visit in Scotland to avoid the crowds`<br><b>Love Exploring</b><br><a href=https://www.loveexploring.com/news/66175/places-to-visit-in-scotland-to-avoid-the-crowds target=new>click to read").openPopup();

        // Marker16 = Alentejo, Portugal
        var marker16 = L.marker([37.525024, -8.785052]).addTo(map);
        marker16.bindPopup(
        "<b>Alentejo, Portugal</b><br>'Why you need to get to know the Alentejo, Portugal`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/why-you-need-to-get-to-know-the-alentejo-portugal.php target=new>click to read").openPopup();

        // Marker17 = Torre de Palma Wine Hotel, Alentejo, Portugal
        var marker17 = L.marker([38.058289, -8.116430]).addTo(map);
        marker17.bindPopup(
        "<b>Torre de Palma Wine Hotel, Alentejo, Portugal</b><br>'Tried & Tested: Torre de Palma Wine Hotel, Alentejo, Portugal`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/reviews/torre-de-palma-wine-hotel-alentejo-portugal.php target=new>click to read").openPopup();

        // Marker18 = Britain's National Parks
        var marker18 = L.marker([54.279399, -0.877392]).addTo(map);
        marker18.bindPopup(
        "<b>North York Moors National Park</b><br>'6 reasons to get out and explore Britain's national parks`<br><b>Love Exploring</b><br><a href=https://www.loveexploring.com/news/64951/explore-british-national-parks target=new>click to read").openPopup();

        // Marker19 = Edinburgh, Scotland
        var marker19 = L.marker([55.9533, -3.1883]).addTo(map);
        marker19.bindPopup(
        "<b>Edinburgh, Scotland</b><br>'10 reasons why you should visit Edinburgh`<br><b>DK Travel</b><br><a href=https://www.dk.com/uk/category/travel/ target=new>click to read").openPopup();

        // Marker20 = Dubin, Ireland
        var marker20 = L.marker([53.350140,-6.266155]).addTo(map);
        marker20.bindPopup(
        "<b>Dubin, Ireland</b><br>'Dublin highlights: How to spend a weekend in the Irish capital`<br><b>DK Travel</b><br><a href=https://www.weather2travel.com/blog/dublin-highlights-how-to-spend-a-weekend-in-the-irish-capital.php target=new>click to read").openPopup();

        // Marker21 = French Ardennes
        var marker21 = L.marker([49.7625,4.6285]).addTo(map);
        marker21.bindPopup(
        "<b>French Ardennes</b><br>'Discover history, adventure & a little luxury in French Ardennes`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/french-ardennes-discover-history-adventure-and-a-little-luxury.php target=new>click to read").openPopup();

        // Marker22 = Bangkok, Thailand
        var marker22 = L.marker([13.736717,100.523186]).addTo(map);
        marker22.bindPopup(
        "<b>Bangkok, Thailand</b><br>'7 reasons to stopover in Bangkok, Thailand`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/top-reasons-to-stopover-in-bangkok.php target=new>click to read").openPopup();

        // Marker23 = Burma / Myanmar
        var marker23 = L.marker([16.871311, 96.199379]).addTo(map);
        marker23.bindPopup(
        "<b>Burma / Myanmar</b><br>'7 reasons to add Burma to your travel bucket list`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/top-reasons-to-visit-burma.php target=new>click to read").openPopup();

        // Marker24 = Meknes, Morocco
        var marker24 = L.marker([33.89352, -5.54727]).addTo(map);
        marker24.bindPopup(
        "<b>Meknes, Morocco</b><br>'Meknes: the Morrocan city you've never heard of but need to visit`<br><b>Rough Guides</b><br><a href=https://www.roughguides.com/article/meknes-morocco/ target=new>click to read").openPopup();

        // Marker25 = Hong Kong
        var marker25 = L.marker([22.28552, 114.15769]).addTo(map);
        marker25.bindPopup(
        "<b>Hong Kong</b><br>'How to spend 48 hours in Hong Kong`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/48-hours-in-hong-kong-travel-guide.php target=new>click to read").openPopup();

        // Marker26 = Uzbekistan
        var marker26 = L.marker([ 41.311081, 69.240562]).addTo(map);
        marker26.bindPopup(
        "<b>Uzbekistan</b><br>'8 reasons to go to Uzbekistan now`<br><b>Rough Guides</b><br><a href=https://www.roughguides.com/article/8-reasons-to-go-to-uzbekistan-now/ target=new>click to read").openPopup();

        // Marker27 = Hikkaduwa, Sri Lanka
        var marker27 = L.marker([6.139468, 80.106285]).addTo(map);
        marker27.bindPopup(
        "<b>Hikkaduwa, Sri Lanka</b><br>'Easy day trips from Hikkaduwa, Sri Lanka`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/easy-day-trips-from-hikkaduwa-sri-lanka.php target=new>click to read").openPopup();

        // Marker28 = Tenerife
        var marker28 = L.marker([28.291565, -16.629129]).addTo(map);
        marker28.bindPopup(
        "<b>Tenerife</b><br>'7 reasons to leave your lounger in Tenerife`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/7-reasons-to-leave-your-lounger-in-tenerife.php target=new>click to read").openPopup();

        // Marker29 = Mandalay, Myanmar
        var marker29 = L.marker([21.954510, 96.093292]).addTo(map);
        marker29.bindPopup(
        "<b>Mandalay, Myanmar</b><br>'TOP 5: PLACES TO STOP ON THE ROAD TO MANDALAY`<br><b>Destinations Guide</b><br><a href=http://www.countrybycountry.com/features/activities/top-5-places-stop-road-mandalay/ target=new>click to read").openPopup();

        // Marker30 = Yangon, Myanmar
        var marker30 = L.marker([16.855, 96.15]).addTo(map);
        marker30.bindPopup(
        "<b>Yangon, Myanmar</b><br>'The Origins Of The Thingyan Festival, Burma`<br><b>The Culture Trip</b><br><a href=https://theculturetrip.com/asia/myanmar/articles/the-origins-of-the-thingyan-festival-burma/ target=new>click to read").openPopup();

        // Marker31 = Yangon, Myanmar (2nd Article)
        var marker31 = L.marker([16.835, 96.22]).addTo(map);
        marker31.bindPopup(
        "<b>Yangon, Myanmar</b><br>'PERFECT WEEKEND: 48-HOURS IN YANGON, MYANMAR`<br><b>About Time Magazine</b><br><a href=https://www.abouttimemagazine.co.uk/travel/48-hours-in-yangon-myanmar/ target=new>click to read").openPopup();

        // Marker32 = Yangon, Myanmar (3rd Article)
        var marker32 = L.marker([16.9, 96.25]).addTo(map);
        marker31.bindPopup(
        "<b>Yangon, Myanmar</b><br>'PERFECT WEEKEND: 48-HOURS IN YANGON, MYANMAR`<br><b>About Time Magazine</b><br><a href=https://www.abouttimemagazine.co.uk/travel/48-hours-in-yangon-myanmar/ target=new>click to read").openPopup();

        // Marker33 = York, Englad
        var marker33 = L.marker([53.95763, -1.08271]).addTo(map);
        marker33.bindPopup(
        "<b>York, England</b><br>'The Top 10 Museums And Galleries In York`<br><b>The Culture Trip</b><br><a href=https://theculturetrip.com/europe/united-kingdom/england/articles/the-top-10-museums-and-galleries-in-york/ target=new>click to read").openPopup();

        // Marker34 = Algarve, Portugal
        var marker34 = L.marker([37.0180, -7.9308]).addTo(map);
        marker34.bindPopup(
        "<b>Algarve, Portugal</b><br>'Where to go at Easter 2019: Holiday ideas for the best weather`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/holidays/where-to-go-at-easter-best-weather-ideas.php target=new>click to read").openPopup();

        // Marker35 = Teide National Park, Tenerife
        var marker35 = L.marker([28.26916559, -16.636830786]).addTo(map);
        marker35.bindPopup(
        "<b>Teide National Park, Tenerife</b><br>'What You Must Know About Teide National Park, Tenerife`<br><b>The Culture Trip</b><br><a href=https://theculturetrip.com/europe/spain/articles/what-you-must-know-about-teide-national-park-tenerife/ target=new>click to read").openPopup();

        // Marker36 = North Tenerife
        var marker36 = L.marker([28.4845, -16.3434]).addTo(map);
        marker36.bindPopup(
        "<b>North Tenerife</b><br>'PERFECT WEEKEND: 48-HOURS IN NORTH TENERIFE`<br><b>About Time Magazine</b><br><a href=https://www.abouttimemagazine.co.uk/travel/about-time-you-discovered-north-tenerife/ target=new>click to read").openPopup();

        // Marker37 = Brasov, Romania
        var marker37 = L.marker([45.64861, 25.60613]).addTo(map);
        marker37.bindPopup(
        "<b>Brasov, Romania</b><br>'TAKE AN OFF SEASON HIKE IN POIANA BRASOV`<br><b>Kiss From The World</b><br><a href=https://www.kissfromtheworld.com/magazine/blog-posts/travel/romania/poiana-brasov/take-an-off-season-hike-in-poiana-brasov/ target=new>click to read").openPopup();

        // Marker38 = Kuala Lumpur, Malaysia
        var marker38 = L.marker([3.1412, 101.68653]).addTo(map);
        marker38.bindPopup(
        "<b>Kuala Lumpur, Malaysia</b><br>'City guide to Kuala Lumpur, Malaysia`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/city-guide-to-kuala-lumpur-malaysia.php target=new>click to read").openPopup();

        // Marker39 = Sheikh Zayed Grand Mosque, Abu Dhabi
        var marker39 = L.marker([24.4127, 54.4759]).addTo(map);
        marker39.bindPopup(
        "<b>Sheikh Zayed Grand Mosque, Abu Dhabi</b><br>'Discover The Sheikh Zayed Grand Mosque`<br><b>Weather2Travel</b><br><a href=https://kirstensworldofwander.wordpress.com/2014/05/15/discover-the-sheikh-zayed-grand-mosque-abu-dhabi/ target=new>click to read").openPopup();

        // Marker40 = Rome, Italy
        var marker40 = L.marker([41.890251, 12.492373]).addTo(map);
        marker40.bindPopup(
        "<b>Rome, Italy</b><br>'Handpicked Rome: The best of the Eternal City for first timers`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/handpicked-rome-the-best-of-the-eternal-city-for-first-timers.php target=new>click to read").openPopup();

        // Marker40 = West Highland Way, Scotland
        var marker40 = L.marker([56.5141, -4.7661]).addTo(map);
        marker40.bindPopup(
        "<b>West Highland Way, Scotland</b><br>'Walking Back To Happiness`<br><b>The Sunday Post</b><br><a href=https://s3.amazonaws.com/media.muckrack.com/portfolio/items/27793/West_Highland_Way.pdf target=new>click to read").openPopup();

        // Marker40 = Royal Deeside, Scotland
        var marker40 = L.marker([57.0234, -3.2501]).addTo(map);
        marker40.bindPopup(
        "<b>Royal Deeside, Scotland</b><br>'Lovely Royal Deeside really is fit for a king`<br><b>The Sunday Post</b><br><a href=https://s3.amazonaws.com/media.muckrack.com/portfolio/items/27793/Royal_Deeside.pdf target=new>click to read").openPopup();

        // Marker41 = Morcambe, Lancashire
        var marker41 = L.marker([54.06835, -2.86108]).addTo(map);
        marker41.bindPopup(
        "<b>Royal Deeside, Scotland</b><br>'Luxury coaches are a transport of delight`<br><b>The Sunday Post</b><br><a href=https://s3.amazonaws.com/media.muckrack.com/portfolio/items/27793/KH%20Glenton%20Sunday%20Post.pdf target=new>click to read").openPopup();

        // Marker41 = Morcambe, Lancashire
        var marker41 = L.marker([54.06835, -2.86108]).addTo(map);
        marker41.bindPopup(
        "<b>Royal Deeside, Scotland</b><br>'Luxury coaches are a transport of delight`<br><b>The Sunday Post</b><br><a href=https://s3.amazonaws.com/media.muckrack.com/portfolio/items/27793/KH%20Glenton%20Sunday%20Post.pdf target=new>click to read").openPopup();

        // Marker42 = Ananda, Himalayas
        var marker42 = L.marker([30.1578, 78.2898]).addTo(map);
        marker42.bindPopup(
        "<b>Ananda, Himalayas</b><br>'In the spotl;ight: Ananada in the Himalayas`<br><b>Insignia</b><br><a href=https://www.insignia.com/lifestyle-management/magazine/news/in-the-spotlight-ananda-in-the-himalayas/ target=new>click to read").openPopup();

        // Marker43 = St Andrews, Scotland
        var marker43 = L.marker([56.33871, -2.79902]).addTo(map);
        marker43.bindPopup(
        "<b>St Andrews, Scotland</b><br>'Perfect escape to the magical east`<br><b>The Sunday Post</b><br><a href=https://s3.amazonaws.com/media.muckrack.com/portfolio/items/27793/St_Andrews.pdf target=new>click to read").openPopup();

        // Marker44 = Marrakesh, Morocco
        var marker44 = L.marker([31.669746, -7.973328]).addTo(map);
        marker44.bindPopup(
        "<b>Marrakesh, Morocco</b><br>'What to do in Marrakesh in Morocco`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/what-to-do-in-marrakesh-morocco.php target=new>click to read").openPopup();

        // Marker45 = The Whisky Shop, London
        var marker45 = L.marker([51.510067, -0.133869]).addTo(map);
        marker45.bindPopup(
        "<b>The Whisky Shop, London</b><br>'Insignia loves: The Whisky Shop, London`<br><b>Insignia</b><br><a href=http://www.insignia-lb.com/posts/6207 target=new>click to read").openPopup();

        // Marker46 = Sri Lanka
        var marker46 = L.marker([6.4543, 81.5630]).addTo(map);
        marker46.bindPopup(
        "<b>Sri Lanka</b><br>'Sri Lankas Big Five`<br><b> </b><br><a href=https://kirstensworldofwander.wordpress.com/2013/05/29/sri-lankas-big-five/ target=new>click to read").openPopup();

        // Marker47 = John Lancaster, London
        var marker47 = L.marker([51.4872, -0.1245]).addTo(map);
        marker47.bindPopup(
        "<b>John Lancaster, London</b><br>'In the spotlight: designer John Lancaster of JLSA`<br><b>Insignia</b><br><a href=http://www.insignia-lb.com/posts/5231 target=new>click to read").openPopup();

        // Marker48 = East Neuk, Scotland
        var marker48 = L.marker([56.235, -2.77262577]).addTo(map);
        marker48.bindPopup(
        "<b>East Neuk, Scotland</b><br>'Take a look at East Neuk`<br><b>The Sunday Post</b><br><a href=https://s3.amazonaws.com/media.muckrack.com/portfolio/items/KH_East_Neuk_The_Sunday_Post.pdf target=new>click to read").openPopup();

        // Marker49 = School Of Wok, London
        var marker49 = L.marker([51.50666464, -0.125499498]).addTo(map);
        marker49.bindPopup(
        "<b>School Of Wok, London</b><br>'In the spotlight: London’s School of Wok`<br><b>The Sunday Post</b><br><a href=https//www.insignia-lb.com/posts/4232 target=new>click to read").openPopup();

        // Marker50 = Said Ismael and the Catherine Walker, London
        var marker50 = L.marker([51.4851, -0.1749]).addTo(map);
        marker50.bindPopup(
        "<b>Said Ismael and the Catherine Walker, London</b><br>'In the spotlight: Said Ismael and the Catherine Walker & Co atelier`<br><b>Insignia</b><br><a href=http://www.insignia-lb.com/posts/4188 target=new>click to read").openPopup();

        // Marker51 = Sabyasachi, London
        var marker51 = L.marker([51.501476, -0.140634]).addTo(map);
        marker51.bindPopup(
        "<b>Sabyasachi, London</b><br>'In the spotlight: Sabyasachi and the Cinema Suite`<br><b>Insignia</b><br><a href=http://www.insignia-lb.com/posts/2769 target=new>click to read").openPopup();

        // Marker52 = The Spa at Conrad Algarve
        var marker52 = L.marker([37.0877, -8.0299]).addTo(map);
        marker52.bindPopup(
        "<b>The Spa at Conrad Algarve</b><br>'The Top 10 New Spa Treatments`<br><b>Insignia</b><br><a href=http://www.insignia-lb.com/posts/1472 target=new>click to read").openPopup();

        // Marker53 = Karolin Troubetzkoy and Jade Mountain St. Lucia
        var marker53 = L.marker([13.8646, -61.0757]).addTo(map);
        marker53.bindPopup(
        "<b>Karolin Troubetzkoy and Jade Mountain St. Lucia</b><br>'In the spotlight: Karolin Troubetzkoy and Jade Mountain St. Lucia`<br><b>Insignia</b><br><a href=http://www.insignia-lb.com/posts/1957 target=new>click to read").openPopup();

        // Marker54 = Maia, Seychelles
        var marker54 = L.marker([4.6796, 55.4920]).addTo(map);
        marker54.bindPopup(
        "<b>Maia, Seychelles</b><br>'A new collection of seasonal experiences at maia Seychelles`<br><b>Insignia</b><br><a href=http://www.insignia-lb.com/features/a-new-collection-of-seasonal-experiences-at-maia-seychelles/ target=new>click to read").openPopup();

        // Marker55 = Cathay Pacific, Lantau, Hong Kong
        var marker55 = L.marker([22.2665, 113.9418]).addTo(map);
        marker55.bindPopup(
        "<b>Cathay Pacific, Lantau, Hong Kong</b><br>'Cathay Pacific showcases new business class seat`<br><b>Insignia</b><br><a href=http://www.insignia-lb.com/posts/2358 target=new>click to read").openPopup();





        // var popup = L.popup()
        //   .setLatLng([55.9533, -3.1883])
        //   .setContent("Click pins to reveal articles ✏️")
        //   .openOn(map);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        return map;
    }

    componentDidMount(){
        let self = this;
        if (this.props.createMap) {
            this.map = this.props.createMap(ReactDOM.findDOMNode(self));
        } else {
            this.map = this.createMap(ReactDOM.findDOMNode(self));
        }
        this.setupMap();
    }

    render(){

      return(
        <div>
          <div className="leafletmap">
          {/*NB: Map to render here*/}
          </div>
        </div>
      )
    }
  }

export default LeafletMap;
