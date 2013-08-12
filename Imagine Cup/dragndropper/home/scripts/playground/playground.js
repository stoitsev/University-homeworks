;
(function() {

    // conains all elements placed in the world
    window.world = {};

    // helper method to generate a color from a cycle of colors.
    var curColourIndex = 1,
        maxColourIndex = 24,
        nextColour = function() {
            var R, G, B;
            R = parseInt(128 + Math.sin((curColourIndex * 3 + 0) * 1.3) * 128, 10);
            G = parseInt(128 + Math.sin((curColourIndex * 3 + 1) * 1.3) * 128, 10);
            B = parseInt(128 + Math.sin((curColourIndex * 3 + 2) * 1.3) * 128, 10);
            curColourIndex = curColourIndex + 1;
            if (curColourIndex > maxColourIndex) curColourIndex = 1;
            return "rgb(" + R + "," + G + "," + B + ")";
        };

    window.jsPlumbDemo = {

        init: function() {

            // setup some defaults for jsPlumb.
            jsPlumb.importDefaults({
                Endpoint: ["Dot", {
                    radius: 2
                }],
                HoverPaintStyle: {
                    strokeStyle: "#42a62c",
                    lineWidth: 2
                },
                ConnectionOverlays: [
                    ["Arrow", {
                        location: 1,
                        id: "arrow",
                        length: 14,
                        foldback: 0.8
                    }]
                ]
            });


            // bind a click listener to each connection; the connection is deleted. you could of course
            // just do this: jsPlumb.bind("click", jsPlumb.detach), but I wanted to make it clear what was
            // happening.
            jsPlumb.bind("click", function(c) {
                jsPlumb.detach(c);
            });

            // bind a connection listener. note that the parameter passed to this function contains more than
            // just the new connection - see the documentation for a full list of what is included in 'info'.
            // this listener changes the paint style to some random new color and also sets the connection's internal
            // id as the label overlay's text.
            jsPlumb.bind("connection", function(info) {
                info.connection.setPaintStyle({
                    strokeStyle: nextColour()
                });
            });

        }
    };

    var uniqueId = 0;

    function snapToGrid(item) {
        //grid size
        var grid_x = 10;
        var grid_y = 10;
        //set the grid on the item:
        item.draggable("option", "grid", [grid_x, grid_y]);
        //now the actual re-positioning:
        //get the item's current left and top
        var current_x = item.css('left');
        current_x = parseInt(current_x.split("px").join(""));
        var current_y = item.css('top');
        current_y = parseInt(current_y.split("px").join(""));
        //calculate the new left and top (get the nearest values)
        var new_x = Math.round(current_x / grid_x) * grid_x;
        var new_y = Math.round(current_y / grid_y) * grid_y;
        //assign the new values
        item.css('left', new_x);
        item.css('top', new_y);
    }
    $(".code-box").draggable({
        containment: 'html',
        helper: 'clone',
        revert: 'invalid'
    });
    $("#code-canvas").droppable({
        accept: '.code-box',
        drop: function(event, ui) {
            var elements = $(ui.helper).clone(true).append('<div class="ex"></div><div class="ep"></div>').removeClass('code-box ui-draggable ui-draggable-dragging').addClass('code-box-clone w').attr('id', 'code-box-' + uniqueId).appendTo('#code-canvas');
            var element = elements[0];
            var offset = 100;

            var current_positon = $(element).css('left').slice(0, -2);
            current_positon = current_positon;
            var current_left = parseInt(current_positon, 10);
            var new_left = current_left - offset;
            $(element).css('left', new_left + "px");


            jsPlumb.draggable(jsPlumb.getSelector(".w"), {
                containment: "#code-canvas  "
            });
            $(".ex").click(function() {
                jsPlumb.removeAllEndpoints($(this).parent());
                jsPlumb.detachAllConnections($(this).parent());
                $(this).parent().remove();
            });
            $(".ep").each(function(i, e) {
                var p = $(e).parent();
                jsPlumb.makeSource($(e), {
                    parent: p,
                    anchor: "Continuous",
                    connector: ["StateMachine", {
                        curviness: 20
                    }],
                    connectorStyle: {
                        strokeStyle: nextColour(),
                        lineWidth: 2
                    },
                    maxConnections: 5
                });
            });
            jsPlumb.makeTarget($(".w"), {
                dropOptions: {
                    hoverClass: "dragHover"
                },
                anchor: "Continuous"
            });
            uniqueId++;
        }
    });
    $(".world-box").draggable({
        containment: 'html',
        helper: 'clone',
        revert: 'invalid',
        grid: [10, 10]
    });
    $("#world-canvas").droppable({
        accept: '.world-box',
        drop: function(event, ui) {
            var elements = $(ui.helper).clone(true).removeClass('world-box ui-draggable ui-draggable-dragging').addClass('world-box-clone w').attr('id', 'world-box-' + uniqueId).appendTo('#world-canvas');
            var element = elements[0];
            var offset = $('#world-canvas').position().left - 100;
            $(".world-box-clone").draggable({
                containment: '#world-canvas',
                grid: [10, 10],
                drag: function(e, ui) {
                    ui.position.left = Math.floor(ui.position.left / 10) * 10;
                    ui.position.top = Math.floor(ui.position.top / 10) * 10;
                }
            });
            uniqueId++;

            var current_positon = $(element).css('left').slice(0, -2);
            current_positon = current_positon;
            var current_left = parseInt(current_positon, 10);
            var new_left = current_left + offset;
            $(element).css('left', new_left + "px");

            var type = '';
            if($(element).hasClass('world-box-blue')) {
                type = 'normal_brick';
            } else if($(element).hasClass('world-box-red')) {
                type = 'iron_brick';
            }

            world[uniqueId] = {
                top: parseInt($(element).css('top').slice(0, -2), 10),
                left: parseInt($(element).css('left').slice(0, -2), 10),
                type: type
            };

            console.log(world);
        }

    });

    $('#launch_button').click(function() {
        $('.pg_wrapper').hide();
        $('#cr-stage').show();
        $('.back_to_code').show();

        Game.start();
    });

    $('#back_to_code_btn').click(function() {
        $('#cr-stage').hide();
        $('.back_to_code').hide();
        $('.pg_wrapper').show();


        $('#cr-stage').html('');
        Crafty.stop(true);
    });
})();