Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    });
  },

  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height };
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  }
});

Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  }
});

Crafty.c('SolidBrick', {
  init: function() {
    this.requires('Actor, Color, Solid, spr_iron_brick')
      .color('rgb(192, 192, 192)');
  }
});

Crafty.c('PlayerCharacter', {
  init: function() {
    this.requires('Actor, Fourway, Color, Collision, spr_player, SpriteAnimation')
      .fourway(4)
      .color('rgb(87, 109, 20)')
      .stopOnSolids()
      .onHit('Brick', this.visitBrick)
      .animate('PlayerMovingUp',    0, 0, 2)
      .animate('PlayerMovingRight', 0, 1, 2)
      .animate('PlayerMovingDown',  0, 2, 2)
      .animate('PlayerMovingLeft',  0, 3, 2);

    var animation_speed = 8;
    this.bind('NewDirection', function(data) {
      if (data.x > 0) {
        this.animate('PlayerMovingRight', animation_speed, -1);
      } else if (data.x < 0) {
        this.animate('PlayerMovingLeft', animation_speed, -1);
      } else if (data.y > 0) {
        this.animate('PlayerMovingDown', animation_speed, -1);
      } else if (data.y < 0) {
        this.animate('PlayerMovingUp', animation_speed, -1);
      } else {
        this.stop();
      }
    });

  },

  stopOnSolids: function() {
    this.onHit('Solid', this.stopMovement);

    return this;
  },

  stopMovement: function() {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  },

  visitBrick: function(data) {
    villlage = data[0].obj;
    villlage.collect();
  }
});

Crafty.c('Brick', {
  init: function() {
    this.requires('Actor, Color, spr_normal_brick')
      .color('rgb(170, 125, 40)');
  },

  collect: function() {
    this.destroy();
  }
});