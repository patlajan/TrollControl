 $( function() {
    // the widget definition, where "custom" is the namespace,
    // "colorize" the widget name
    $.widget( "useless.singleClickBtn", {
      // default options
      options: {
        click: null
      },
 
      // The constructor
      _create: function() {
        this.element
          // add a class for theming
          .addClass( "useless-singleClickBtn" );
 
        this.btn = $( "<button>", {
          text: "Click me once",
          "class": "useless-singleClickBtn-btn"
        })
        .appendTo( this.element )
        .button();
 
        this._on( this.btn, {
          // _on won't call random when widget is disabled
          click: "handleClick"
        });
        this._refresh();
      },
 
      // Called when created, and later when changing options
      _refresh: function() {
        this.element.css( "background-color", "rgb(" +
          this.options.red +"," +
          this.options.green + "," +
          this.options.blue + ")"
        );
 
        // Trigger a callback/event
        this._trigger( "change" );
      },
 
      handleClick: function( event ) {
        $(event.target).prop('disabled', true)
        // Trigger an event
        this._trigger( "click", event )
      },
 
      // Events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {
        // remove generated elements
        this.btn.remove();
 
        this.element
          .removeClass( "useless-singleClickBtn" )
          .enableSelection()
          .css( "background-color", "transparent" );
      },
 
      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },
 
      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        this._super( key, value );
      }
    });
 
    // Initialize with default options
    $( "#singleClickBtnContainer" ).singleClickBtn();
    $( "#singleClickBtnContainer" ).on("click", function() { console.log("singleClickBtn clicked!"); });

  } );