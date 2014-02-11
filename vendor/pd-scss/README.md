#pd-scss#

A little scss framework.

Compile only that parts to your css-file what you really need!

##Install##
**Bower:** `bower install pd-scss --save-dev`

**Git:** `git clone https://github.com/platdesign/pd-scss`

**Download:** [Zip](https://github.com/platdesign/pd-scss/archive/master.zip)

##Docs##
A little documentation of pd-scss.

###Loader###

- `@include load-all;`
	
	Loads all available modules of pd-scss. (Do you really need all?)
	
- `@include load-reset;`

	Imports a modificated version of normalize.
	
- `@include load-load-font-beautifier;`

	Makes fonts looking nicer. 

- `@include load-breakpoints(400px 600px 800px 960px 1300px);`

	Sets default breakpoints.


- `@include load-grid(1em);`

	Loads a simple and responsive grid-system with grid-spacing of `1em`.

		// Usage in HTML
		<div class="page">
			<div class="row">
				<div class="col-1-3">Hello</div>
				<div class="col-2-3">World</div>
			</div>
		</div>
		


- `@include load-page;`

	A class for wrapping the whole page.


- `@include load-nav;`

	Create nav-classes.


For the next ones have a look at the 'creators'-section.

- `@include load-img;`

- `@include load-hint;`

- `@include load-btn;`

- `@include load-block;`


###Creators###

####hint( name, color )####

	// SCSS
	@include hint(error, red);
	
	// HTML
	<div class="hint-error">An error has occurred</div>

####btn ( name )####

	// SCSS
	@include btn(valid) {
		background-color:green;
	}

	// HTML
	<button class="btn-valid">Send</button>

####block( name, bgColor )####
Set's the font-color to the `best-font-color` (section: functions) of `bgColor`.

	// SCSS
	@include block(header, navy);
	
	// HTML
	<header class="block-header"></header>



###Mixins###

####Vendor-Prefixing####
Only two examples... ;) Works with each css-property which needs vendor-prefixes.

- *@mixin* **prefix**( $key, $value, $prefixes, $prefixless:true )
	
		// Usage
		@include prefix(box-shadow, 0 0 5px 0 rgba(black, .4), webkit moz);
		
		// Result
		-webkit-box-shadow: 0 0 5px 0 rgba(black, .4);
		-moz-box-shadow: 0 0 5px 0 rgba(black, .4);
		box-shadow: 0 0 5px 0 rgba(black, .4);
			
- *@mixin* **animation** ( $name, $duration:300ms, $delay:0, $ease:ease )

		// Usage
		@include animation(myAnimation);
		
		// Result
		-webkit-animation: myAnimation 300ms 0 ease;
		-moz-animation: myAnimation 300ms 0 ease;
		-ms-animation: myAnimation 300ms 0 ease;
		animation: myAnimation 300ms 0 ease;


###Functions###

- *@function* brightness($color)

		// Usage
		$brightnessOfRed: brightness(red);

- *@function* best-font-color($backgroundColor)

	Calculates the most human-readable font-color for given background.

		// Usage
		.myClass {
			$bgColor: green;
			background: $bgColor;
			color: best-font-color($bgColor);
		}



##Contact##

- [mail@platdesign.de](mailto:mail@platdesign.de)
- [platdesign](https://twitter.com/platdesign) on Twitter



