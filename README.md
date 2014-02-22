picbookJs
===

A simple Javascript library to display album photos from a Facebook Page.

## Quick History

Initially this library was made to easily "embed" photos from a Facebook page to our church's [website](http://hillsong.co.uk). Also this would be managed by people with basic understanding of HTML, this is why I tried to keep it simple.

## Installation

The first version was poorly designed and I decided to re-factory the code. I don't plan do it again, however I do have plans to add new features that may break the previous code. Before updating, please make sure to check the [CHANGELOG](https://github.com/henriquea/picbookjs/blob/master/CHANGELOG.md) for details.

### Download

Download the minifed version.

### Bower

`bower install picbookjs`

## Getting Started

### Basic usage

Include the `picbook.min.js` before the `</body>` tag. Then initialise the library:

```html

<div class="picbook"></div>
<script type="text/javascript" src="picbook.min.js"></script>
<script type="text/javascript">
  (function($)){
    var picbook = new picbookJs({
      albumId: '10150167782373951',
      htmlElement: document.querySelector('.picbook')
    });

  })(jQuery);
</script>

```

### Configuration

The only required parameter is the `albumId`, the rest are optional.

```javascript
var options = {
  albumId: '10150167782373951',
  limit: 10,
  albumLoaded: function() { /* do something */ },
  photosLoaded: function() { /* do something else */ }
};
var picbook = new picbookJs(options);
```

Those are the options avaliable.

| Parameter         | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| **albumId**       | The Facebook album ID.                                                 |
| **albumLoaded**   | Provide a callback as soon the album is loaded.                        |
| **photosLoaded**  | Callback a function when the photos are loaded.                        |
| **limit**         | Number of photos to be loaded. The maximum allower by Facebook is 100. |

## Questions

### Where do I get the album ID?

Simply go to an album page and copy the _ID_ from the address bar address _?set=a.{ID}_:

![Image](http://f.cl.ly/items/2s0L3f430q2l1I11101K/fb-album-id.gif)

### How about retrieve an album that belongs to a user?

Not possible. A `user_photo` [permission](https://developers.facebook.com/docs/reference/login/#permissions)  is required which means you would have to create a Facebook app and implement the Facebook Login.

### How about pagination?

This is in my _TODO_ list. For now you can set a `limit` to 100 (maximum allowed by Facebook).

## Contributing

Please [open issues](https://github.com/henriquea/picbookjs/issues) for make questions or suggest improvements. You're very welcome.

## License

The MIT License (MIT)

Copyright © 2014 [Henrique Alves](https://github.com/henriquea)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.