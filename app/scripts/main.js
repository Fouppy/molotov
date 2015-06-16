'use strict';

// Detect CSS mask support and hack it into Modernizr
if ( document.body.style[ '-webkit-mask-repeat' ] !== undefined ) {
  Modernizr.cssmasks = true;
  $('html').addClass('cssmasks');
} else {
  Modernizr.cssmasks = false;
  $('html').addClass('no-cssmasks');
}