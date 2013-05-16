var app = {
    initialize: function() {
        console.log('initialize');
        this.log('Ready');

        this.pictureSource = isMobile ? navigator.camera.PictureSourceType : null;
        this.destinationType = isMobile ? navigator.camera.DestinationType : null;
    },

    log: function(mess) {
        $('h1').html(mess);
    },

    // Called when a photo is successfully retrieved
    onPhotoDataSuccess: function(imageData) {
        app.log('onPhotoDataSuccess');
        var $img = $('<img>', {id: 'photo'});

        $img.attr('src', "data:image/jpeg;base64," + imageData);

        $('#data').html($img);
    },

    // Called when a photo is successfully retrieved
    onPhotoURISuccess: function(imageURI) {
        app.log('onPhotoURISuccess');
        var $img = $('<img>', {id: 'photo'});

        $img.attr('src', imageURI);

        $('#data').html($img);
    },

    // A button will call this function
    capturePhoto: function() {
        this.log('capturePhoto DATA_URL');
        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
            quality: 50,
            correctOrientation: true,
            destinationType: this.destinationType.DATA_URL
        });
    },

    capturePhoto2: function() {
        this.log('capturePhoto FILE_URL');
        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, {
            quality: 50,
            correctOrientation: true,
            destinationType: this.destinationType.FILE_URL
        });
    },

    // A button will call this function
    capturePhotoEdit: function() {
        this.log('capturePhotoEdit');
        // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
        navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
            quality: 20,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.destinationType.DATA_URL
        });
    },

    // A button will call this function
    getPhotoLibrary: function() {
        this.log('getPhotoLibrary');
        // Retrieve image file location from specified source
        navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, {
            quality: 50,
            correctOrientation: true,
            destinationType: this.destinationType.FILE_URI,
            sourceType: this.pictureSource.PHOTOLIBRARY
        });
    },

    // A button will call this function
    getPhotoAlbum: function() {
        this.log('getPhotoAlbum');
        // Retrieve image file location from specified source
        navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
            quality: 50,
            correctOrientation: true,
            destinationType: this.destinationType.DATA_URL,
            sourceType: this.pictureSource.SAVEDPHOTOALBUM
        });
    },

    // Called if something bad happens.
    onFail: function(message) {
        setTimeout(function() {
            alert('Failed because: ' + message);
        }, 0);
    }
};
