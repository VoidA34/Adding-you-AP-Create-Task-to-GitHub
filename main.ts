function level1 () {
    tiles.setCurrentTilemap(level_list[0])
    jumper = sprites.create(img`
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . 1 1 1 1 f f f f f . . . . . . 
        . 1 1 1 1 4 4 4 4 f f . . . . . 
        . 1 1 1 f 4 4 4 4 4 f f . . . . 
        . 1 1 f 4 1 1 4 1 1 4 f . . . . 
        1 1 . f 4 4 f 4 f 4 4 f . . . . 
        . . . . f 4 4 4 4 4 f . . . . . 
        . . . f 4 4 4 4 4 4 4 f f f . f 
        . . f 4 4 f 4 4 f 4 4 4 4 4 f 4 
        . . f 4 4 f 4 4 f f f f f 4 4 4 
        . f 4 4 f f 4 4 4 4 f . . f f f 
        . f 4 4 f f 4 4 4 4 4 f f f 4 f 
        . f 4 f f 4 4 4 4 4 4 4 4 4 4 f 
        f 4 f f 4 4 4 4 f f f f f f f f 
        4 4 f f 4 4 4 f . . . . . . . . 
        f f f 4 4 f f . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(jumper, 100, 0)
    jumper.ay = 350
    scene.cameraFollowSprite(jumper)
    tiles.placeOnRandomTile(jumper, sprites.builtin.forestTiles0)
    power1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumper.vy == 0) {
        jumper.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
let power1: Sprite = null
let jumper: Sprite = null
let level_list: tiles.TileMapData[] = []
level_list = [tilemap`level2`, tilemap`level7`, tilemap`level9`]
scene.setBackgroundColor(9)
level1()
