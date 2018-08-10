$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            console.log("passed 1");
        });
        /*test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL 's have some length.
         */
        it('url-(defined)', function() {
            allFeeds.forEach(function(feedall) {
                expect(feedall.url).toBeDefined(); //to check that url is defined
                expect(feedall.url.length).toBeGreaterThan(0); //to check that url is not empty
                console.log("passed 2");
            });
        });
        it('name-(defined),(not empty)', function() {
            /*test that loops through each feed
             * in the allFeeds object and ensures it has a name defined
             * and that the name is not empty.
             */
            allFeeds.forEach(function(feedall) {
                expect(feedall.name).toBeDefined(); //to check if name is defined or not
                expect(feedall.name.length).not.toBe(0); //to check if name is not empty
                console.log("passed 3");
            });
        });
    });
    /*test suite named "The menu" */
    describe('the menu', function() {
        /*test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu-(visibility is hidden by default)', function() {
            var menu = $('body');
            var menuhidden = menu.hasClass('menu-hidden'); //checling if body has class-menu-hidden
            expect(menuhidden).not.toBe(false); //it should have menu-hidden class present by default
            console.log("passed 4");
        });
        /*test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu-(showms up when icon is clicked)', function() {
            var menuiconclicked = $('.menu-icon-link');
            (menuiconclicked).click(); //on clicking the menu icon
            var body = $('body');
            var bodyclass = body.hasClass('menu-hidden'); //checking if when menu icon is clicked the menu shows up,i.e it doent have the menu-hidden class.
            expect(bodyclass).toBe(false);
            console.log("passed 5");
        });
        it('menu-(hides when menu icon is clicked again)', function() {
            var menuiconclickedagain = $('.menu-icon-link');
            (menuiconclickedagain).click(); //on clicking the menu icon
            var body = $('body');
            var bodyclass = body.hasClass('menu-hidden');
            expect(bodyclass).toBe(true); //checking if when menu icon is clicked the menu hides again,i.e it does have the menu-hidden class.
            console.log("passed 6");
        });
    });
    /*test suite named "Initial Entries" */
    describe('Initial entries', function() {
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done(); //using asynchronous done function to make sure this function is first loaded.
            });
        });
        it('loadfeed function-(is called,there is single entry in .feed container)', function() {
            var loadfeedentry = $('.feed .entry');
            var loadfeedentrylength = loadfeedentry.length; //to check that after the loadefeed function is called,there is some entry in the list i.e it is not empty
            expect(loadfeedentrylength).not.toBe(0);
            console.log("passed 7")
        });
    });
    /*test suite named "New Feed Selection" */
    describe('new feed selection', function() {
        var contentold;
        var contentchanged;
        /*a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.*/
        beforeEach(function(done) {
            loadFeed(0, function() {
                contentold = $(".feed").html(); //storing the content when loadfeed is called once 
                loadFeed(1, function() {
                    contentchanged = $(".feed").html(); //storing the content when loadfeed is called again to see if it changes or not
                    done();
                });
            });
        });
        it('feed-(content changes)', function(done) {
            expect(contentchanged).not.toEqual(contentold); //checking if content changes
            done();
        });
    });
}());