A simple Javascript library to display album photos from a Facebook Page.

## Quick History

Initially this library was made to easily "embed" photos from a Facebook page to our church's [website](http://hillsong.co.uk). Also this would be managed by people with basic understanding of HTML, this is why I tried to keep it simple.

The first version was poorly designed and after six months I decided re-factory the code. I do have plans to add new features such as pagination.

Please, feel free to [open a new issue](https://github.com/henriquea/picbookjs/issues) to make questions or suggest improvements.


## Getting Started

### Installing

- Installing with bower: `bower install picbookjs`
- Manually: [download](#) the minified version

### Basic usage

Include [jQuery](#) and the `picbook.min.js` in your HTML. Then initialise the library:

```html

<div id="picbook"></div>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="picbook.min.js"></script>
<script type="text/javascript">
  (function($)){

    var picbook = new picbookJs({
      albumId: '10150167782373951',
      htmlElement: $('#picbook')
    });

  })(jQuery);
</script>

```

### Configuration

Those are the options avaliable.

```javascript
var options = {
  albumId: '10150167782373951',
  limit: 10,
  albumLoaded: function() { /* do something */ },
  photosLoaded: function() { /* do something else */ }
};
var picbook = new picbookJs(options);
```


| Parameter         | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| **albumId**       | The Facebook album ID.                                                 |
| **albumLoaded**   | Provide a callback as soon the album is loaded.                        |
| **photosLoaded**  | Callback a function when the photos are loaded.                        |
| **limit**         | Number of photos to be loaded. The maximum allower by Facebook is 100. |

## FAQ

#### Where do I get the album ID?

Simply go to an album page and copy the _ID_ from the address bar address _?set=a.{ID}_:

![Image](http://f.cl.ly/items/2s0L3f430q2l1I11101K/fb-album-id.gif)

#### How about retrieve an album that belongs to a user?

Not possible. A `user_photo` [permission](https://developers.facebook.com/docs/reference/login/#permissions)  is required which means you would have to create a Facebook app and implement the Facebook Login.

#### How about pagination?

This is in my _TODO_ list. For now you can set a `limit` to 100 (maximum allowed by Facebook).