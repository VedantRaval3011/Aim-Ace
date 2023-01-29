
let mind = new MindElixir({
    el: '#map',
    direction: MindElixir.LEFT,
    // or set as data that is return from `.getAllData()`
    // data: {...},
    draggable: true, // default true
    contextMenu: true, // default true
    toolBar: true, // default true
    nodeMenu: true, // default true
    keypress: true, // default true
  })
  mind.init(MindElixir.new('new topic'))
  console.log(mind)


  