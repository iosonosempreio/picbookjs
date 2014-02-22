picbookJs
-------

A simple Javascript library to display album photos from a Facebook Page.

## Why?

The library was made because we wanted to easily "embed" photos from a Facebook page to our church's [website](http://hillsong.co.uk). Also this would be managed by people with basic understanding of HTML, this is why I tried to keep it simple and without dependencies.

## Installation

- [Download](https://github.com/henriquea/picbookjs/archive/master.zip) ZIP

## Getting Started

This is the simple way to get the ball rolling.

### Basic usage

Include the `picbook.js` before the `</body>` tag. Then initialise the library:

```html

<div class="picbook"></div>

<script type="text/javascript" src="picbook.js"></script>

<script type="text/javascript">
  (function($)){
    var picbook = new picbookJs({
      albumId: '10150167782373951'
    });
  })(jQuery);
</script>

```

### Options

Those are the options avaliable when you initialise the library:

| Parameter         | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| _albumId_         | The Facebook album ID (required)                                       |
| _albumLoaded_     | Provide a callback as soon the album is loaded.                        |
| _photosLoaded_    | Callback a function when the photos are loaded.                        |
| _limit_           | Number of photos to be loaded. The maximum allower by Facebook is 100. |

Example:

```javascript

var options = {
  albumId: '10150167782373951',
  limit: 10,
  albumLoaded: function() { /* do something */ },
  photosLoaded: function() { /* do something else */ }
};

var picbook = new picbookJs(options);

```

## Questions

### Where do I get the album ID?

Go to an album page and copy the _ID_ from the address bar URL:

![Image](http://f.cl.ly/items/2s0L3f430q2l1I11101K/fb-album-id.gif)

### How about retrieve an album that belongs to a user?

Not possible. The `user_photo` [permission](https://developers.facebook.com/docs/reference/login/#permissions) is required, which means you would have to create a Facebook app and implement the Facebook Login.

### How about pagination?

This is in my _TODO_ list. For now you can set a `limit` to 100 (maximum allowed by Facebook).

## Contributing

You're more than welcome to [open an issue](https://github.com/henriquea/picbookjs/issues), make questions or suggest improvements.

## License

The MIT License (MIT)

Copyright © 2014 [Henrique Alves](https://github.com/henriquea)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.