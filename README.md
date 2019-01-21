# FSM  

State & Event  ->  State

config:

* initial: string, 初始状态
* events: [], 事件数组
  * event: {}
    * name: string，事件名称
    * from: string，出发状态
    * to: string, 目的状态
* callbacks: {}
  * on_leave_{state}，离开某状态
  * on_enter_{state}，转换至某状态

test.js为示例：  

 >FSM.create(config)：创建状态机  
 >fsm.handleEvent(event)：事件触发